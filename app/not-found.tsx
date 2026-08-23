import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-shell flex flex-1 flex-col items-center py-24 text-center">
      <p className="eyebrow">Wrong exit</p>
      <h1 className="font-display mt-4 text-4xl text-cream md:text-5xl">
        That page is not on this lot.
      </h1>
      <p className="mt-4 max-w-md text-tan">
        The page you wanted is gone or never existed. Head back to the stop.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Back home
      </Link>
    </section>
  );
}
