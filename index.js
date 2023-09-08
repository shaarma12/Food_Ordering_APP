import React from "react";
import ReactDOM from "react-dom/client";
import Logoimg from "./images/Logoimg.png";
import cart from "./images/cart.png";
import user from "./images/user.png";
import star from "./images/star.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";
import youtube from "./images/youtube.png";
import app_store from "./images/app_store.webp";
import play_store from "./images/play_store.webp";

/*
  1.Header
    -> Logo
    -> Nav Links
    -> cart
    -> user icon
  
  2. body
     -> Search Bar
     -> search button
     -> restaurant card(component)
  
  3. Footer
     -> Logo
     -> Social Links
*/
const data = [
  {
    info: {
      id: "28810",
      name: "Domino's Pizza",
      cloudinaryImageId: "gdszvtjtf6xvyhmcnzhv",
      locality: "Jyoti Nagar",
      areaName: "Shahdara",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "28810",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "2456",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-jyoti-nagar-shahdara-delhi-28810",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "407805",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Yamuna Vihar",
      areaName: "Shahdara",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "407805",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "721",
      avgRatingString: "3.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-yamuna-vihar-shahdara-delhi-407805",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "89841",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Swami Dayanand Marg",
      areaName: "Krishna Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "89841",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5700,
      },
      parentId: "547",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-swami-dayanand-marg-krishna-nagar-delhi-89841",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "253988",
      name: "McDonald's",
      cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
      locality: "Fun City Mall",
      areaName: "Karkardooma",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "253988",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-fun-city-mall-karkardooma-delhi-253988",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "234208",
      name: "Theobroma",
      cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
      locality: "Swasthya Vihar",
      areaName: "Laxmi Nagar",
      costForTwo: "₹800 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "234208",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 10300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 10300,
      },
      parentId: "1040",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 9.1,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "9.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/theobroma-swasthya-vihar-laxmi-nagar-delhi-234208",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "350774",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Satanam Road",
      areaName: "Krishna Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Fast Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "350774",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5200,
      },
      parentId: "2",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-satanam-road-krishna-nagar-delhi-350774",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "40409",
      name: "Bikanervala",
      cloudinaryImageId: "ioqqgwzl8tz4mp8ynzdh",
      locality: "G T Road",
      areaName: "Dilshad Gardens",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Snacks", "Chaat", "Sweets"],
      avgRating: 4,
      veg: true,
      feeDetails: {
        restaurantId: "40409",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "45936",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bikanervala-g-t-road-dilshad-gardens-delhi-40409",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "158652",
      name: "Faasos - Wraps & Rolls",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Vivek Vihar",
      areaName: "Dilshad Gardens",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "158652",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "21809",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 03:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-vivek-vihar-dilshad-gardens-delhi-158652",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "158682",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId: "vsnmlorg28v1n6bdzdg1",
      locality: "Vivek Vihar",
      areaName: "Shahdara",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "158682",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "4925",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-vivek-vihar-shahdara-delhi-158682",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "217797",
      name: "The Good Bowl",
      cloudinaryImageId: "0b3356a88b6fc5966c452c4c9b1b5e4a",
      locality: "Vivek Vihar",
      areaName: "Dilshad Gardens",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "217797",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "7918",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-good-bowl-vivek-vihar-dilshad-gardens-delhi-217797",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "152953",
      name: "Burger Singh (Big Punjabi Burgers)",
      cloudinaryImageId: "hmloyebpeieeyqcsfowr",
      locality: "D Block",
      areaName: "Krishna Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Fast Food", "Snacks"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "152953",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5200,
      },
      parentId: "375065",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-d-block-krishna-nagar-delhi-152953",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "79059",
      name: "Rollsking",
      cloudinaryImageId: "ui7fsa7obkf1quc6hsdx",
      locality: "Dilshad Gardens",
      areaName: "Karkardooma",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Fast Food", "Beverages"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "79059",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6000,
      },
      parentId: "4697",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/rollsking-dilshad-gardens-karkardooma-delhi-79059",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "127640",
      name: "Biryani Blues",
      cloudinaryImageId: "eh3zyj6aeokfdj9xvecz",
      locality: "Ganesh Nagar",
      areaName: "Vikas Marg",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "Lucknowi",
        "Kebabs",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "127640",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 9800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 9800,
      },
      parentId: "13813",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 9.6,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "9.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 04:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/biryani-blues-ganesh-nagar-vikas-marg-delhi-127640",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "105992",
      name: "NIC Ice Creams",
      cloudinaryImageId: "c8b98c4064dc2fd6bdf350212e5f0bd5",
      locality: "556th Scheme",
      areaName: "Dilshad Gardens",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: "105992",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "6249",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nic-ice-creams-556th-scheme-dilshad-gardens-delhi-105992",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "158655",
      name: "Behrouz Biryani - Royal & Safe",
      cloudinaryImageId: "89fccaa76f2f760e2742b9e53d32bb69",
      locality: "Vivek Vihar",
      areaName: "Dilshad Gardens",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "North Indian",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "158655",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4900,
      },
      parentId: "1803",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/behrouz-biryani-royal-and-safe-vivek-vihar-dilshad-gardens-delhi-158655",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "79716",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Aditya Mega Mall",
      areaName: "Shahdara",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "79716",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "37 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹129",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-aditya-mega-mall-shahdara-delhi-79716",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "158656",
      name: "Oven Story Pizza",
      cloudinaryImageId: "f986df6f1a1fcf2ff24d2eaf44d570a7",
      locality: "Vivek Vihar",
      areaName: "Dilshad Gardens",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "158656",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4900,
      },
      parentId: "3534",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "23-29 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/oven-story-pizza-vivek-vihar-dilshad-gardens-delhi-158656",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "158681",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId: "4a3b48488e3aa9bda13efd8cfcd95284",
      locality: "Vivek Vihar",
      areaName: "Dilshad Gardens",
      costForTwo: "₹450 for two",
      cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "158681",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "4444",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-vivek-vihar-dilshad-gardens-delhi-158681",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "158660",
      name: "Firangi Bake",
      cloudinaryImageId: "riwocz7kahbeh4dnxs6y",
      locality: "Vivek Vihar",
      areaName: "Dilshad Gardens",
      costForTwo: "₹400 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Mexican",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "158660",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "3952",
      avgRatingString: "3.8",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 03:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/firangi-bake-vivek-vihar-dilshad-gardens-delhi-158660",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "40330",
      name: "Sagar Ratna",
      cloudinaryImageId: "ldjgyyvkgxc9x05acxb6",
      locality: "S Block",
      areaName: "Krishna Nagar",
      costForTwo: "₹600 for two",
      cuisines: ["South Indian", "North Indian", "Chinese", "Desserts"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "40330",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5200,
      },
      parentId: "793",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sagar-ratna-s-block-krishna-nagar-delhi-40330",
      type: "WEBLINK",
    },
  },
];
const resimg =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const Rescard = ({ restaurant }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    restaurant?.info;
  return (
    <>
      <div className="card">
        <img src={resimg + cloudinaryImageId} alt="resImg" />
        <h2 id="name" className="upg">
          {name}
        </h2>
        <h3 id="rating" className="upg">
          <img className="star" src={star} alt="Star" />
          {avgRating}
        </h3>
        <p id="cuisine" className="upg">
          {cuisines.slice(Math.max(cuisines.length - 4)).join(", ")}
        </p>
        <p id="areaname" className="upg">
          {areaName}
        </p>
      </div>
    </>
  );
};
const Header = () => {
  return (
    <>
      <div id="heading">
        {/* Logo */}
        <div id="logo">
          <img className="logo-img" src={Logoimg} alt="Main Logo" />
        </div>

        {/* Nav Links */}
        <div id="nav">
          <ul>
            <a href="#" target="_blank">
              <li>Home</li>
            </a>
            <a href="#" target="_blank">
              <li>About</li>
            </a>
            <a href="#" target="_blank">
              <li>Services</li>
            </a>
            <a href="#1" target="_blank">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="head-right">
          {/* cart */}

          <div id="cart">
            <a href="#" target="_blank">
              <img className="cart-img" src={cart} alt="Cart" />
            </a>
          </div>

          {/* user icon */}

          <div id="user">
            <a href="#" target="_blank">
              <img className="cart-user" src={user} alt="user" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
const Body = () => {
  return (
    <>
      <div className="body">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish...."
          ></input>
          <button>Search</button>
        </div>
        <div className="res-card">
          {data.map((i) => {
            return <Rescard key={i.info.id} restaurant={i} />;
          })}
        </div>
      </div>
    </>
  );
};
const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="Company-Logo">
          <img src={Logoimg} alt="FooterImg" />
          <p>
            &#169; 2023 Sharma Technologies <br></br> Pvt Ltd.
          </p>
        </div>
        <div className="About">
          <h3 className="text">ABOUT KHAOJI</h3>
          <a className="anc" href="#" target="_blank">
            <p className="text">About</p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="text">Careers</p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="text">Team</p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="text">KhaoJi One</p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="text">KhaoJi Instamart</p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="text">KhaoJi Genie</p>
          </a>
        </div>
        <div className="auth">
          <div className="contact">
            <h3 className="text">CONTACT US</h3>
            <a className="anc" href="#" target="_blank">
              <p className="text">Help & Support</p>
            </a>
            <a className="anc" href="#" target="_blank">
              <p className="text">Partner with us</p>
            </a>
            <a className="anc" href="#" target="_blank">
              <p className="text">Ride with us</p>
            </a>
          </div>
          <div className="legal">
            <h3 className="text">Legal</h3>
            <a className="anc" href="#" target="_blank">
              <p className="text">Terms & Condition</p>
            </a>
            <a className="anc" href="#" target="_blank">
              <p className="text">Cookie Policy</p>
            </a>
            <a className="anc" href="#" target="_blank">
              <p className="text">Privacy Policy</p>
            </a>
          </div>
        </div>
        <div className="links">
          <h3>SOCIAL LINKS</h3>
          <div className="social">
            <a href="https://www.linkedin.com/" target="_blank">
              <img className="logs" src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img className="logs" src={instagram} alt="instagram" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <img className="logs" src={twitter} alt="twitter" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img className="logs" src={youtube} alt="youtube" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img className="logs" src={facebook} alt="facebook" />
            </a>
          </div>
          <div className="social-img">
            <a href="https://www.playstore.com/" target="_blank">
              <img className="biglogs" src={play_store} alt="Play Store" />
            </a>
            <a href="https://www.appstore.com/" target="_blank">
              <img className="biglogs" src={app_store} alt="App Store" />
            </a>
          </div>
        </div>
      </div>
      className="anc"
    </>
  );
};
const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
