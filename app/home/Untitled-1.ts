"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Grid2X2,
  List,
  SlidersHorizontal,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Heart,
  ShoppingCart,
} from "lucide-react";

/**
 * Mystic Planner — Products Page
 * ------------------------------------------------------
 * - Responsive sidebar filters (drawer on mobile)
 * - Grid/List view toggle
 * - Sorting, search, pagination
 * - URL query param syncing for shareable/persistent filters
 * - TailwindCSS only — drop-in to app/(shop)/products/page.tsx
 * ------------------------------------------------------
 */

// ---- Mock data (replace with real API) -------------------------------------

type Theme =
  | "Everyday"
  | "Wellness"
  | "Study"
  | "Work"
  | "Travel"
  | "Ramadan"
  | "Kids";

type Size = "A5" | "A6" | "B5" | "Pocket";

type Product = {
  id: string;
  title: string;
  price: number; // in MAD
  rating: number; // 0..5
  theme: Theme;
  size: Size;
  color: string; // tailwind color token or hex
  image: string; // public path
  badge?: string;
  createdAt: string; // ISO date
};

const PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "1-to-1 Wedding Mystic Planner",
    price: 299,
    rating: 4.7,
    theme: "Work",
    size: "A5",
    color: "#7C3AED",
    image: "/assets/products/black-planner.jpg",
    badge: "New",
    createdAt: "2025-08-01",
  },
  {
    id: "p2",
    title: "Daily Mystic Planner",
    price: 199,
    rating: 4.3,
    theme: "Everyday",
    size: "A6",
    color: "#14B8A6",
    image: "/assets/products/gray-planner.jpg",
    createdAt: "2025-07-10",
  },
  {
    id: "p3",
    title: "Wellness Mystic Journal",
    price: 249,
    rating: 4.8,
    theme: "Wellness",
    size: "B5",
    color: "#F59E0B",
    image: "/assets/products/blue-planner.jpg",
    createdAt: "2025-06-20",
  },
  {
    id: "p4",
    title: "Study Mystic Planner",
    price: 179,
    rating: 4.1,
    theme: "Study",
    size: "A5",
    color: "#06B6D4",
    image: "/assets/products/yellow-planner.jpg",
    createdAt: "2025-06-05",
  },
  {
    id: "p5",
    title: "Travel Mystic Planner",
    price: 229,
    rating: 4.5,
    theme: "Travel",
    size: "Pocket",
    color: "#9333EA",
    image: "/assets/products/leather-planner.jpg",
    createdAt: "2025-05-22",
  },
  {
    id: "p6",
    title: "Work Mystic Planner",
    price: 209,
    rating: 4.0,
    theme: "Work",
    size: "A6",
    color: "#0EA5E9",
    image: "/assets/products/teacup-planner.jpg",
    createdAt: "2025-05-01",
  },
  {
    id: "p7",
    title: "Kids Creative Planner",
    price: 149,
    rating: 4.6,
    theme: "Kids",
    size: "Pocket",
    color: "#F97316",
    image: "/assets/products/yellow-flatlay.jpg",
    createdAt: "2025-04-28",
  },
  {
    id: "p8",
    title: "Ramadan Reflection Planner",
    price: 189,
    rating: 4.9,
    theme: "Ramadan",
    size: "A5",
    color: "#10B981",
    image: "/assets/products/desk-planner.jpg",
    createdAt: "2025-04-10",
  },
  {
    id: "p9",
    title: "Minimal Mystic Planner",
    price: 259,
    rating: 4.4,
    theme: "Everyday",
    size: "B5",
    color: "#8B5CF6",
    image: "/assets/products/moodboard-planner.jpg",
    createdAt: "2025-03-15",
  },
];

// ---- Utilities --------------------------------------------------------------

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function toCurrencyMAD(n: number) {
  return new Intl.NumberFormat("fr-MA", {
    style: "currency",
    currency: "MAD",
  }).format(n);
}

// ---- Query Param helpers ----------------------------------------------------

type SortKey = "relevance" | "price-asc" | "price-desc" | "newest" | "rating";

type ViewMode = "grid" | "list";

type FiltersState = {
  q: string;
  themes: Theme[];
  sizes: Size[];
  min?: number;
  max?: number;
  view: ViewMode;
  sort: SortKey;
  page: number;
};

const THEMES: Theme[] = [
  "Everyday",
  "Wellness",
  "Study",
  "Work",
  "Travel",
  "Ramadan",
  "Kids",
];
const SIZES: Size[] = ["A5", "A6", "B5", "Pocket"];

function parseParams(sp: URLSearchParams): FiltersState {
  const q = sp.get("q") || "";
  const themes = (sp.get("themes") || "").split(",").filter(Boolean) as Theme[];
  const sizes = (sp.get("sizes") || "").split(",").filter(Boolean) as Size[];
  const min = sp.get("min") ? Number(sp.get("min")) : undefined;
  const max = sp.get("max") ? Number(sp.get("max")) : undefined;
  const view = (sp.get("view") as ViewMode) || "grid";
  const sort = (sp.get("sort") as SortKey) || "relevance";
  const page = sp.get("page") ? Math.max(1, Number(sp.get("page"))) : 1;
  return { q, themes, sizes, min, max, view, sort, page };
}

