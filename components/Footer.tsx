import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-navy-deep/80">
      <div className="site-shell grid gap-10 py-14 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <Link href="/" aria-label={`${site.name} home`} className="inline-flex items-center gap-3">
            <Logo size={72} />
            <span className="font-display text-lg leading-tight text-cream">
              Cowboy
              <br />
              Truck Stop 2
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-tan">{site.tagline}</p>
          <p className="mt-3 max-w-sm text-sm text-tan/80">
            A working I-20 stop in Marshall — Mobil fuel, Desi Dhaba, a workshop, and the basics
            that get you back on the highway.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-tan transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Find us</p>
          <ul className="mt-4 space-y-2.5 text-sm text-tan">
            <li>
              <a href={site.maps.directions} target="_blank" rel="noreferrer" className="hover:text-cream">
                {site.address.full}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.raw}`} className="hover:text-cream">
                {site.phone.display}
              </a>
            </li>
            <li>Fuel & store: {site.hours.fuel}</li>
            <li>Desi Dhaba: {site.hours.restaurant}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="site-shell flex flex-col gap-2 py-5 text-xs text-tan/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Marshall, Texas · I-20</p>
        </div>
      </div>
    </footer>
  );
}
