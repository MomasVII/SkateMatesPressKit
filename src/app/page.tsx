import {
  Heading,
  Text,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  SmartLink,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, person, baseURL, routes } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { HomeGallerySlider } from "@/components/gallery/HomeGallerySlider";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" marginTop="16" paddingTop="0" paddingBottom="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${home.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx translateY="4" fillWidth horizontal="center" paddingTop="24" paddingBottom="16">
            <h1 style={{ margin: 0, display: "flex", justifyContent: "center" }}>{home.headline}</h1>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="20">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          {home.featured.display && (
            <RevealFx paddingTop="4" paddingBottom="4" delay={0.4} horizontal="center">
              <Row gap="12" wrap horizontal="center" vertical="center">
                <SmartLink
                  href={home.featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  unstyled
                  style={{ borderRadius: "2px" }}
                >
                  <Badge
                    paddingX="12"
                    paddingY="4"
                    textVariant="label-default-s"
                    arrow={false}
                    effect={false}
                    style={{
                      background: "linear-gradient(to bottom, #6fa720 5%, #588a1b 95%)",
                      color: "#ffffff",
                      borderColor: "#588a1b",
                      borderRadius: "2px",
                    }}
                  >
                    <Row paddingY="2">{home.featured.title}</Row>
                  </Badge>
                </SmartLink>
                <SmartLink
                  href="/files/PressKit.zip"
                  download
                  unstyled
                  style={{ borderRadius: "2px" }}
                >
                  <Badge
                    paddingX="12"
                    paddingY="4"
                    textVariant="label-default-s"
                    arrow={false}
                    effect={false}
                    style={{
                      background: "linear-gradient(to bottom, #f29918 5%, #d97a0a 95%)",
                      color: "#ffffff",
                      borderColor: "#d97a0a",
                      borderRadius: "2px",
                    }}
                  >
                    <Row paddingY="2">Download Press Kit</Row>
                  </Badge>
                </SmartLink>
              </Row>
            </RevealFx>
          )}
        </Column>
      </Column>
      <RevealFx translateY="8" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      <RevealFx translateY="8" delay={0.65} fillWidth>
        <HomeGallerySlider />
      </RevealFx>
      {home.galleryBlogText.display && (
        <RevealFx translateY="8" delay={0.7} fillWidth>
          <Column fillWidth gap="20" paddingX="l" marginTop="8" maxWidth="m" horizontal="center">
            <Heading as="h2" variant="heading-strong-l" wrap="balance">
              {home.galleryBlogText.title}
            </Heading>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.25rem",
                listStyleType: "disc",
                maxWidth: "var(--responsive-width-s)",
                width: "100%",
              }}
            >
              {home.galleryBlogText.bullets.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                  <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </Column>
        </RevealFx>
      )}
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth>
            <Line fillWidth style={{ width: "100%", maxWidth: "none" }} />
          </Row>
          <Column fillWidth gap="16" marginTop="16" paddingX="l" minWidth={0}>
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
            <Posts
              range={[1, 1]}
              columns="1"
              thumbnail
              exclude={["pages", "styling", "components", "work", "content", "password", "mailchimp", "localization", "seo", "blog"]}
            />
          </Column>
          <Row fillWidth>
            <Line fillWidth style={{ width: "100%", maxWidth: "none" }} />
          </Row>
        </Column>
      )}
    </Column>
  );
}
