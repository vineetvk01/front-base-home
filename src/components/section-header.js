import React from "react";
import { Box, Text, Heading } from "theme-ui";

export default function SectionHeader({ title, slogan, description, isWhite }) {
  return (
    <Box sx={{ variant: "sectionHeader" }}>
      <Text
        as="p"
        sx={{
          variant: "sectionHeader.subTitle",
          color: isWhite ? "white" : "primary",
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: "sectionHeader.title",
          color: isWhite ? "white" : "heading",
        }}
      >
        {title}
      </Heading>
      {description && (
        <Text
          as="p"
          sx={{
            mt: 2,
            color: isWhite ? "white" : "text",
            opacity: 0.8,
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          {description}
        </Text>
      )}
    </Box>
  );
}
