"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { NoticeBanner } from "@/components/NoticeBanner";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    if (open) {
      setOpen(false);
    }
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_srgb,var(--navy-deep)_82%,transparent)] backdrop-blur-md">
      <NoticeBanner />
      <div className="hidden border-b border-line bg-navy-deep/80 text-tan md:block">
        <div className="site-shell flex items-center justify-between py-2 text-xs tracking-wide">
          <p>Temporarily closed · {site.exit}</p>
          <a href={`tel:${site.phone.raw}`} className="hover:text-cream">
            {site.phone.display}
          </a>
        </div>
      </div>

      <div className="site-shell flex h-[4.25rem] items-center justify-between md:h-[4.75rem]">
        <Link href="/" aria-label={`${site.name} home`} className="flex items-center gap-3">
          <Logo size={58} priority />
          <span className="hidden font-display text-sm leading-tight tracking-wide text-cream sm:block">
            Cowboy
            <br />
            Truck Stop 2
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              data-active={pathname === link.href}
            >
              {link.label}
            </Link>
          ))}
          <a href={`tel:${site.phone.raw}`} className="btn btn-primary">
            Call now
          </a>
        </nav>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`absolute h-[1.5px] w-5 bg-cream transition-transform duration-300 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-5 bg-cream transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-5 bg-cream transition-transform duration-300 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="mobile-panel border-t border-line bg-navy-deep md:hidden"
        >
          <nav className="site-shell flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-line py-3.5 text-base text-tan last:border-b-0 data-[active=true]:font-semibold data-[active=true]:text-cream"
                data-active={pathname === link.href}
              >
                {link.label}
              </Link>
            ))}
            <a href={`tel:${site.phone.raw}`} className="btn btn-primary mt-4">
              Call {site.phone.display}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
