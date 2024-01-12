// "use client";
// import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { PiCheckFatLight } from "react-icons/pi";

export default function TopBar() {
  // Use state to manage the color of separators and icons dynamically
  // const [separatorColor, setSeparatorColor] = useState("bg-green-300");

  // // Function to update color based on payment progress
  // const updateColor = (color: any) => {
  //   setSeparatorColor(color);
  // };

  return (
    <div className="flex items-center mt-5 mb-14 w-full">
      <Separator className={`py-0.5 bg-lime-500 w-[16.2%] xl:w-[18%]`} />
      <div className="relative">
        <FaRegAddressCard size={40} className="text-txtgrey" />
        <p className="text-txtgrey text-sm absolute top-12 left-1/2 -translate-x-1/2">
          Info
        </p>
      </div>
      <Separator className={`py-0.5 bg-gray-200 w-[27.7%]`} />
      <div className="relative">
        <MdPayment size={40} className="text-txtgrey" />
        <p className="text-txtgrey text-sm absolute top-12 left-1/2 -translate-x-1/2">
          Payment
        </p>
      </div>
      <Separator className={`py-0.5 bg-gray-200 w-[27.7%]`} />
      <div className="relative">
        <PiCheckFatLight size={40} className="text-txtgrey" />
        <p className="text-txtgrey text-sm absolute top-12 left-1/2 -translate-x-1/2">
          Complete
        </p>
      </div>
      <Separator className={`py-0.5 bg-gray-200 w-[16.2%] xl:w-[18%]`} />
    </div>
  );
}
