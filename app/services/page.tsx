import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobil fuel, a workshop, restrooms, Wi-Fi, a 24-hour store, and truck parking at Cowboy Truck Stop 2 in Marshall, Texas.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you came off I-20 for."
        description="Mobil pumps, a workshop, working restrooms, Wi-Fi, a store that never closes, and room to park the truck. Fuel lives here with the rest of the stop — no extra trip around the lot."
      />

      <section className="site-shell pb-16 md:pb-24">
        <div className="space-y-6">
          {services.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="card scroll-mt-28 p-6 md:grid md:grid-cols-[0.9fr_1.2fr] md:gap-10 md:p-8"
            >
              <div>
                <p className="eyebrow">{item.eyebrow}</p>
                <h2 className="font-display mt-3 text-3xl text-cream">{item.title}</h2>
              </div>
              <div>
                <p className="text-tan">{item.copy}</p>
                <ul className="mt-5 space-y-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm text-cream">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                      {detail}
                    </li>
                  ))}
                </ul>
                {item.id === "fuel" ? (
                  <p className="mt-5 text-sm text-tan">
                    Hungry after you fill up?{" "}
                    <Link href="/eat" className="text-cream underline underline-offset-4">
                      Desi Dhaba is inside
                    </Link>
                    .
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
