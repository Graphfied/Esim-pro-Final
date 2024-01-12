"use client";

import React from "react";
import USA from "/public/homepage/popularCountries/USA.svg";
import Europe from "/public/homepage/popularCountries/europe.svg";
import Uk from "/public/homepage/popularCountries/uk-flag.svg";
import MiddleEast from "/public/homepage/popularCountries/middleEast.svg";
import Japan from "/public/homepage/popularCountries/japan.svg";
import UAE from "/public/homepage/popularCountries/uae.svg";
import Saudia from "/public/homepage/popularCountries/saudiaArabia.svg";
import Asia from "/public/homepage/popularCountries/Asia.svg";
import Americas from "/public/homepage/popularCountries/Americas.svg";
import Oceania from "/public/homepage/popularCountries/Oceania.svg";
import Africa from "/public/homepage/popularCountries/Africa.svg";
import { CountryItem } from "@/components/CountryItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { countriesCarouselSettings } from "@/utils/generalSettings";
import { GeneralCarousel } from "@/components/GeneralCarousel";
// import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export const PopularCountries = () => {
  const routes = [
    {
      label: "USA",
      icon: USA,
      href: `/esim/United States`,
    },
    {
      label: "Europe",
      icon: Europe,
      href: `/esim/Europe`,
    },
    {
      label: "UK",
      icon: Uk,
      href: `/esim/United Kingdom`,
    },
    {
      label: "Middle East",
      icon: MiddleEast,
      href: `/esim/Middle East`,
    },
    {
      label: "Japan",
      icon: Japan,
      href: `/esim/Japan`,
    },
    {
      label: "UAE",
      icon: UAE,
      href: `/esim/United Arab Emirates`,
    },
    {
      label: "KSA",
      icon: Saudia,
      href: `/esim/Saudi Arabia`,
    },
    {
      label: "Asia",
      icon: Asia,
      href: `/esim/Asia`,
    },
    {
      label: "Americas",
      icon: Americas,
      href: `/esim/Americas`,
    },
    {
      label: "Oceania",
      icon: Oceania,
      href: `/esim/Oceania`,
    },
    {
      label: "Africa",
      icon: Africa,
      href: `/esim/Africa`,
    },
  ];

  const settings = {
    ...countriesCarouselSettings,
  };
  //lg:space-x-8 xl:space-x-10 md:max-w-[738px] lg:w-[900px] xl:max-w-[1400px] 2xl:max-w-[1500px] 3xl:max-w-[1600px] 3xl:gap-x-14 mx-auto flex items-center justify-center lg:mt-12

  //2xl:w-[1500px] 3xl:w-[1536px]

  return (
    <div className="max-w-[1200px] px-5 mt-10 mx-auto">
      <h2 className="text-[#1A202C] text-lg font-medium">
        Popular eSIM destinations
      </h2>
      {/* <Slider
        {...settings}
        className="mt-5 mb-12 -mx-5 md:-mx-7 xl:max-w-[1200px]"
      >
        {routes.map((route) => (
          <CountryItem
            key={route.href}
            label={route.label}
            icon={route.icon}
            href={route.href}
          />
        ))}
      </Slider> */}
      <GeneralCarousel
      settings={settings}
      className="mt-5 mb-12 -mx-5 md:-mx-7 xl:max-w-[1200px]"
      >
        {routes.map((route) => (
          <CountryItem
            key={route.href}
            label={route.label}
            icon={route.icon}
            href={route.href}
          />
        ))}
      </GeneralCarousel>
    </div>
  );
};
