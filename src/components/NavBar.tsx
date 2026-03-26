"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/aims", label: "Aims" },
  { href: "/data", label: "Data" },
  { href: "/methodology", label: "Methodology" },
  { href: "/rppr", label: "RPPR" },
  { href: "/applications", label: "Applications" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full bg-[var(--harvard-crimson)] text-white">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 md:px-10">
        <Link className="text-xl font-bold tracking-wide md:text-2xl" href="/">
          CSRP
        </Link>
        <div className="flex flex-wrap items-center gap-2 text-base font-semibold">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-4 py-2 transition-colors hover:bg-white/10 ${
                  isActive ? "bg-white/10" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
