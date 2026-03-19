import { Box, Card, Text, Heading, Button } from "theme-ui";
import React from "react";
import List from "./list";
import { IoIosArrowForward } from "react-icons/io";
export default function PriceCard({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    note,
    buttonText = "Start Free Trial",
    anotherOption,
    points,
  },
}) {
  return (
    <Card
      className={header ? "package__card active" : "package__card"}
      sx={styles.pricingBox}
    >
      {header && <Text sx={styles.header}>{header}</Text>}
      <Box>
        <Box className="package__header" sx={styles.pricingHeader}>
          <Heading className="package__name" variant="title">
            {name}
          </Heading>
          <Text as="p">{description}</Text>
        </Box>
        <Text className="package__price" sx={styles.price}>
          <span className="currency">$</span>
          <span className="amount">{priceWithUnit}</span>
          <span className="duration">per month</span>
        </Text>
        <Text
          sx={{
            display: "block",
            fontWeight: 500,
            textAlign: "left",
            fontSize: 1,
            mt: 2,
            mb: 4,
            color: "#6b7280",
          }}
        >
          {note}
        </Text>

        <Text sx={{ fontWeight: "bold", mt: 2, mb: 0.5, color: "#111827" }}>
          What's included
        </Text>
        <List
          items={points}
          childStyle={{ ...styles.listItem, color: "#111827" }}
        />
        <Box sx={styles.buttonGroup}>
          <Button
            variant="primary"
            sx={{
              width: "100%",
              height: "48px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "600",
              backgroundColor: "#111827",
              color: "#fff",
              cursor: "pointer",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              ".arrowCircle": {
                marginLeft: "8px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#fff ",
                color: "#111827",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
              },

              "&:hover": {
                backgroundColor: "#111827",
              },
            }}
            aria-label={buttonText}
            onClick={() => window.open("https://app.klubmeet.com/auth")}
          >
            {buttonText}
            <span className="arrowCircle">
              <IoIosArrowForward class="arrow" />
            </span>
          </Button>
          {anotherOption && (
            <Button
              variant="textButton"
              className="free__trail"
              aria-label={anotherOption}
            >
              {anotherOption}
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
}

const styles = {
  pricingBox: {
    // borderRadius: 0,
    position: "relative",
    transition: "all 0.3s",
    p: ["25px 20px", null, null, "30px"],
    width: ["100%", "75%", "100%"],
    mb: "40px",
    mt: "40px",
    mx: [0, "auto", 0],
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      top: 0,
      left: 0,
      height: "100%",
      border: "1px solid rgba(38, 78, 118, 0.1)",
      borderRadius: "inherit",
      transition: "all 0.3s",
      zIndex: -1,
    },
    "&:hover": {
      boxShadow: "0px 4px 25px rgba(38, 78, 118, 0.1) !important",
      "&:before": {
        opacity: 0,
      },
    },
  },
  header: {
    height: ["28px", null, null, "32px"],
    backgroundColor: "yellow",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: 1,
    lineHeight: 1.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "absolute",
    top: "-17px",
    letterSpacing: "-.14px",
    px: "12px",
  },
  pricingHeader: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: ["10px", null, null, null, "10px"],
    p: {
      fontSize: [1, 2],
      color: "text",
      lineHeight: "heading",
    },
    ".package__name": {
      marginBottom: [1, null, 2],
    },
  },
  price: {
    fontWeight: 400,
    fontSize: [4, null, 5, null, "30px"],
    lineHeight: 1,
    letterSpacing: "-0.55px",
    color: "text",
    marginBottom: 2,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "left",

    ".currency": {
      fontSize: "14px",
      color: "#9CA3AF",
      marginRight: "2px",
    },
    ".amount": {
      fontSize: "36px",
      fontWeight: 700,
      color: "#111827",
      lineHeight: 1,
      //mx: "2px",
    },
    ".duration": {
      fontSize: "14px",
      fontWeight: 400,
      color: "#6B7280",

      ml: "6px",
      alignSelf: "flex-end",
    },
    pt: [2, 3],
  },
  listItem: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mt: 2,
    mb: 3,
    alignItems: "flex-start",
    color: "text",
    "&.closed": {
      opacity: 0.55,
      button: {
        color: "#788FB5",
      },
    },
  },
  buttonGroup: {
    textAlign: "center",
    mt: ["15px", null, null, null, "25px"],
    ".free__trail": {
      color: "secondary",
      width: "100%",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: ["14px", 1],
      p: "20px 0 0",
    },
  },
};
