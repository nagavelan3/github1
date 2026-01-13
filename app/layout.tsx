import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CMP Builders - Building Excellence",
  description: "Professional Construction Services",
  icons: {
    icon: '/pinki.ico',
    // icon: '/orangi.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
