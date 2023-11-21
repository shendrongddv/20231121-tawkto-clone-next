import { siteNavFooter } from "@/config/site";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  LucideIcon,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#242424] text-white/80">
      {/* Row */}
      <div className="px-4">
        <div className="container space-y-12 py-12 pt-24">
          {/* Row */}
          <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-5 md:gap-8">
            <h4 className="col-span-2 text-center font-bold text-white max-md:mb-1 md:col-span-1 md:-translate-y-0.5 md:text-start">
              {siteNavFooter[4].title}
            </h4>

            {siteNavFooter[4]?.links?.map((item) => (
              <LinkItem
                key={item.id}
                label={item.label}
                url={item.url}
                icon={item.icon}
              />
            ))}
          </div>

          {/* Row */}
          <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-5">
            {siteNavFooter?.slice(0, 4)?.map((item) => (
              // Col
              <div
                key={item.id}
                className="flex flex-col items-center gap-3 md:items-start"
              >
                <h4 className="font-bold text-primary">{item.title}</h4>

                <ul className="grid w-full grid-cols-2 gap-2 md:grid-cols-1">
                  {item.links?.map((item) => (
                    <li key={item.id}>
                      <LinkItem
                        label={item.label}
                        url={item.url}
                        icon={item.icon}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Col */}
            <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-start">
              <h4 className="font-bold text-primary">Let&apos;s tawk?</h4>

              <p className="text-sm">
                The green widget you see below this text is the tawk.to live
                chat widget, if you click it you will see the window maximize
                and you will be able to chat with the tawk.to team 24x7-365. You
                can add a chat widget like this on your own site, with your own
                custom colors, messages, size, position and language. Click the
                widget and give it a try!
              </p>
            </div>
          </div>

          {/* Row */}
          <div className="flex flex-col-reverse items-center gap-4 md:flex-row md:justify-between">
            {/* Col */}
            <ul className="flex items-center justify-center gap-4">
              <li>
                <Link
                  href="/"
                  aria-label="Privacy & Terms"
                  className="text-xs hover:text-white hover:underline hover:underline-offset-4"
                >
                  Privacy & Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  aria-label="Report Abuse"
                  className="text-xs hover:text-white hover:underline hover:underline-offset-4"
                >
                  Report Abuse
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  aria-label="Contact Us"
                  className="text-xs hover:text-white hover:underline hover:underline-offset-4"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Col */}
            <ul className="flex items-center justify-center gap-1">
              <li>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group aspect-1 p-2 transition duration-300 hover:bg-primary"
                >
                  <Linkedin className="h-5 w-5 text-primary transition duration-300 group-hover:scale-125 group-hover:text-white" />
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group aspect-1 p-2 transition duration-300 hover:bg-primary"
                >
                  <Twitter className="h-5 w-5 text-primary transition duration-300 group-hover:scale-125 group-hover:text-white" />
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group aspect-1 p-2 transition duration-300 hover:bg-primary"
                >
                  <Facebook className="h-5 w-5 text-primary transition duration-300 group-hover:scale-125 group-hover:text-white" />
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group aspect-1 p-2 transition duration-300 hover:bg-primary"
                >
                  <Instagram className="h-5 w-5 text-primary transition duration-300 group-hover:scale-125 group-hover:text-white" />
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group aspect-1 p-2 transition duration-300 hover:bg-primary"
                >
                  <Youtube className="h-5 w-5 text-primary transition duration-300 group-hover:scale-125 group-hover:text-white" />
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group aspect-1 p-2 transition duration-300 hover:bg-primary"
                >
                  <Globe className="h-5 w-5 text-primary transition duration-300 group-hover:scale-125 group-hover:text-white" />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Row */}
      <div className="border-t border-primary px-4">
        <div className="container flex justify-center py-6 md:justify-start">
          <span className="text-center text-xs md:text-start">
            © Copyright 2023 tawk.to, inc. All Rights Reserved. Various
            trademarks held by their respective owners
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Components
type LinkItemProps = {
  label: string;
  url: string;
  icon?: LucideIcon | null;
};
const LinkItem = ({ label, url, icon: Icon }: LinkItemProps) => {
  return (
    <Link
      href={url}
      aria-label={label}
      className="flex items-center justify-center gap-2 text-sm hover:text-white hover:underline hover:underline-offset-4 md:justify-start"
    >
      {Icon && <Icon className="h-4 w-4 text-primary" />}
      {label}
    </Link>
  );
};
