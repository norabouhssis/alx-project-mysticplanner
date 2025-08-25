import BigIcon from "@/app/assets/sizes/Big.svg";
import ClassicIcon from "@/app/assets/sizes/Classic.svg";
import SkinnyIcon from "@/app/assets/sizes/Skinny.svg";
import MiniIcon from "@/app/assets/sizes/Mini.svg";

export type Size = "Big" | "Classic" | "Skinny" | "Mini";

export type Color =
  | "Red"
  | "Blue"
  | "Green"
  | "Black"
  | "Orange"
  | "Yellow"
  | "White";

export type Layout =
  | "Vertical"
  | "Horizontal"
  | "Dashboard"
  | "Color block"
  | "Checklist"
  | "Monthly/Daily/Hourly";

export type Theme =
  | "Floral"
  | "Bold & Bright"
  | "Stargazer"
  | "Pets prints"
  | "Budget"
  | "Meal & Recipe"
  | "Events"
  | "Everyday essentials"
  | "Wellness & Self-care"
  | "Work life";

export type SortKey =
  | "relevance"
  | "price-asc"
  | "price-desc"
  | "newest"
  | "rating";

export type ViewMode = "grid" | "list" | "big";

export type FiltersState = {
  q: string;
  themes: Theme[];
  sizes: Size[];
  layouts: Layout[];
  min?: number;
  max?: number;
  view: ViewMode;
  sort: SortKey;
  page: number;
};

export interface SizeItem {
  id: Size;
  title: string;
  subtitle: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export type Review = {
  id: string | number;
  customer: string;
  time: string;
  title: string;
  comment: string;
  avatar: string;
  images: string[];
  rating: number;
  productId: string;
};

export interface ReviewSectionProps {
  productId: string;
}

export const THEMES: Theme[] = [
  "Floral",
  "Bold & Bright",
  "Stargazer",
  "Pets prints",
  "Budget",
  "Meal & Recipe",
  "Events",
  "Everyday essentials",
  "Wellness & Self-care",
  "Work life",
];

export const SIZES: SizeItem[] = [
  { id: "Big", title: "Big", subtitle: "21.59 x 27,94 cm", icon: BigIcon },
  {
    id: "Classic",
    title: "Classic",
    subtitle: "17,78 x 23,5 cm",
    icon: ClassicIcon,
  },
  {
    id: "Skinny",
    title: "Skinny",
    subtitle: "11.75 x 17.78 cm",
    icon: SkinnyIcon,
  },
  { id: "Mini", title: "Mini", subtitle: "10.48 x 23,5 cm", icon: MiniIcon },
];

export const LAYOUTS: Layout[] = [
  "Vertical",
  "Horizontal",
  "Dashboard",
  "Color block",
  "Checklist",
  "Monthly/Daily/Hourly",
];

export const COLORS: Color[] = [
  "Red",
  "Blue",
  "Green",
  "Black",
  "Orange",
  "Yellow",
  "White",
];

export interface TabsProps {
  activeTab: "features" | "reviews";
  setActiveTab: React.Dispatch<React.SetStateAction<"features" | "reviews">>;
  className?: string;
  children: React.ReactNode;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  theme: Theme;
  size: Size;
  layout: Layout;
  color: Color;
  image: {
    Image1: string;
    Image2: string;
    Image3: string;
    Image4: string;
  };
  createdAt: string;
}

export type CartItem = {
  productId: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  theme: Theme;
  size: Size;
  layout: Layout;
  color: Color;
  image: {
    Image1: string;
    Image2: string;
    Image3: string;
    Image4: string;
  };
  createdAt: string;
  quantity: number;
};

export type CartItemCardProps = {
  productId: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  theme: Theme;
  size: Size;
  layout: Layout;
  color: Color;
  image: {
    Image1: string;
    Image2: string;
    Image3: string;
    Image4: string;
  };
  createdAt: string;
  quantity: number;
};

