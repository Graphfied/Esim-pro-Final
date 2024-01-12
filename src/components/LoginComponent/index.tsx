"use client";

import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.png";
import { Button } from "../ui/button";
import Google from "../../../public/google.svg";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const LoginComponent = () => {
    const router = useRouter();
    const LoginFunction =  async () => {
        await signIn('google', { callbackUrl: '/' });
        // The code below will only execute after successful sign-in
        // Redirecting manually in case there are any additional actions you want to perform
        // router.push('/profile');
    }
  return (
    <div className=" flex flex-col items-center justify-center w-full mt-20 space-y-5 ">
      {/* Logo */}
      <div className="">
        <Link href={"/"}>
          <Image src={Logo} alt="" width={120} height={120} />
        </Link>
      </div>

      {/* Text Button */}
      <div className="text-btnblue">
        <Link href={"/login"}>
          <p>Log in / Sign up</p>
        </Link>
      </div>

      {/* Social Login */}
      <div className=" flex flex-col items-center justify-center space-y-5 w-[234px]  ">
        <Button  onClick={LoginFunction}
        className=" bg-white text-black hover:bg-white hover:opacity-70 shadow-md space-x-3 w-[234px]">
          <FaGoogle size={20} className=" text-red-700" />
          <p>Sign in with Google</p>
        </Button>
        <Button className=" bg-[#1877F2] text-white hover:bg-[#1877F2] w-[234px]  hover:opacity-70 shadow-md space-x-3">
          <FaFacebook size={20} />
          <p>Sign in with Facebook</p>
        </Button>
        <Button className=" bg-neutral-900 text-white w-[234px] hover:bg-black hover:opacity-70 shadow-md space-x-3">
          <FaApple size={20} />
          <p>Sign in with Apple</p>
        </Button>
        <Button className=" bg-[#c71610] text-white w-[234px] hover:bg-[#c71610] hover:opacity-70 shadow-md space-x-3">
          <CiMail size={20} />
          <p>Sign in with Gmail</p>
        </Button>
        {/* Text */}
        <p className=" text-center">
          By continuing, you are indicating that you accpet our{" "}
          <span className=" text-btnblue">Terms of Service</span> and{" "}
          <span className=" text-btnblue">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};
