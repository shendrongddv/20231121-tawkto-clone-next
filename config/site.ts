export type SiteConfig = typeof siteConfig;

import { Apple, Box, Globe, Layout, Tablet, Wand2 } from "lucide-react";

export const siteConfig = {
  name: "Andri Irawan a.k.a Shendrong",
  description:
    "tawk.to is 100% free live chat software to monitor and chat with visitors on your website or from a free customizable page.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
};

// NavHeader
export const siteNavHeader = [
  {
    id: 1,
    label: "Products",
    desc: "DESCXXX",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Live Chat",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 2,
        label: "Chat Pages",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 3,
        label: "Contacts",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 4,
        label: "Knowledge Base",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 5,
        label: "AI Assist",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: true,
      },
    ],
  },
  {
    id: 2,
    label: "Services",
    desc: "DESCXXX",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Hire Chat Agents",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 2,
        label: "Hire a Virtual Assistant",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 3,
        label: "Virtual Assistant Use Cases",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 4,
        label: "Customers",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
    ],
  },
  {
    id: 3,
    label: "Partners",
    desc: "DESCXXX",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Become a Partner",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 2,
        label: "Partner Directory",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
    ],
  },
  {
    id: 4,
    label: "Resources",
    desc: "DESCXXX",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Help Center",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 2,
        label: "Academy",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 3,
        label: "Developers",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 4,
        label: "Blog",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 5,
        label: "Community",
        desc: "DESCXXX",
        url: "/",
        icon: Box,
        isAccent: false,
      },
    ],
  },
  {
    id: 4,
    label: "Why Free?",
    desc: "DESCXXX",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: false,
  },
];

// NavFooter
export const siteNavFooter = [
  {
    id: 1,
    title: "Products",
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Live Chat",
        url: "/",
        icon: null,
      },
      {
        id: 2,
        label: "Chat Pages",
        url: "/",
        icon: null,
      },
      {
        id: 3,
        label: "Knowledge Base",
        url: "/",
        icon: null,
      },
      {
        id: 4,
        label: "Contacts - a Free CRM",
        url: "/",
        icon: null,
      },
      {
        id: 5,
        label: "AI Assist",
        url: "/",
        icon: Wand2,
      },
    ],
  },
  {
    id: 1,
    title: "Services",
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Hire Chat Agents",
        url: "/",
        icon: null,
      },
      {
        id: 2,
        label: "Hire a Virtual Assistant",
        url: "/",
        icon: null,
      },
    ],
  },
  {
    id: 3,
    title: "Resources",
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Help Center",
        url: "/",
        icon: null,
      },
      {
        id: 2,
        label: "Academy",
        url: "/",
        icon: null,
      },
      {
        id: 3,
        label: "Developers",
        url: "/",
        icon: null,
      },
      {
        id: 4,
        label: "Status",
        url: "/",
        icon: null,
      },
      {
        id: 5,
        label: "Blog",
        url: "/",
        icon: null,
      },
    ],
  },
  {
    id: 4,
    title: "About",
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Why Free?",
        url: "/",
        icon: null,
      },
      {
        id: 2,
        label: "Careers - Join Us!",
        url: "/",
        icon: null,
      },
      {
        id: 3,
        label: "Customers",
        url: "/",
        icon: null,
      },
      {
        id: 4,
        label: "Partners",
        url: "/",
        icon: null,
      },
    ],
  },
  {
    id: 5,
    title: "Get tawk.to",
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Web Browser",
        url: "/",
        icon: Globe,
      },
      {
        id: 2,
        label: "Windows",
        url: "/",
        icon: Layout,
      },
      {
        id: 3,
        label: "macOS",
        url: "/",
        icon: Apple,
      },
      {
        id: 4,
        label: "iOS & Android",
        url: "/",
        icon: Tablet,
      },
    ],
  },
];
