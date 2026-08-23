import Image from "next/image";
import Link from "next/link";
import { amenities, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[32rem] overflow-hidden border-b border-line md:min-h-[38rem]">
        <Image
          src="/images/hero-home.jpg"
          alt="Sunset over Cowboy Truck Stop 2 — Mobil pumps, diesel lanes, and the lot"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-transparent to-navy-deep/25" />

        <div className="site-shell relative z-10 grid items-center gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24 lg:py-28">
          <div>
            <p className="eyebrow reveal">I-20 · Marshall, Texas</p>
            <h1 className="font-display reveal reveal-delay-1 mt-4 max-w-xl text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl">
              Fuel up. Eat well. Get back on the road.
            </h1>
            <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base text-tan md:text-lg">
              Cowboy Truck Stop 2 is a 24-hour Mobil stop on I-20 with Desi Dhaba
              inside, a workshop on site, working restrooms, Wi-Fi, and the usual
              truck-stop jazz. Come off the interstate. We will get you sorted.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phone.raw}`} className="btn btn-primary">
                Call {site.phone.display}
              </a>
              <a
                href={site.maps.directions}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                Get directions
              </a>
            </div>
            <dl className="reveal reveal-delay-3 mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
              {[
                ["Fuel & store", site.hours.fuel],
                ["Desi Dhaba", "6 AM – 10 PM"],
                ["Phone", site.phone.display],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[0.7rem] font-bold tracking-[0.16em] text-star uppercase">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm text-cream">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal reveal-delay-2 hidden justify-center md:flex">
            <div className="relative">
              <div className="absolute inset-6 rounded-full bg-red/20 blur-3xl" />
              <Image
                src="/logo.png"
                alt={site.name}
                width={420}
                height={420}
                priority
                className="relative mx-auto h-auto w-full max-w-[360px] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-16 md:py-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">What you will find</p>
            <h2 className="font-display mt-3 text-3xl text-cream md:text-4xl">
              A real stop, not just pumps
            </h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-tan hover:text-cream">
            See all services →
          </Link>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="card block h-full p-5 transition-colors">
                <h3 className="font-display text-xl text-cream">{item.title}</h3>
                <p className="mt-2 text-sm text-tan">{item.copy}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-navy-mid/35">
        <div className="site-shell grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div>
            <p className="eyebrow">Eat here</p>
            <h2 className="font-display mt-3 text-3xl text-cream md:text-5xl">
              Desi Dhaba
            </h2>
            <p className="mt-4 max-w-xl text-tan md:text-lg">
              Indian and Pakistani food inside the truck stop — the kind of plates
              drivers talk about on the next stretch. Butter chicken, biryani,
              paratha, chai. Dine in or take it to go. Open 6 AM to 10 PM every day.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/eat" className="btn btn-cream">
                See the kitchen
              </Link>
              <a href={`tel:${site.phone.raw}`} className="btn btn-ghost">
                Call for pickup
              </a>
            </div>
          </div>
          <aside className="card p-6 md:p-8">
            <p className="western-rule text-xs font-bold tracking-[0.2em] uppercase">
              House favorites
            </p>
            <ul className="mt-6 divide-y divide-line">
              {["Butter chicken & naan", "Chicken or mutton biryani", "Aloo paratha & chai", "Poori chole", "Dal and daily curries"].map(
                (dish) => (
                  <li key={dish} className="py-3 text-cream">
                    {dish}
                  </li>
                ),
              )}
            </ul>
          </aside>
        </div>
      </section>

      <section className="site-shell py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="eyebrow">Find the lot</p>
            <h2 className="font-display mt-3 text-3xl text-cream md:text-4xl">
              Right on I-20 in Marshall
            </h2>
            <p className="mt-4 text-tan">
              {site.address.full}. Between Dallas and Shreveport — easy to spot
              when you need diesel, a meal, or a place to stretch.
            </p>
            <address className="mt-6 not-italic text-cream">
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Hours & map
              </Link>
              <a
                href={site.maps.directions}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                Open in Maps
              </a>
            </div>
          </div>
          <div className="card overflow-hidden">
            <Image
              src="/images/lot-highway.jpg"
              alt="Aerial view of Cowboy Truck Stop 2 beside I-20 in Marshall"
              width={1200}
              height={800}
              className="h-72 w-full object-cover md:h-80"
            />
          </div>
        </div>

        <div className="card mt-8 overflow-hidden">
          <iframe
            title="Map of Cowboy Truck Stop 2"
            src={site.maps.embed}
            className="h-72 w-full border-0 md:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
