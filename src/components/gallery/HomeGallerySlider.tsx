"use client";

import { Carousel, Column } from "@once-ui-system/core";
import { gallery } from "@/resources";

const HOME_SLIDE_COUNT = 5;

export function HomeGallerySlider() {
  const images = gallery.images.slice(0, HOME_SLIDE_COUNT);

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
