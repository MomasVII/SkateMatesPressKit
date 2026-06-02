"use client";

import { Card, Column, Flex, Media, Row, Avatar, Text } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { person } from "@/resources";

interface PostProps {
  post: any;
  thumbnail: boolean;
  direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
  const href = post.metadata.link || `/blog/${post.slug}`;
  const cardDirection = thumbnail ? "row" : direction;

  const textContent = (
    <>
      <Row gap="24" vertical="center" wrap>
        <Row vertical="center" gap="16">
          <Avatar src={person.avatar} size="s" />
          <Text variant="label-default-s">{person.name}</Text>
        </Row>
        <Text variant="body-default-xs" onBackground="neutral-weak">
          {formatDate(post.metadata.publishedAt, false)}
        </Text>
      </Row>
      <Text variant="heading-strong-l" wrap="balance">
        {post.metadata.title}
      </Text>
      {post.metadata.tag && (
        <Text variant="label-strong-s" onBackground="neutral-weak">
          {post.metadata.tag}
        </Text>
      )}
    </>
  );

  return (
    <Card
      fillWidth
      key={post.slug}
      href={href}
      transition="micro-medium"
      direction={cardDirection}
      border="transparent"
      background="transparent"
      padding="4"
      radius="l-4"
      gap={thumbnail ? "16" : direction === "column" ? undefined : "24"}
      s={{ direction: "column" }}
    >
      {post.metadata.image && thumbnail && (
        <Flex
          flex={0}
          fillWidth
          minWidth={0}
          overflow="hidden"
          radius="l"
          style={{ flex: "0 1 48%", maxWidth: "48%", alignSelf: "stretch" }}
          s={{ flex: "0 0 auto", maxWidth: "100%" }}
        >
          <Media
            fillWidth
            fillHeight
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="l"
            src={post.metadata.image}
            alt={"Thumbnail of " + post.metadata.title}
            objectFit="cover"
            aspectRatio="16 / 9"
            style={{ width: "100%", minHeight: "180px", maxHeight: "220px" }}
          />
        </Flex>
      )}
      {thumbnail ? (
        <Column flex={1} minWidth={0} paddingY="16" paddingX="l" gap="12" vertical="center">
          {textContent}
        </Column>
      ) : (
        <Row fillWidth flex={1} minWidth={0}>
          <Column maxWidth={28} paddingY="24" paddingX="l" gap="20" vertical="center">
            {textContent}
          </Column>
        </Row>
      )}
    </Card>
  );
}
