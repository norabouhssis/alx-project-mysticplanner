import "./styles/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mystic Planner",
  description: "Plan your life with style",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-greyScaleSurface text-greyScaleText-body">
        {children}
      </body>
    </html>
  );
}
