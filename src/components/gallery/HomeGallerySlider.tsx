"use client";

import { Carousel, Column } from "@once-ui-system/core";
import { gallery } from "@/resources";

const HOME_SLIDE_COUNT = 5;

export function HomeGallerySlider() {
  const base = gallery.images.slice(0, HOME_SLIDE_COUNT);
  const tenth = gallery.images.find((image) => image.src.endsWith("/10.jpg"));
  const images =
    tenth && !base.some((image) => image.src === tenth.src) ? [...base, tenth] : base;

  if (images.length === 0) {
    return null;
  }

  return (
    <Column fillWidth paddingX="l" minWidth={0} marginTop="8">
      <Carousel
        fillWidth
        sizes="(max-width: 960px) 100vw, 960px"
        aspectRatio="16 / 9"
        indicator="line"
        items={images.map((image) => ({
          slide: image.src,
          alt: image.alt,
        }))}
      />
    </Column>
  );
}
