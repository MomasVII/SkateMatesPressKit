import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Team – ${person.name}`,
    description: "Meet the Skate Mates team. Coming soon in 2026.",
    baseURL: baseURL,
    path: "/team",
  });
}

export default function Team() {
  return (
    <Column maxWidth="m" paddingTop="24" paddingX="l" gap="l" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/team"
        title={`Team – ${person.name}`}
        description="Meet the Skate Mates team. Coming soon in 2026."
      />
      <Heading variant="heading-strong-xl">Team</Heading>
      <Text onBackground="neutral-weak" variant="heading-default-l">
        Coming soon in 2026
      </Text>
    </Column>
  );
}
