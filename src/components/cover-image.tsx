import Image from "next/image";

type CoverImageProps = {
  src: string;
  alt: string;
  hero?: boolean;
};

export function CoverImage({ src, alt, hero = false }: CoverImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 50vw, 100vw"
      fetchPriority={hero ? "high" : undefined}
      className="cover-img"
    />
  );
}
