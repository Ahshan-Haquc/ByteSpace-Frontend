import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toast"

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Modern Education Platform",
  icons: {
    icon: "/brandIcon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
