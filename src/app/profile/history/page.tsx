"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

const History = () => {
  const searchParams = useSearchParams();
  const rout = useRouter();

  const params = searchParams.get("type");

  const handleRoute = () => {
    params == "history" ? rout.push("?type=esim") : rout.push("?type=history");
  };
  return (
    <div className="w-full h-screen flex pt-4 justify-center">
      <div className="flex flex-col items-center space-y-4 px-3">
        <div className="h-[3rem] w-[18rem] sm:w-[26rem] bg-darkblue grid grid-cols-2 rounded-full align-center overflow-hidden text-white">
          <p
            className={`flex justify-center items-center cursor-pointer ${
              params != "history" ? "bg-btnblue rounded-full" : ""
            }`}
            onClick={() => handleRoute()}
          >
            My eSIMs
          </p>
          <p
            className={`flex justify-center items-center cursor-pointer ${
              params == "history" ? "bg-btnblue rounded-full" : ""
            }`}
            onClick={() => handleRoute()}
          >
            Order History
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold">You have no eSIMs</p>
          <p className="text-center">
            Your rechargeable eSIMs will be shown here when you buy them
          </p>
        </div>
        <Image alt="" height={200} width={200} src="/profile/card.svg" />
      </div>
    </div>
  );
};

export default History;
