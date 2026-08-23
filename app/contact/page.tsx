import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find Cowboy Truck Stop 2 at 304 I-20, Marshall, TX 75672. Call (903) 938-3466 for fuel, the workshop, or Desi Dhaba.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Hours & location"
        title="Pull off I-20. We are right there."
        description="304 I-20, Marshall, Texas. Call the stop if you need the workshop, a pickup order, or just want to know the lot is clear."
      />

      <section className="site-shell pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <div className="card p-6">
              <p className="eyebrow">Address</p>
              <address className="mt-3 not-italic text-lg text-cream">
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
                <br />
                {site.address.country}
              </address>
              <a
                href={site.maps.directions}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost mt-5"
              >
                Get directions
              </a>
            </div>

            <div className="card p-6">
              <p className="eyebrow">Phone</p>
              <a
                href={`tel:${site.phone.raw}`}
                className="mt-3 block font-display text-3xl text-cream"
              >
                {site.phone.display}
              </a>
              <p className="mt-2 text-sm text-tan">
                Best number for the stop, the store, and the workshop.
              </p>
            </div>

            <div className="card p-6">
              <p className="eyebrow">Hours</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start justify-between gap-4 border-b border-line pb-3">
                  <span className="text-tan">Mobil fuel & store</span>
                  <span className="text-right text-cream">{site.hours.fuel}</span>
                </li>
                <li className="flex items-start justify-between gap-4 border-b border-line pb-3">
                  <span className="text-tan">Desi Dhaba</span>
                  <span className="text-right text-cream">{site.hours.restaurant}</span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <span className="text-tan">Workshop</span>
                  <span className="text-right text-cream">{site.hours.workshop}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card overflow-hidden">
            <iframe
              title="Map of Cowboy Truck Stop 2 in Marshall, Texas"
              src={site.maps.embed}
              className="h-[28rem] w-full border-0 lg:h-full min-h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
