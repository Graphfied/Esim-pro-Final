import { IProductsProps } from "@/app/esim/[search]/page";
import Image from "next/image";
import React from "react";
import Logo from "../../../../public/logo.png";
import { CreditSection } from "@/views/checkoutpage/CreditSection";
import { RewardSelect } from "../RewardSelect";
import { Separator } from "@/components/ui/separator";
import { PromoSection } from "../PromoSection";
import Link from "next/link";
import { ProceedButton } from "../ProceedButton";

interface RewardSectionProps {
  data: IProductsProps;
}

export const RewardSection = () => {
  return (
    <div className="flex flex-col w-full lg:max-w-[890px] px-5">
      {/* Credit Section */}
      <CreditSection />

      {/* Reward section */}
      <div className=" mt-3">
        <RewardSelect />
      </div>

      {/* Separator */}
      <div className=" w-full flex items-center my-8">
        <span className=" bg-black/10 w-full h-0.5"></span>OR{" "}
        <span className=" h-0.5 bg-black/10 w-full"></span>
      </div>

      {/* Promo Section */}
      <PromoSection />

      {/* Proceed Button */}
      <div className=" mt-5 mb-2">
        <Link href={"/"}>
          <span className=" text-sky-700 underline">Terms and condition</span>{" "}
          apply.
        </Link>
      </div>
      <ProceedButton />
    </div>
  );
};
