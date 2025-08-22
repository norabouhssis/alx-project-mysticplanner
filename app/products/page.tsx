"use client";
import React, { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Home, Grid2X2, AlignJustify, Square } from "lucide-react";
import { Button } from "../components/UI/Button";
import InputField from "../components/UI/Input";
import clsx from "clsx";
import {
  ProductCard,
  ProductCardRow,
  ProductCardBig,
} from "../components/Cards/ProductCard";
import {
  Theme,
  Layout,
  Size,
  ViewMode,
  SortKey,
  FiltersState,
  SIZES,
  LAYOUTS,
  THEMES,
} from "../interfaces/index";
import { PRODUCTSSAMPLE } from "../constants";

function parseParams(sp: URLSearchParams): FiltersState {
  const q = sp.get("q") || "";
  const themes = (sp.get("themes") || "").split(",").filter(Boolean) as Theme[];
  const sizes = (sp.get("sizes") || "").split(",").filter(Boolean) as Size[];
  const layouts = (sp.get("layouts") || "")
    .split(",")
    .filter(Boolean) as Layout[];
  const min = sp.get("min") ? Number(sp.get("min")) : undefined;
  const max = sp.get("max") ? Number(sp.get("max")) : undefined;
  const view = (sp.get("view") as ViewMode) || "grid";
  const sort = (sp.get("sort") as SortKey) || "relevance";
  const page = sp.get("page") ? Math.max(1, Number(sp.get("page"))) : 1;
  return { q, themes, sizes, layouts, min, max, view, sort, page };
}

function stringifyParams(fs: FiltersState) {
  const p = new URLSearchParams();
  if (fs.q) p.set("q", fs.q);
  if (fs.themes.length) p.set("themes", fs.themes.join(","));
  if (fs.sizes.length) p.set("sizes", fs.sizes.join(","));
  if (fs.layouts.length) p.set("layouts", fs.layouts.join(","));
  if (fs.min != null) p.set("min", String(fs.min));
  if (fs.max != null) p.set("max", String(fs.max));
  if (fs.view !== "grid") p.set("view", fs.view);
  if (fs.sort !== "relevance") p.set("sort", fs.sort);
  if (fs.page !== 1) p.set("page", String(fs.page));
  return p.toString();
}

