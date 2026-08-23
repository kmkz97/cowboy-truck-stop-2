import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="site-shell pb-16 md:pb-24">
      <div className="card px-6 py-10 text-center md:px-12 md:py-14">
        <p className="western-rule text-xs font-bold tracking-[0.22em] uppercase">On I-20</p>
        <h2 className="font-display mt-5 text-3xl text-cream md:text-4xl">
          Need fuel, food, or a wrench?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-tan">
          Call the stop or get directions to 304 I-20 in Marshall. We are open around the clock
          for fuel and the store.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
      </div>
    </section>
  );
}
