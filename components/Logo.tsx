import Image from "next/image";
import { site } from "@/lib/site";

type LogoProps = {
  size?: number;
  priority?: boolean;
  className?: string;
};

export function Logo({ size = 56, priority = false, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={site.name}
      width={size}
      height={size}
      priority={priority}
      className={`h-auto w-auto object-contain ${className}`}
      style={{ maxHeight: size, width: "auto" }}
    />
  );
}