export default function PlannersPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
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
    let list = [...PRODUCTSSAMPLE];
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
    if (filters.layouts.length) {
      list = list.filter((p) => filters.layouts.includes(p.layout));
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

  /* Pagination */
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

  const toggleLayout = (l: Layout) =>
    setFilters((s) => ({
      ...s,
      page: 1,
      layouts: s.layouts.includes(l)
        ? s.layouts.filter((x) => x !== l)
        : [...s.layouts, l],
    }));

  const clearAll = () =>
    setFilters({
      q: "",
      themes: [],
      sizes: [],
      layouts: [],
      view: "grid",
      sort: "relevance",
      page: 1,
    });

  return (
    <div className="w-screen">
      {/* Title section */}
      <TitleSection />

      <div className="flex items-start py-15 px-24 gap-15">
        {/* Filters panel */}
        <aside className="hidden lg:block">
          <FiltersPanel
            filters={filters}
            onToggleTheme={toggleTheme}
            onToggleSize={toggleSize}
            onToggleLayout={toggleLayout}
            setFilters={setFilters}
            onSetPrice={(min, max) =>
              setFilters((s) => ({ ...s, page: 1, min, max }))
            }
          />
        </aside>

        {/* Listing section */}
        <div className="flex flex-col items-center gap-10 flex-1 flex-grow">
          <div className="flex flex-rox justify-between items-end self-stretch">
            <div className="flex flex-row">
              <ViewToggle
                value={filters.view}
                onChange={(v) => setFilters((s) => ({ ...s, view: v }))}
              />
              {(filters.themes.length > 0 ||
                filters.sizes.length > 0 ||
                filters.layouts.length > 0 ||
                filters.q.trim() !== "" ||
                filters.min !== undefined ||
                filters.max !== undefined) && (
                <Button
                  variant="type3"
                  color="accent1"
                  size="md"
                  pill="false"
                  iconPosition="none"
                  label="Clear all"
                  onClick={clearAll}
                />
              )}
            </div>

            <SortDropdown
              value={filters.sort}
              onChange={(v) => setFilters((s) => ({ ...s, sort: v }))}
            />
          </div>
          <div className="flex-grow">
            {filters.view === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                {paged.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : filters.view === "list" ? (
              <div className="flex flex-col justify-between items-center content-center self-stretch gap-y-[27px] w-max">
                {paged.map((p) => (
                  <ProductCardRow key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {paged.map((p) => (
                  <ProductCardBig key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Components */

/* Title section */
const TitleSection = () => (
  <div className="flex flex-col items-center w-full px-24 py-15 gap-3 herobackground ">
    <p className="self-stretch text-center text-title">
      <span className="text-greyScaleText-title">Our </span>
      <span className="text-primaryText">planners</span>
    </p>
    <div className="flex items-center gap-[10px] px-[35px] py-2 rounded-m bg-greyScaleSurface boxshadow">
      <Home className="w-4 h-4 text-greyScaleText-title" />
      <p className="text-bodyMediumBold text-greyScaleText-title">Home</p>
      <p className="text-bodyMediumBold text-greyScaleText-title">/</p>
      <div className="flex items-start justify-center border-b-2 border-b-solid border-b-accent1Border">
        <p className="text-bodyMediumBold text-accent1Text">Planners</p>
      </div>
    </div>
  </div>
);

/* Filter panel */
type FiltersPanelProps = {
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
  onToggleTheme: (t: Theme) => void;
  onToggleSize: (s: Size) => void;
  onToggleLayout: (l: Layout) => void;
  onSetPrice: (min?: number, max?: number) => void;
};

const FiltersPanel = ({
  filters,
  onToggleTheme,
  onToggleLayout,
  onToggleSize,
  onSetPrice,
  setFilters,
}: FiltersPanelProps) => (
  <div className="flex flex-col items-start w-[261px] rouned-lg bg-greyScaleSurface-subtle p-[10px]">
    <div className="flex flex-row self-stretch">
      <InputField
        placeholder="Search"
        type="text"
        value={filters.q}
        onChange={(e) =>
          setFilters((s) => ({ ...s, q: e.target.value, page: 1 }))
        }
      />
    </div>

    {/* Themes */}
    <div className="flex flex-col items-start self-stretch gap-[16px] py-[16px] border-b-1 border-b-solid border-b-greyScaleBorder">
      <p className="flex h-6 flex-col justify-center self-stretch text-subheading text-greyScaleText-title">
        Theme
      </p>
      <ul className="flex flex-col items-start self-stretch gap-2">
        {THEMES.map((t) => (
          <li key={t} className="flex items-center self-stretch gap-2">
            <input
              id={`theme-${t}`}
              type="checkbox"
              className="h-5 w-5 rounded-full border-greyScaleBorder bg-greyScaleSurface focus:ring-2 focus:ring-primaryBorder"
              checked={filters.themes.includes(t)}
              onChange={() => onToggleTheme(t)}
            />
            <label
              htmlFor={`theme-${t}`}
              className="text-body text-greyScaleText-body cursor-pointer"
            >
              {t}
            </label>
          </li>
        ))}
      </ul>
    </div>

    {/* Size */}
    <div className="flex flex-col items-start self-stretch gap-[16px] py-[16px] border-b-1 border-b-solid border-b-greyScaleBorder">
      <p className="flex h-6 flex-col justify-center self-stretch text-subheading text-greyScaleText-title">
        Size
      </p>
      <ul className="flex justify-center flex-row items-start self-stretch gap-[10px]">
        {SIZES.map((s) => {
          const active = filters.sizes.includes(s.id);
          const Icon = s.icon;
          return (
            <li
              key={s.id}
              onClick={() => onToggleSize(s.id)}
              className={clsx(
                "flex flex-col justify-center items-center rounded-m bg-greyScaleSurface w-[46^px] py-1",
                active ? "bg-gray-100" : "hover:bg-gray-50"
              )}
            >
              <div className="flex justify-center items-center gap-[10px] w-[46px]">
                <Icon className="w-[37.25px] h-[51px] shrink-0" />
              </div>
              <label
                htmlFor={`size-${s}`}
                className="text-bodyMedium text-greyScaleText-title"
              >
                {s.title}
              </label>
              <label
                htmlFor={`size-${s}`}
                className="text-bodySmall text-greyScaleText-title"
              >
                {s.subtitle}
              </label>
            </li>
          );
        })}
      </ul>
    </div>

    {/* Layouts */}
    <div className="flex flex-col items-start self-stretch gap-[16px] py-[16px] border-b-1 border-b-solid border-b-greyScaleBorder">
      <p className="flex h-6 flex-col justify-center self-stretch text-subheading text-greyScaleText-title">
        Layout
      </p>
      <ul className="flex flex-col items-start self-stretch gap-2">
        {LAYOUTS.map((l) => (
          <li key={l} className="flex items-center self-stretch gap-2">
            <input
              id={`layout-${l}`}
              type="checkbox"
              className="h-5 w-5 rounded-full border-greyScaleBorder bg-greyScaleSurface focus:ring-2 focus:ring-primaryBorder"
              checked={filters.layouts.includes(l)}
              onChange={() => onToggleLayout(l)}
            />
            <label
              htmlFor={`layout-${l}`}
              className="text-body text-greyScaleText-body cursor-pointer"
            >
              {l}
            </label>
          </li>
        ))}
      </ul>
    </div>

    {/* Price */}
    <div className="flex flex-col items-start self-stretch gap-[16px] py-[16px] border-b-1 border-b-solid border-b-greyScaleBorder">
      <p className="flex h-6 flex-col justify-center self-stretch text-subheading text-greyScaleText-title">
        Price
      </p>
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
              className={clsx(
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
  </div>
);

function ViewToggle({
  value,
  onChange,
}: {
  value: ViewMode;
  onChange: (v: ViewMode) => void;
}) {
  return (
    <div className="flex justify-between items-end self-stretch gap-1">
      <Button
        variant="type3"
        color="accent1"
        size="lg"
        pill="false"
        iconPosition="alone"
        label="grid"
        Icon={<Grid2X2 />}
        onClick={() => onChange("grid")}
        aria-pressed={value === "grid"}
        state={value === "grid" ? "focus" : "default"}
      />
      <Button
        variant="type3"
        color="accent1"
        size="lg"
        pill="false"
        iconPosition="alone"
        label="list"
        Icon={<AlignJustify />}
        onClick={() => onChange("list")}
        aria-pressed={value === "list"}
        state={value === "list" ? "focus" : "default"}
      />
      <Button
        variant="type3"
        color="accent1"
        size="lg"
        pill="false"
        iconPosition="alone"
        label="big"
        Icon={<Square />}
        onClick={() => onChange("big")}
        aria-pressed={value === "big"}
        state={value === "big" ? "focus" : "default"}
      />
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
      className="flex items-center self-stretch w-[172px] min-h-[51px] gap-[10px] px-4 py-1 bg-greyScaleSurface border-1 border-solid border-greyScaleBorder rounded-m"
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
