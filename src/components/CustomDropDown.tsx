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

export function CustomDropDown({
  onSelect,
  className,
  data,
  placeholder,
  provider,
  country,
}: {
  onSelect: (value: string) => void;
  className?: string;
  // data: {logo : string; label : string; value: string}[];
  data: any;
  placeholder: string;
  provider?: string;
  country?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selected, setSelected] = React.useState("");
  // console.log("🚀 ~ file: CustomDropDown.tsx:34 ~ selected:", selected)
  let paramsProvider = pathname.split("/")[2];
  // console.log("🚀 ~ file: CustomDropDown.tsx:36 ~ paramsProvider:", paramsProvider)
  let countryParams = pathname.split("/")[3];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const SearchParams = new URLSearchParams(searchParams);
  // Check if paramsProvider matches any of the specified values
  // const validProviders = ["All", "Sparks", "3", "Ubigi", "eSIMGo", "Airalo"];
  const validProviders = data?.map((item: any) => item.label);
  if (!validProviders?.includes(paramsProvider)) {
    paramsProvider = ""; // Set to an empty string if not in the valid list
  }

  const selectedProvider = data.find(
    (item: any) => item.label === paramsProvider
  );

  // React.useEffect(() => {
  //   if (pathname === `/topup/${paramsProvider}/${countryParams}`) {
  //     SearchParams.set("selectedProvider", selected);
  //   }

  //   router.refresh();
  // }, [SearchParams ,countryParams, paramsProvider, router, selected , pathname]);
  return (
    <Select
      onValueChange={(value) => {
        onSelect(value);

        setSelected(value);
        // if (paramsProvider !== value){
        //   router.push(`/topup/${value}/${countryParams}?${SearchParams.toString()}`);
        //   console.log(`/topup/${value}/${countryParams}?${SearchParams.toString()}`);

        // }
        // pathname.replace(`/topup/${paramsProvider}/${countryParams}?${SearchParams.toString()}`, `/topup/${value}/${countryParams}?${SearchParams.toString()}`);

        // Use window.location.href to update the URL
        //  if ( pathname === `/topup/${value}/${countryParams}?${SearchParams.toString()}`){
        //    const newUrl = `/topup/${value}/${countryParams}?${SearchParams.toString()}`;
        //    window.location.href = newUrl;
        //    console.log("Updated URL:", newUrl);
        //  }

        // router.push(`/topup/${value}/${countryParams}?${SearchParams.toString()}`);
        // console.log(`/topup/${value}/${countryParams}?${SearchParams.toString()}`);
        // const updatePathname = pathname.replace(`/topup/${paramsProvider}/${countryParams}?${SearchParams.toString()}`, `/topup/${value}/${countryParams}?${SearchParams.toString()}`);
        // // console.log("Updated Pathname ----> ", updatePathname);
        // router.replace(updatePathname,undefined);

        // router.push(`/topup/${value}/abc/dfre/swdq`);
      }}
    >
      <SelectTrigger
        className={cn(
          "w-[180px] focus:ring-0 focus:ring-offset-0 bg-transparent border-2 ",
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
          {data.map((item: any) => (
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
