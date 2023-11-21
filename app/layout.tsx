import type { Metadata } from "next";
import { fontDisplay, fontBody } from "@/lib/fonts";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'tawk.to - "100% FREE live chat software for your website!"',
  description:
    "tawk.to is 100% free live chat software to monitor and chat with visitors on your website or from a free customizable page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={cn(
          "font-body antialiased",
          fontDisplay.variable,
          fontBody.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
