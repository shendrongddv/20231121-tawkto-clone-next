import type { Metadata } from "next";
import { fontDisplay, fontBody } from "@/lib/fonts";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { ToastProvider } from "@/providers/toaster-provider";

export const metadata: Metadata = {
  title: {
    default: 'tawk.to - "100% FREE live chat software for your website!"',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
