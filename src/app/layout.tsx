import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toast"
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Modern Education Platform",
  icons: {
    icon: "/brandIcon.png",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
