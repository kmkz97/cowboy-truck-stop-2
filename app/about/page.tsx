import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cowboy Truck Stop 2 is a 24-hour I-20 stop in Marshall, Texas — Mobil fuel, Desi Dhaba, a workshop, and the basics drivers count on.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the stop"
        title="A working stop on a working highway."
        description="Cowboy Truck Stop 2 sits on I-20 in Marshall. Drivers come off for diesel, a plate from Desi Dhaba, a restroom that works, and enough Wi-Fi to check the next load. Locals use it the same way — fuel, food, and a store that does not close."
      />

      <section className="site-shell pb-16 md:pb-24">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
          <div className="space-y-5 text-base text-tan md:text-lg">
            <p>
              East Texas interstates are long, and the good exits are the ones you
              remember. We keep this lot simple: Mobil pumps that stay open,
              a dhaba that cooks like a kitchen instead of a warmer, and a
              workshop when something on the truck cannot wait.
            </p>
            <p>
              The name is Cowboy Truck Stop 2 because that is what people already
              call it. Same stretch of I-20, same job — get you fueled, fed, and
              pointed back toward Dallas or Shreveport without a runaround.
            </p>
            <p>
              If you are new to Marshall, you will find us at 304 I-20. Pull in
              for gasoline or diesel, grab chai and a paratha, use the restroom,
              and get back on the road. That is the whole pitch.
            </p>
          </div>

          <aside className="card h-fit p-6 md:p-8">
            <p className="eyebrow">At a glance</p>
            <dl className="mt-6 space-y-5">
              {[
                ["Location", site.address.full],
                ["Fuel", "Mobil · 24 hours"],
                ["Kitchen", "Desi Dhaba · 6 AM – 10 PM"],
                ["Phone", site.phone.display],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm text-tan/80">{label}</dt>
                  <dd className="mt-1 font-medium text-cream">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Built for the interstate",
              copy: "Truck parking, diesel, fleet cards, and a store that stays open after the town has gone quiet.",
            },
            {
              title: "Food worth the exit",
              copy: "Desi Dhaba is why a lot of drivers remember this stop. Real plates, not just fried snacks.",
            },
            {
              title: "Help when you need it",
              copy: "Workshop on site, restrooms that work, and a phone that a person answers.",
            },
          ].map((item) => (
            <article key={item.title} className="border-t border-red pt-5">
              <h2 className="font-display text-2xl text-cream">{item.title}</h2>
              <p className="mt-3 text-sm text-tan md:text-base">{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link href="/services" className="btn btn-primary">
            What we offer
          </Link>
          <Link href="/eat" className="btn btn-ghost">
            Meet Desi Dhaba
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
