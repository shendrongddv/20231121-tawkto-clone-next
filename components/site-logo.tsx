"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { SheetClose } from "./ui/sheet";

export const SiteLogo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/" aria-label="tawk.to">
      <Image
        priority
        aria-hidden
        src={theme === "light" ? "/tawk-sitelogo.webp" : "/tawk-sitelogo.webp"}
        alt="tawk.to"
        width={40}
        height={40}
        className="h-12 w-auto"
      />
    </Link>
  );
};

export const SiteLogoMobile = () => {
  const { theme } = useTheme();

  return (
    <SheetClose asChild>
      <Link href="/" aria-label="tawk.to">
        <Image
          priority
          aria-hidden
          src={
            theme === "light" ? "/tawk-sitelogo.webp" : "/tawk-sitelogo.webp"
          }
          alt="tawk.to"
          width={40}
          height={40}
          className="h-12 w-auto"
        />
      </Link>
    </SheetClose>
  );
};
