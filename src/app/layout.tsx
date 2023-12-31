import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js image gallery",
  description: "Net Ninja tutorial series by Dave gray",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
