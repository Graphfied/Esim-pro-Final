import React from "react";

export const RewardSelect = () => {
  return (
    <>
      {/* heading */}
      <div className="">
        <h1 className="  text-xl mb-2">Or choose your reward</h1>
        <p className=" text-xs">
          Get free eSIMs and top-ups with reward credits! Just collect $15 in
          rewards and make sure you have enough cover the cost of the product.
        </p>
      </div>

      {/* Referral Cards */}
      <div className="flex flex-col min-[711px]:flex-row items-center justify-between gap-x-3 gap-y-5 mt-4">
        {/* First Card */}
        <div className=" bg-white p-6 shadow-md rounded-md w-full min-[711px]:max-w-[33.3%] text-center ">
          <h3 className=" text-xl font-medium">Referral Bonus</h3>
          <p className=" mt-1">
            $5.00 Rewards credit for both you and your referrer! Valid for your
            first purchase only.
          </p>
        </div>
        {/* Second Card */}
        <div className=" bg-white p-6 shadow-md rounded-md w-full min-[711px]:max-w-[33.3%] text-center ">
          <h3 className=" text-xl font-medium">10% Cashback</h3>
          <p className=" mt-1">
            You will receive $1.30 in cashback to your Rewards Balance for
            future use
          </p>
        </div>
        {/* Third Card */}
        <div className=" bg-white p-6 shadow-md rounded-md w-full min-[711px]:max-w-[33.3%] text-center ">
          <h3 className=" text-xl font-medium">3% Discount</h3>
          <p className=" mt-1">
            You will receive 3% immediate discount, making the new order total
            $12.60
          </p>
        </div>
      </div>
    </>
  );
};
