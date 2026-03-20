/** @jsxImportSource theme-ui */
import { jsx, Container, Box, Flex, Text } from "theme-ui";
import { keyframes } from "@emotion/react";
import React from "react";
//import React, { useState } from "react";
//import Carousel from "react-multi-carousel";
//import ButtonGroup from "components/button-group";
import PriceCard from "components/price-card";
import SectionHeader from "components/section-header";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

const packages = {
  monthly: [
    {
      id: 1,
      name: "Free",
      // description: "For Small teams or Individuals",
      buttonText: "Get Free",
      priceWithUnit: "0",
      note: "Free, forever.",
      points: [
        {
          id: 1,
          text: "Unlimited Posts",
          isAvailable: true,
        },
        {
          id: 2,
          text: "Unlimited Users",
          isAvailable: true,
        },
        {
          id: 3,
          text: "3 Admin Roles",
          isAvailable: true,
        },
        {
          id: 4,
          text: "2 Feedback Boards",
          isAvailable: true,
        },
        {
          id: 5,
          text: "Roadmap",
          isAvailable: true,
        },
        {
          id: 6,
          text: "Changelog",
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      header: "Recommended",
      name: "Starter",
      //  description: "For Instructors and Consultants",
      priceWithUnit: "29",
      note: "For small teams.",
      buttonText: "Get Starter",
      anotherOption: "Request feature for your use-case",
      points: [
        {
          id: 1,
          text: "Custom Domain",
          isAvailable: true,
        },
        {
          id: 2,
          text: "Guest Posting",
          isAvailable: true,
        },
        {
          id: 3,
          text: "Automatic Login",
          isAvailable: true,
        },
        {
          id: 4,
          text: "5 Feedback Boards ",
          isAvailable: true,
        },
        {
          id: 5,
          text: "Private Boards ",
          isAvailable: true,
        },
        {
          id: 6,
          text: "One Integration",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      headerIcon: <IoIosCheckmarkCircle />,
      name: "Professional",
      //   description: "For pro content creators",
      priceWithUnit: "59",
      note: "For growing teams.",
      buttonText: "Get Pro",
      anotherOption: "",
      points: [
        {
          id: 1,
          text: "Unlimited Boards",
          isAvailable: true,
        },
        {
          id: 2,
          text: "Advanced Search",
          isAvailable: true,
        },
        {
          id: 3,
          text: "Single Sign-On",
          isAvailable: true,
        },
        {
          id: 4,
          text: "Unlimited Integrations ",
          isAvailable: true,
        },
        {
          id: 5,
          text: "Unlimited Admin Roles ",
          isAvailable: true,
        },
        {
          id: 6,
          text: "public identity masking ",
          isAvailable: true,
        },
      ],
    },
  ],
  annual: [
    {
      id: 1,
      name: "Free Plan",
      description: "For Small teams or office",
      buttonText: "Start My Page",
      priceWithUnit: "₹0",
      note: "Free, forever.",
      points: [
        {
          id: 1,
          text: "Create your unique link",
          isAvailable: true,
        },
        {
          id: 2,
          text: "Choose Landing page from template",
          isAvailable: true,
        },
        {
          id: 3,
          text: "Sync your Calendar to avoid conflicts",
          isAvailable: true,
        },
        {
          id: 4,
          text: "White Label your landing page",
          isAvailable: false,
        },
      ],
    },
    {
      id: 2,
      header: "Suggested",
      name: "Business king",
      description: "For Enterprise business",
      priceWithUnit: "₹599",
      note: "For small teams.",
      buttonText: "Create account",
      anotherOption: "Request feature for your use-case",
      points: [
        {
          id: 1,
          text: "Everything from Free Plan",
          isAvailable: true,
        },
        {
          id: 2,
          text: "Host Webinars",
          isAvailable: true,
        },
        {
          id: 3,
          text: "Earn by uploading your Courses",
          isAvailable: true,
        },
        {
          id: 4,
          text: "eCommerce Store ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      headerIcon: <IoIosCheckmarkCircle />,
      name: "Pro Master",
      description: "For pro content creators",
      priceWithUnit: "₹899",
      note: "For growing teams.",
      buttonText: "Coming Soon",
      anotherOption: "",
      points: [
        {
          id: 1,
          text: "Drag & Drop Builder",
          isAvailable: true,
        },
        {
          id: 2,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          text: "eCommerce Store ",
          isAvailable: true,
        },
      ],
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { monthly } = packages;
  //const { monthly, annual } = packages;
  // const [state, setState] = useState({
  //   active: "monthly",
  //   pricingPlan: monthly,
  // });

  // const handlePricingPlan = (plan) => {
  //   if (plan === "annual") {
  //     setState({
  //       ...state,
  //       active: "annual",
  //       pricingPlan: annual,
  //     });
  //   } else {
  //     setState({
  //       ...state,
  //       active: "monthly",
  //       pricingPlan: monthly,
  //     });
  //   }
  // };

  // const sliderParams = {
  //   additionalTransfrom: 0,
  //   arrows: false,
  //   autoPlaySpeed: 3000,
  //   centerMode: false,
  //   className: "",
  //   slidesToSlide: 1,
  //   items: 3,
  //   containerClass: "carousel-container",
  //   // customButtonGroup: <ButtonGroup />,
  //   dotListClass: "",
  //   focusOnSelect: false,
  //   infinite: false,
  //   keyBoardControl: false,
  //   itemClass: "",
  //   minimumTouchDrag: 80,
  //   renderButtonGroupOutside: true,
  //   renderDotsOutside: false,
  //   responsive: responsive,
  //   showDots: false,
  //   sliderClass: "",
  // };

  return (
    <section id="pricing" sx={{ variant: "section.pricing" }}>
      <Container>
        <SectionHeader
          // slogan="Pricing"
          title="Pricing that doesn't punish growth"
          description={
            <>
              <span style={{ color: "#121111 ", fontWeight: 500 }}>
                {" "}
                Unlimited users on every plan.
              </span>{" "}
              <span>
                {" "}
                Because charging per user for a feedback tool is like charging
                per customer for a store. It's backwards.
              </span>
            </>
          }
        />
        {/* <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === "monthly" ? "active" : ""}
              type="button"
              aria-label="Monthly"
              onClick={() => handlePricingPlan("monthly")}
            >
              Monthly Plan
            </button>
            <button
              className={state.active === "annual" ? "active" : ""}
              type="button"
              aria-label="Annual"
              onClick={() => handlePricingPlan("annual")}
            >
              Annual Plan
            </button>
          </Box>
        </Flex> */}
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          {/* <Carousel {...sliderParams}> */}
          {packages.monthly.map((packageData) => (
            <Box sx={styles.pricingItem} key={packageData.id}>
              <PriceCard data={packageData} />
            </Box>
          ))}
          {/* {packages.monthly.map((packageData) => (
            <Box sx={styles.pricingItem} key={packageData.id}>
              <PriceCard data={packageData} />
            </Box>
          ))} */}
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-start", mt: "30px" }}>
          <Box
            sx={{
              width: "5px",
              height: "50px",
              bg: "#6366F1",
              mr: "16px",
              borderRadius: "2px",
            }}
          />

          <Box
            sx={{
              maxWidth: "700px",
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#6b7280",
            }}
          >
            <Text>
              <strong style={{ color: "#111827" }}>Why so affordable?</strong>{" "}
              We're bootstrapped, not VC-funded. We answer to customers, not
              investors. This means we can offer fair pricing that grows with
              you, not against you.
            </Text>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: "-40px",
    mt: "-40px",
    mx: -1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    "&.pricing__wrapper .package__card": {
      ".package__header": {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      ".package__price": {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    ".carousel-container": {
      width: "100%",
      "> ul > li ": {
        display: "flex",
      },
    },
    ".button__group": {
      display: ["flex", null, null, null, "none"],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 1,
    display: "flex",
    flexShrink: 0,
    flex: "1 1 33%",
  },
  affordable: {
    mt: "30px",
    px: ["10px", null, null, "0px"],
    maxWidth: "700px",
    mx: 0,
    px: 0,
    fontSize: "16px",
    color: "#6b7280",
    lineHeight: 1.6,
    borderLeft: "4px solid #6366f1",

    pl: "12px",
    // display: "flex",
    // alignItems: "flex-start",
  },
  buttonGroup: {
    justifyContent: "center",
    mb: "7",
    mt: ["-15px", "-35px"],
    position: "relative",
    zIndex: 2,
  },
  buttonGroupInner: {
    display: "flex",
    padding: "7px",
    margin: "0 auto",
    borderRadius: "5px",
    backgroundColor: "#F7F8FB",
    button: {
      border: 0,
      padding: ["15px 20px", "15px 27px"],
      borderRadius: "5px",
      color: "text",
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: "transparent",
      cursor: "pointer",
      fontFamily: "body",
      letterSpacing: "-0.24px",
      transition: "all 0.3s",
      "&.active": {
        color: "#0f2137",
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 4px rgba(38, 78, 118, 0.1)",
      },
      "&:focus": {
        outline: 0,
      },
    },
  },
};
