import "./styles/global.css";
import type { Metadata } from "next";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

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
      <body className="flex flex-col min-h-screen">
        <Header status="loggedIn" />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
