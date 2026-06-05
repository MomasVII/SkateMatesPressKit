import { Column, Row, IconButton, Text } from "@once-ui-system/core";
import { pressDisclaimer, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Column
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="center"
        align="center"
      >
        <Text variant="body-default-s" onBackground="neutral-weak" align="center">
          {pressDisclaimer}
        </Text>
        <Row gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Row>
      </Column>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
