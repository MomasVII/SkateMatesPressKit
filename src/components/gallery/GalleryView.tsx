"use client";

import { Column, Heading, Media, MasonryGrid, Text } from "@once-ui-system/core";
import { baseURL, gallery } from "@/resources";

export default function GalleryView() {
  return (
    <Column fillWidth gap="48">
      <MasonryGrid columns={2} s={{ columns: 1 }}>
        {gallery.images.map((image, index) => (
          <Media
            enlarge
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            key={image.src}
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </MasonryGrid>

      {gallery.gifs.length > 0 && (
        <Column fillWidth gap="24">
          <Column gap="8">
            <Heading as="h2" variant="heading-strong-l">
              GIFs
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Direct links for emails and press — open or copy the URL under each GIF.
            </Text>
          </Column>
          <MasonryGrid columns={2} s={{ columns: 1 }}>
            {gallery.gifs.map((gif) => {
              const url = `${baseURL}${gif.src}`;
              return (
                <Column key={gif.src} gap="8">
                  {/* Native img keeps GIF animation (next/image optimization strips it). */}
                  <img
                    src={gif.src}
                    alt={gif.alt}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      borderRadius: "var(--radius-m)",
                    }}
                  />
                  <Text
                    as="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="label-default-s"
                    onBackground="neutral-weak"
                    style={{ wordBreak: "break-all" }}
                  >
                    {url}
                  </Text>
                </Column>
              );
            })}
          </MasonryGrid>
        </Column>
      )}
    </Column>
  );
}
