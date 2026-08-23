import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Wrong exit"
        title="That page is not on this lot."
        description="The page you wanted is gone or never existed. Head back to the stop."
      />
      <section className="site-shell pb-16 pt-10">
        <Link href="/" className="btn btn-primary">
          Back home
        </Link>
      </section>
    </>
  );
}
