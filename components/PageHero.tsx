import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[20rem] overflow-hidden border-b border-line md:min-h-[24rem]">
      <Image
        src="/images/hero-page.jpg"
        alt="Cowboy Truck Stop 2 at dusk — Mobil pumps, diesel canopy, and the lot"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/82 to-navy-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-navy-deep/30" />
      <div className="site-shell relative z-10 pt-16 pb-14 md:pt-24 md:pb-20">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="font-display reveal reveal-delay-1 mt-4 max-w-3xl text-4xl leading-tight text-cream md:text-6xl">
          {title}
        </h1>
        <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-base text-tan md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
