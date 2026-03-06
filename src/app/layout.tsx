import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safety Harbour Insurance | Protect What Matters Most",
  description: "Comprehensive insurance solutions that protect what matters most. From life to home, auto to health — we've got you covered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
