import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { GoClock } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import esimIcon from "../../../../public/navbar/esim.svg";
import CountDown from "../countDown";

export default function OrderInfoCard({ data }: any) {
  // console.log("Data", data);
  return (
    <div className="w-full lg:max-w-[30%] mt-10 lg:mt-0 px-5">
      {/* Heading */}
      <div className="flex items-end justify-between mb-1">
        <p className="text-[15px]">Order Summary</p>
        <p className="text-xs">
          <GoClock className="inline mr-1" />
          session expires in{" "}
          <span className="font-medium">
            <CountDown /> minutes
          </span>
        </p>
      </div>

      {/* Card */}
      <div className="bg-white p-4 rounded-lg">
        {/* Provider Logo - Product Title - Price */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-x-1">
            <Image
              src={data[0]?.providerLogo}
              alt={"providerlogo"}
              width={25}
              height={25}
            />
            <p className="text-[15px]">
              {data[0]?.productDetails?.product_Title}
            </p>
          </div>
          <p className="text-lime-500 text-[15px]">
            {data[0]?.currencyCode} {data[0]?.retailPrice}
          </p>
        </div>

        <Separator className="bg-gray-200" />

        {/* Esim - Free */}
        <div className="flex items-center justify-between py-4">
          <div className="flex gap-x-1">
            <Image src={esimIcon} alt="icon" width={20} height={20} />
            <p className="text-[15px]">eSIM</p>
          </div>
          <p className="text-lime-500 text-[15px]">FREE</p>
        </div>

        <Separator className="bg-gray-200" />

        {/* Total - Price */}
        <div className="flex items-center justify-between py-4">
          <p className="text-[15px]">
            <MdOutlineShoppingCart className="inline mr-1" size={20} />
            Total
          </p>
          <p className="text-lime-500 text-[15px]">
            {data[0]?.currencyCode} {data[0]?.retailPrice}
          </p>
        </div>

        <Separator className="bg-gray-200" />

        {/* Reward */}
        <div className="flex items-center justify-between pt-4 gap-x-1">
          <CiGift size={35} />
          <p className="text-[15px]">
            Both you and your refererer earn $5.00 MobiMatter Rewards with this
            purchase
          </p>
        </div>
      </div>
    </div>
  );
}
