import * as Collapsible from "@radix-ui/react-collapsible";
import { FC, ReactNode, useState } from "react";
import { styled } from "stitches.config";
import { Box } from "./Box";
import { Button } from "./Button";
import { Text } from "./Text";

export interface CodeProps {
  children?: ReactNode;
  className?: string;
  id?: string;
  collapsible?: string;
  ignoreWordHighlight?: string;
  showLineNumbers?: string;
  filename?: string;
}

export const InlineCode = styled("code", {
  fontFamily: "$jet",
  fontSize: "$2",
  whiteSpace: "nowrap",
  padding: "0 $1 2px $1",
  borderRadius: "$md",

  variants: {
    variant: {
      gray: {
        backgroundColor: "$slate3",
        color: "$slate11",
      },
      violet: {
        backgroundColor: "$violet3",
        color: "$violet11",
      },
    },
  },
  defaultVariants: {
    variant: "gray",
  },
});

export const Code: FC<CodeProps> = ({
  children,
  className,
  id,
  collapsible,
  // destructure the following vars so they don't get passed to the dom node
  ignoreWordHighlight,
  showLineNumbers,
  filename,
  ...rest
}) => {
  const isCollapsible = typeof collapsible !== "undefined";
  const [isOpen, setIsOpen] = useState(!isCollapsible);
  const isInline = typeof children === "string";
  const language = className?.split(`language-`).pop();

  const content = isInline ? (
    <InlineCode className={className} id={id} {...rest}>
      {children}
    </InlineCode>
  ) : (
    <>
      {language ? (
        <Text css={{ display: "inline" }} size="0">
          {language}
        </Text>
      ) : null}
      {filename ? (
        <Text css={{ display: "inline" }} size="0" variant="blue">
          {`: ${filename}`}
        </Text>
      ) : null}
      <Box as="code" className={className} id={id} {...rest}>
        {children}
      </Box>
    </>
  );

  return isCollapsible ? (
    <Collapsible.Root
      defaultOpen={isOpen}
      onOpenChange={(newOpen) => {
        return setIsOpen(newOpen);
      }}
    >
      <Collapsible.Trigger asChild>
        <Button css={{ display: "block", ml: "auto" }}>
          {isOpen ? "Hide" : "Show"}
          {` code`}
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content>{content}</Collapsible.Content>
    </Collapsible.Root>
  ) : (
    content
  );
};
