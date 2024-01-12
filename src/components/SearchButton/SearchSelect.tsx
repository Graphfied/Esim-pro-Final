"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, SearchIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface CustomSelectorI {
  placeholder: string;
  data: any;
  isLoading?: boolean;
  error?: string;
  identifier: string;
  onSelect: (value: string) => void;
}
export function CustomSelector({
  placeholder,
  data,
  isLoading,
  error,
  identifier,
  onSelect,
}: CustomSelectorI) {
  const router = useRouter();
  const [val, selectedVal] = React.useState(identifier);
  // console.log("Selected Value", val);
  return (
    <Select
      onValueChange={(value: any) => {
        // onSelect(value);
        // selectedVal(value);

        // Replace spaces with hyphens in the country name
        const formattedValue = value.name.trim().replace(/\s+/g, "-");
        onSelect(formattedValue);
        selectedVal(formattedValue);

        // redirect
        router.push(`/travel-esim/${formattedValue}`);
      }}
    >
      <SelectTrigger
        className={` rounded-full p-6 gap-x-3 sm:gap-0  sm:py-7 sm:px-5 flex items-center justify-between text-[15px] font-medium focus:ring-0 focus:ring-offset-0  transition-colors duration-500 bg-transparent border-Dark-opacity-20 bg-[#FFFFFF]  border border-neutral-200 w-auto sm:max-w-[470px] md:w-[350px] lg:w-[350px] xl:w-[460px]  shadow-inner mt-4 mb-6 sm:mt-6 sm:mb-6  md:mt-6 md:mb-9 lg:mt-10 lg:mb-4 xl:mt-16 xl:mb-5${
          val === placeholder
            ? "bg-transparent border-Dark-opacity-20"
            : "bg-Dark-opacity-5  border-Dark-opacity-5"
        }`}
        /* @ts-ignore */
        customicon={
          <Button className=" bg-[#38BDEF] rounded-full text-white  hover:bg-[#38BDEF] hover:opacity-70 transition duration-500 ease-in-out p-2 sm:p-2 md:p-2 lg:p-2  xl:p-2.5 ml-auto">
            <SearchIcon className=" h-5 w-5" />
          </Button>
        }
      >
        <SelectValue
          placeholder={
            <div
              className={`${
                placeholder === identifier
                  ? "text-Dark opacity-50"
                  : "text-Dark"
              }`}
            >
              {placeholder}
            </div>
          }
        />
      </SelectTrigger>

      <SelectContent side="bottom" avoidCollisions={false}>
        {error ? (
          <p>Error loading countries</p>
        ) : isLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <SelectGroup className=" ">
            <SelectLabel>Select an option</SelectLabel>
            {data?.map((item: any) => (
              <SelectItem key={item.name} value={item} className="">
                <div className=" flex items-center gap-2">
                  <Image
                    src={item.flag}
                    alt={item.name}
                    height={20}
                    width={20}
                  />
                  {item.name}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  );
}
