type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="site-shell pt-14 pb-10 md:pt-20 md:pb-14">
      <p className="eyebrow reveal">{eyebrow}</p>
      <h1 className="font-display reveal reveal-delay-1 mt-4 max-w-3xl text-4xl leading-tight text-cream md:text-6xl">
        {title}
      </h1>
      <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-base text-tan md:text-lg">
        {description}
      </p>
    </section>
  );
}
