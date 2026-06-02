import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
  /** Show only these slugs, in this order (ignores range when set) */
  include?: string[];
  marginBottom?: "0" | "8" | "16" | "24" | "32" | "40" | "48" | "64" | "80";
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  include,
  direction,
  marginBottom = "40",
}: PostsProps) {
  let allBlogs = getPosts(["src", "app", "blog", "posts"]);

  // Exclude by slug (exact match)
  if (exclude.length) {
    allBlogs = allBlogs.filter((post) => !exclude.includes(post.slug));
  }

  let displayedBlogs = allBlogs;

  if (include?.length) {
    displayedBlogs = include
      .map((slug) => allBlogs.find((post) => post.slug === slug))
      .filter((post): post is (typeof allBlogs)[number] => post !== undefined);
  } else {
    const sortedBlogs = allBlogs.sort((a, b) => {
      return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    displayedBlogs = range
      ? sortedBlogs.slice(range[0] - 1, range.length === 2 ? range[1] : sortedBlogs.length)
      : sortedBlogs;
  }

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid columns={columns} s={{ columns: 1 }} fillWidth marginBottom={marginBottom} gap="16">
          {displayedBlogs.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} direction={direction} />
          ))}
        </Grid>
      )}
    </>
  );
}
