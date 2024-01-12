import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export function MainTopupSelector({
  onSelect,
  className,
  data,
  placeholder,
  provider,
  country,
}: {
  onSelect: (value: string) => void;
  className?: string;
  data: { logo: string; label: string; value: string }[];
  placeholder: string;
  provider?: string;
  country?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  let paramsProvider = pathname.split("/")[2];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const SearchParams = new URLSearchParams(searchParams);
  // Check if paramsProvider matches any of the specified values
  // const validProviders = ["All", "Sparks", "3", "Ubigi", "eSIMGo", "Airalo"];
  const validProviders = data?.map((item) => item.label);
  if (!validProviders?.includes(paramsProvider)) {
    paramsProvider = ""; // Set to an empty string if not in the valid list
  }

  const selectedProvider = data.find((item) => item.label === paramsProvider);

   // Add "ALL" option to the data array
   const dataWithAllOption = [{ logo: "", label: "ALL", value: "ALL" }, ...data];
  return (
    <Select
      onValueChange={(value) => {
        onSelect(value);


      }}
    >
      <SelectTrigger
        className={cn(
          "min-[370px]:w-[180px] w-auto focus:ring-0 focus:ring-offset-0 bg-transparent border-2 ",
          className
        )}
      >
        {/* Use paramsProvider as the initial value if available, otherwise use an empty string */}
        {/* <SelectValue   placeholder={paramsProvider || placeholder} className=" flex items-start justify-center" /> */}

        {selectedProvider && selectedProvider.logo ? (
          <div className="flex items-center justify-center space-x-2 space-y-2">
            <Image
              src={selectedProvider.logo}
              alt={selectedProvider.label}
              height={20}
              width={20}
            />
            <p className=" font-bold">{selectedProvider.label}</p>
          </div>
        ) : (
          <SelectValue
            placeholder={paramsProvider || placeholder}
            className="flex items-start justify-center"
          />
        )}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {dataWithAllOption.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className=" my-2"
              // onSelect={() => {
              //   console.log("Select ----->",item.value);

              // }}
            >
              <div className=" flex items-center justify-center space-x-2 space-y-2">
                {item.logo && (
                  <Image
                    src={item.logo}
                    alt={item.label}
                    height={20}
                    width={20}
                  />
                )}
                <p>{item.label}</p>
              </div>
            </SelectItem>
          ))}
          {/* <SelectItem value="recommended">Recommended</SelectItem>
          <SelectItem value="lowest price">Lowest price</SelectItem>
          <SelectItem value="most data allowance">
            Most data allowance
          </SelectItem>
          <SelectItem value="lowest price per gb">
            Lowest price per GB
          </SelectItem>
          <SelectItem value="longest validity">Longest validity</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