function stringifyParams(fs: FiltersState) {
  const p = new URLSearchParams();
  if (fs.q) p.set("q", fs.q);
  if (fs.themes.length) p.set("themes", fs.themes.join(","));
  if (fs.sizes.length) p.set("sizes", fs.sizes.join(","));
  if (fs.min != null) p.set("min", String(fs.min));
  if (fs.max != null) p.set("max", String(fs.max));
  if (fs.view !== "grid") p.set("view", fs.view);
  if (fs.sort !== "relevance") p.set("sort", fs.sort);
  if (fs.page !== 1) p.set("page", String(fs.page));
  return p.toString();
}

// ---- Page -------------------------------------------------------------------

export default function ProductsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FiltersState>(() =>
    parseParams(new URLSearchParams(searchParams?.toString()))
  );

  // Keep filters in sync with URL
  useEffect(() => {
    const next = stringifyParams(filters);
    const current = searchParams?.toString() || "";
    if (next !== current) {
      router.replace(`${pathname}?${next}`);
    }
  }, [filters, pathname, router, searchParams]);

  // Recompute list based on filters
  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (filters.q) {
      const q = filters.q.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }
    if (filters.themes.length) {
      list = list.filter((p) => filters.themes.includes(p.theme));
    }
    if (filters.sizes.length) {
      list = list.filter((p) => filters.sizes.includes(p.size));
    }
    if (filters.min != null) list = list.filter((p) => p.price >= filters.min!);
    if (filters.max != null) list = list.filter((p) => p.price <= filters.max!);

    // sorting
    switch (filters.sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // relevance: leave as-is (mock)
        break;
    }
    return list;
  }, [filters]);

  // Pagination
  const pageSize = filters.view === "grid" ? 9 : 6;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const page = Math.min(filters.page, totalPages);
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const toggleTheme = (t: Theme) =>
    setFilters((s) => ({
      ...s,
      page: 1,
      themes: s.themes.includes(t)
        ? s.themes.filter((x) => x !== t)
        : [...s.themes, t],
    }));

  const toggleSize = (sz: Size) =>
    setFilters((s) => ({
      ...s,
      page: 1,
      sizes: s.sizes.includes(sz)
        ? s.sizes.filter((x) => x !== sz)
        : [...s.sizes, sz],
    }));

  const clearAll = () =>
    setFilters({
      q: "",
      themes: [],
      sizes: [],
      view: "grid",
      sort: "relevance",
      page: 1,
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-cyan-50 to-white">
      /* Content */
      <div className="mx-auto max-w-7xl px-4 py-6 grid lg:grid-cols-[16rem_1fr] gap-6">
        /* Sidebar */
        <aside className="hidden lg:block">
          <FiltersPanel
            filters={filters}
            onToggleTheme={toggleTheme}
            onToggleSize={toggleSize}
            onSetPrice={(min, max) =>
              setFilters((s) => ({ ...s, page: 1, min, max }))
            }
            onClearAll={clearAll}
          />
        </aside>
        /* Results */
        <main>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">{filtered.length} items</p>
            {Boolean(
              filters.themes.length ||
                filters.sizes.length ||
                filters.q ||
                filters.min != null ||
                filters.max != null
            ) && (
              <button
                className="text-sm text-purple-600 hover:underline"
                onClick={clearAll}
              >
                Clear all
              </button>
            )}
          </div>
          {filters.view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {paged.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {paged.map((p) => (
                <ProductRow key={p.id} product={p} />
              ))}
            </div>
          )}
          /* Empty state */
          {filtered.length === 0 && (
            <div className="border rounded-2xl p-10 text-center mt-6 bg-white">
              <p className="text-lg font-medium">
                No planners match your filters
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Try adjusting or clearing filters to find more results.
              </p>
              <button
                className="mt-4 rounded-xl bg-purple-600 text-white px-4 py-2"
                onClick={clearAll}
              >
                Clear filters
              </button>
            </div>
          )}
          {/* Pagination */}
          {filtered.length > 0 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              <button
                className="inline-flex items-center gap-1 rounded-xl border px-3 py-2 text-sm disabled:opacity-50"
                onClick={() =>
                  setFilters((s) => ({ ...s, page: Math.max(1, s.page - 1) }))
                }
                disabled={page === 1}
              >
                <ChevronLeft className="h-4 w-4" /> Prev
              </button>
              <span className="text-sm text-gray-600">
                Page {page} of {totalPages}
              </span>
              <button
                className="inline-flex items-center gap-1 rounded-xl border px-3 py-2 text-sm disabled:opacity-50"
                onClick={() =>
                  setFilters((s) => ({
                    ...s,
                    page: Math.min(totalPages, s.page + 1),
                  }))
                }
                disabled={page === totalPages}
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// ---- Components -------------------------------------------------------------

type FiltersPanelProps = {
  filters: FiltersState;
  onToggleTheme: (t: Theme) => void;
  onToggleSize: (s: Size) => void;
  onSetPrice: (min?: number, max?: number) => void;
  onClearAll: () => void;
};

function FiltersPanel({
  filters,
  onToggleTheme,
  onToggleSize,
  onSetPrice,
  onClearAll,
}: FiltersPanelProps) {
  return (
    <div className="bg-white rounded-2xl border p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Refine</h3>
        <button
          className="text-sm text-purple-600 hover:underline"
          onClick={onClearAll}
        >
          Reset
        </button>
      </div>

      {/* Themes */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Theme</h4>
        <ul className="space-y-2">
          {THEMES.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <input
                id={`theme-${t}`}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                checked={filters.themes.includes(t)}
                onChange={() => onToggleTheme(t)}
              />
              <label
                htmlFor={`theme-${t}`}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {t}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Size */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Size</h4>
        <div className="grid grid-cols-4 gap-2">
          {SIZES.map((s) => {
            const active = filters.sizes.includes(s);
            return (
              <button
                key={s}
                onClick={() => onToggleSize(s)}
                className={classNames(
                  "rounded-xl border px-2 py-2 text-xs font-medium",
                  active
                    ? "border-purple-600 text-purple-700 bg-purple-50"
                    : "hover:bg-gray-50"
                )}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Price</h4>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Any", min: undefined, max: undefined },
            { label: "< 200 MAD", min: undefined, max: 199 },
            { label: "200–250 MAD", min: 200, max: 250 },
            { label: "> 250 MAD", min: 251, max: undefined },
          ].map((r) => {
            const active = r.min === filters.min && r.max === filters.max;
            return (
              <button
                key={r.label}
                onClick={() => onSetPrice(r.min, r.max)}
                className={classNames(
                  "rounded-xl border px-3 py-1.5 text-xs",
                  active
                    ? "border-purple-600 text-purple-700 bg-purple-50"
                    : "hover:bg-gray-50"
                )}
              >
                {r.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Help text */}
      <p className="text-xs text-gray-500">
        Filters update results instantly. Share your selections via the URL.
      </p>
    </div>
  );
}

function ViewToggle({
  value,
  onChange,
}: {
  value: ViewMode;
  onChange: (v: ViewMode) => void;
}) {
  return (
    <div className="inline-flex rounded-2xl border bg-white p-1 shadow-sm">
      <button
        className={classNames(
          "inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-sm",
          value === "grid" ? "bg-purple-600 text-white" : "hover:bg-gray-50"
        )}
        onClick={() => onChange("grid")}
        aria-pressed={value === "grid"}
      >
        <Grid2X2 className="h-4 w-4" />
      </button>
      <button
        className={classNames(
          "inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-sm",
          value === "list" ? "bg-purple-600 text-white" : "hover:bg-gray-50"
        )}
        onClick={() => onChange("list")}
        aria-pressed={value === "list"}
      >
        <List className="h-4 w-4" />
      </button>
    </div>
  );
}

function SortDropdown({
  value,
  onChange,
}: {
  value: SortKey;
  onChange: (v: SortKey) => void;
}) {
  return (
    <select
      className="rounded-2xl border px-3 py-2 text-sm bg-white shadow-sm"
      value={value}
      onChange={(e) => onChange(e.target.value as SortKey)}
    >
      <option value="relevance">Default sorting</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="newest">Newest</option>
      <option value="rating">Top Rated</option>
    </select>
  );
}

function RatingStars({ rating }: { rating: number }) {
  // simple display: rounded to 0.5
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div
      className="flex items-center gap-1 text-xs text-amber-500"
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < full ? "★" : i === full && half ? "☆" : "☆"}</span>
      ))}
      <span className="ml-1 text-gray-500">{rating.toFixed(1)}</span>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group bg-white rounded-2xl border shadow-sm overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium">
            {product.badge}
          </span>
        )}
        <button
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow hover:bg-white"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-medium line-clamp-2 text-gray-800 group-hover:text-purple-700">
          {product.title}
        </h3>
        <RatingStars rating={product.rating} />
        <div className="flex items-center justify-between pt-2">
          <span className="text-base font-semibold text-purple-700">
            {toCurrencyMAD(product.price)}
          </span>
          <button className="inline-flex items-center gap-2 rounded-xl bg-purple-600 text-white px-3 py-1.5 text-sm hover:bg-purple-700">
            <ShoppingCart className="h-4 w-4" /> Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductRow({ product }: { product: Product }) {
  return (
    <article className="bg-white rounded-2xl border shadow-sm overflow-hidden p-3 flex items-center gap-4">
      <div className="relative w-40 h-28 shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-800 line-clamp-1">
          {product.title}
        </h3>
        <div className="mt-1 flex items-center gap-3 text-sm text-gray-600">
          <span>{product.theme}</span>
          <span>•</span>
          <span>{product.size}</span>
        </div>
        <div className="mt-2">
          <RatingStars rating={product.rating} />
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="text-lg font-semibold text-purple-700">
          {toCurrencyMAD(product.price)}
        </span>
        <div className="flex items-center gap-2">
          <button className="rounded-xl border px-3 py-1.5 text-sm">
            Details
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-purple-600 text-white px-3 py-1.5 text-sm hover:bg-purple-700">
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
