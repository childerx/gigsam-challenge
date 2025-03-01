
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXLine,
  RiYoutubeFill,
} from "react-icons/ri";
import { TbExternalLink } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { MdOutlinePreview } from "react-icons/md";

export const conformanceData = [
  {
    name: "Excellent",
    value: "9.5",
  },
  {
    name: "Total Issues",
    value: "34",
  },
  {
    name: "Major Issues",
    value: "12",
  },
];

export const codeOwners = [
  {
    name: "@vercel/design",
    owners: [
      "https://vercel.com/api/www/avatar?u=rauno&s=44",
      "https://vercel.com/api/www/avatar?u=gennydee&s=44",
      "https://vercel.com/api/www/avatar?u=gln&s=44",
    ],
  },
  {
    name: "@vercel/eng",
    owners: [
      "https://vercel.com/api/www/avatar?u=timer&s=44",
      "https://vercel.com/api/www/avatar?u=jared&s=44",
      "https://vercel.com/api/www/avatar?u=cramforce&s=44",
      "https://vercel.com/api/www/avatar?u=gkaragkiaouris&s=44",
      "https://vercel.com/api/www/avatar?u=tomocchino&s=44",
    ],
  },
  {
    name: "@vercel/marketing",
    owners: [
      "https://vercel.com/api/www/avatar?u=greetah&s=44",
      "https://vercel.com/api/www/avatar?u=m0rgane&s=44",
      "https://vercel.com/api/www/avatar?u=lindsaygilson&s=44",
    ],
  },
];

interface FooterLink {
  name: string;
  path: string;
  icon?: React.ElementType;
  iconPosition?: "left" | "right";
}

interface FooterCategory {
  category: string;
  links: FooterLink[];
}

export const footerLinks: FooterCategory[] = [
  {
    category: "Products",
    links: [
      { name: "AI", path: "/ai" },
      { name: "Enterprise", path: "/enterprise" },
      { name: "Fluid Compute", path: "/fluid-compute" },
      { name: "Next.js", path: "/nextjs" },
      { name: "Observability", path: "/observability" },
      { name: "Previews", path: "/previews" },
      { name: "Rendering", path: "/rendering" },
      { name: "Security", path: "/security" },
      { name: "Turbo", path: "/turbo" },
      { name: "v0", path: "/v0", icon: TbExternalLink, iconPosition: "right" },
    ],
  },
  {
    category: "Resources",
    links: [
      {
        name: "Community",
        path: "/community",
        icon: TbExternalLink,
        iconPosition: "right",
      },
      { name: "Docs", path: "/docs" },
      { name: "Guides", path: "/guides" },
      { name: "Help", path: "/help" },
      { name: "Integrations", path: "/integrations" },
      { name: "Pricing", path: "/pricing" },
      { name: "Resources", path: "/resources" },
      { name: "Solution Partners", path: "/solution-partners" },
      { name: "Templates", path: "/templates" },
    ],
  },
  {
    category: "Company",
    links: [
      { name: "About", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/careers" },
      { name: "Changelog", path: "/changelog" },
      { name: "Contact Us", path: "/contact" },
      { name: "Customers", path: "/customers" },
      { name: "Partners", path: "/partners" },
      { name: "Privacy Policy", path: "/privacy" },
      {
        name: "Legal",
        path: "/legal",
        icon: RiArrowDropDownLine,
        iconPosition: "right",
      },
    ],
  },
  {
    category: "Social",
    links: [
      {
        name: "GitHub",
        path: "https://github.com",
        icon: RiGithubFill,
        iconPosition: "left",
      },
      {
        name: "LinkedIn",
        path: "https://linkedin.com",
        icon: RiLinkedinBoxFill,
        iconPosition: "left",
      },
      {
        name: "Twitter",
        path: "https://twitter.com",
        icon: RiTwitterXLine,
        iconPosition: "left",
      },
      {
        name: "YouTube",
        path: "https://youtube.com",
        icon: RiYoutubeFill,
        iconPosition: "left",
      },
    ],
  },
];

interface NavItem {
  label: string;
  href?: string;
  categories?: {
    label: string;
    links: { icon: any; title: string; description: string; href: string }[];
  }[];

  subItems?: {
    label: string;
    href: string;
  }[];
}

export const navItems: NavItem[] = [
  {
    label: "Products",
    categories: [
      {
        label: "DX Platform",
        links: [
          {
            icon: MdOutlinePreview,
            title: "Previews",
            description: "Preview deploys for every push to git.",
            href: "#",
          },
          {
            icon: BsStars,
            title: "AI",
            description: "Powering breakthroughs in AI.",
            href: "#",
          },
        ],
      },
      {
        label: "Managed Infrastucture",
        links: [
          {
            icon: MdOutlinePreview,
            title: "Fluid compute",
            description: "Serverless functions, databases, and more.",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Rendering",
            description: "Serverless rendering for any framework.",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Observability",
            description: "Trace every step",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Security",
            description: "Scale without compromising",
            href: "#",
          },
        ],
      },
      {
        label: "Open Source",
        links: [
          {
            icon: MdOutlinePreview,
            title: "Next.js",
            description: "The React Framework",

            href: "#",
          },
          {
            icon: BsStars,
            title: "Turborepo",
            description: "Speed with Enrterprise Scale",
            href: "#",
          },
          {
            icon: BsStars,
            title: "AI SDK",
            description: "The AI SDK for the web",
            href: "#",
          },
        ],
      },
    ],

    subItems: [
      { label: "Previews", href: "#" },
      { label: "Full Compute", href: "#" },
      { label: "Edge Middleware", href: "#" },
      { label: "Frontend Infra", href: "#" },
      { label: "Observability", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    label: "Solutions",
    categories: [
      {
        label: "Use Cases",
        links: [
          {
            icon: MdOutlinePreview,
            title: "AI Apps",
            description: "Deploy at the speed of AI",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Composable Commerce",
            description: "Powering breakthroughs in AI.",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Marketing Sites",
            description: "Powering breakthroughs in AI.",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Multi-tenant Platform",
            description: "Powering breakthroughs in AI.",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Web Apps",
            description: "Powering breakthroughs in AI.",
            href: "#",
          },
        ],
      },
      {
        label: "Users",
        links: [
          {
            icon: MdOutlinePreview,
            title: "Platform Engineers ",
            description: "Serverless functions, databases, and more.",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Design Engineers",
            description: "Serverless rendering for any framework.",
            href: "#",
          },
        ],
      },
    ],
    subItems: [
      { label: "E-commerce", href: "#" },
      { label: "SaaS", href: "#" },
      { label: "Marketing Sites", href: "#" },
    ],
  },
  {
    label: "Resources",
    categories: [
      {
        label: "Tools",
        links: [
          {
            icon: MdOutlinePreview,
            title: "Resource Center",
            description: "Deploy at the speed of AI",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Marketplace",
            description: "Powering breakthroughs in AI.",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Templates",
            description: "Powering breakthroughs in AI.",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Guides",
            description: "Powering breakthroughs in AI.",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Partner Finder",
            description: "Powering breakthroughs in AI.",
            href: "#",
          },
        ],
      },
      {
        label: "Company",
        links: [
          {
            icon: MdOutlinePreview,
            title: "Customers",
            description: "Serverless functions",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Blog",
            description: "Serverless rendering for any framework.",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Changelog",
            description: "Serverless rendering ",
            href: "#",
          },
          {
            icon: BsStars,
            title: "Press",
            description: "Serverless rendering",
            href: "#",
          },
        ],
      },
    ],
    subItems: [
      { label: "Docs", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  { label: "Enterprise", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Pricing", href: "#" },
];
