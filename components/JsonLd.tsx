import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TruckStop",
    name: site.name,
    description: site.description,
    telephone: site.phone.raw,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    openingHours: "Mo-Su 00:00-23:59",
    hasMap: site.maps.directions,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Mobil fuel", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restrooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Truck parking", value: true },
    ],
  };

  const restaurant = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Desi Dhaba",
    description:
      "Indian and Pakistani restaurant inside Cowboy Truck Stop 2 in Marshall, Texas.",
    telephone: site.phone.raw,
    servesCuisine: ["Indian", "Pakistani"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    openingHours: "Mo-Su 06:00-22:00",
    parentOrganization: {
      "@type": "Organization",
      name: site.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurant) }}
      />
    </>
  );
}
