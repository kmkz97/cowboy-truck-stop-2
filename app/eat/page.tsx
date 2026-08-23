import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { menuHighlights, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Desi Dhaba",
  description:
    "Desi Dhaba is the Indian and Pakistani restaurant inside Cowboy Truck Stop 2 in Marshall, Texas. Open 6 AM to 10 PM for dine-in and takeout.",
};

export default function EatPage() {
  return (
    <>
      <PageHero
        eyebrow="The kitchen"
        title="Desi Dhaba. Highway food that tastes like home."
        description="Indian and Pakistani cooking inside Cowboy Truck Stop 2 — curries, biryani, paratha, and chai for drivers, families, and anyone who would rather eat a real plate than another bag of chips."
      />

      <section className="site-shell pb-12 md:pb-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Hours", site.hours.restaurant],
            ["Service", "Dine in · takeout"],
            ["Inside", "Cowboy Truck Stop 2"],
          ].map(([label, value]) => (
            <div key={label} className="card px-5 py-5">
              <p className="text-[0.7rem] font-bold tracking-[0.16em] text-star uppercase">
                {label}
              </p>
              <p className="mt-2 text-cream">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-navy-mid/30">
        <div className="site-shell py-14 md:py-16">
          <p className="eyebrow">On the table</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl text-cream md:text-4xl">
            What people pull off I-20 for
          </h2>
          <p className="mt-4 max-w-2xl text-tan">
            This is a dhaba, not a white-tablecloth spot. Portions are built for
            people who have been driving. Ask what is hot today — the daily dal
            and the bread usually tell you everything you need to know.
          </p>

          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {menuHighlights.map((item) => (
              <li key={item.name} className="card p-6">
                <h3 className="font-display text-2xl text-cream">{item.name}</h3>
                <p className="mt-3 text-sm text-tan">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="site-shell py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="font-display mt-3 text-3xl text-cream">
              Sit down or take it with you
            </h2>
            <p className="mt-4 text-tan">
              Park, walk in, and order at the counter. Plenty of drivers eat in
              the lot. Locals call ahead for pickup. If you want a recommendation,
              start with butter chicken or a paratha and chai — then work through
              the rest on the next trip.
            </p>
            <ul className="mt-6 space-y-3 text-cream">
              <li className="border-l-2 border-red pl-4">Breakfast through late dinner</li>
              <li className="border-l-2 border-red pl-4">Vegetarian plates always on the board</li>
              <li className="border-l-2 border-red pl-4">Truck parking right outside</li>
            </ul>
          </div>
          <aside className="card p-6 md:p-8">
            <p className="western-rule text-xs font-bold tracking-[0.2em] uppercase">
              Daily hours
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
                (day) => (
                  <li key={day} className="flex items-center justify-between border-b border-line pb-3">
                    <span className="text-tan">{day}</span>
                    <span className="text-cream">6:00 AM – 10:00 PM</span>
                  </li>
                ),
              )}
            </ul>
            <a href={`tel:${site.phone.raw}`} className="btn btn-primary mt-8 w-full">
              Call {site.phone.display}
            </a>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
