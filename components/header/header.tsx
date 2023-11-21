"use client";

import { useEffect, useState } from "react";

import { SiteLogo } from "../site-logo";
import { MenuToggle } from "./menu-toggle";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { MenuDesktop } from "./menu-desktop";

const TOP_OFFSET = 64;

const Header = () => {
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky left-0 top-0 z-50 w-full px-4 transition duration-300",
        navScroll ? "border-b bg-background" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center justify-center gap-2">
          {/* SiteLogo */}
          <SiteLogo />
        </div>

        {/* Center */}
        <MenuDesktop />

        {/* Right */}
        <div className="flex items-center justify-center gap-2">
          {/* # */}
          <Link
            href="/"
            aria-label="Login"
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "default",
                className: "hidden px-6 md:flex",
              }),
            )}
          >
            Login
          </Link>

          {/* # */}
          <Link
            href="/"
            aria-label="Sing Up Free"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "default",
                className: "px-6",
              }),
            )}
          >
            Sing Up Free
          </Link>

          {/* MenuToggle */}
          <MenuToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
