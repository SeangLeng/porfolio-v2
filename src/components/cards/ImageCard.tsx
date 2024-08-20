import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function ImageCard({
  altImage,
  link,
  images,
}: {
  link: string;
  altImage: string;
  images: StaticImport | string;
}) {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <section
      className="rounded-lg overflow-hidden relative"
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
      <Image
        priority
        src={images}
        alt={altImage}
        className="max-h-[400px] w-full object-cover hover:brightness-75 transition-all"
      />
      <Button
        className={`absolute z-10 text-primaryColor rounded-full transition-all duration-300 ease-in-out ${
          mouseHover
            ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            : "bottom-3 right-3"
        }`}
        asChild
      >
        <Link href={link} className="flex gap-5 items-center">
          Detail
          <ArrowRight />
        </Link>
      </Button>
    </section>
  );
}
