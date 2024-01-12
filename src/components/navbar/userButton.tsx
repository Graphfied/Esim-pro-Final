"use client";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { User } from ".";

export default function UserButton({
  isLargeScreen,
  currentUser,
}: {
  isLargeScreen: boolean;
  currentUser : User;
}) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const userName = "John Doe";
  const handleButtonClick = () => {
    setIsClicked(true);
    // Additional logic can be added here if needed
  };

  function getInitials(fullName: string) {
    const names = fullName.split(" ");
    const initials = names.map((name) => name[0].toUpperCase());
    return initials.join("");
  }


  return (
    <div>
  

      {/* if we have Current User */}
      {currentUser ? (
        <>
         <div className="flex items-center gap-2">
          <Link href={"/profile"} className="hidden lg:block">
            <Avatar>
              <AvatarImage src={currentUser?.image} alt="user" />
              <AvatarFallback className="bg-white border border-[#38BDEF] text-[#38BDEF]">
                {getInitials(currentUser?.name)}
              </AvatarFallback>
            </Avatar>
          </Link>
          {/* Reward Balance */}
          <Link href="/profile/wallet">
            <p className="text-[9px] text-black">Reward Balance</p>
            <p className="text-[15px] mt-0.5 font-[450] text-black">$0.00</p>
          </Link>
        </div>
        </>
      ) : (
        <>
        {isLargeScreen ? (
          // <Link href="/signup">
          <Button
            className="bg-[#38BDEF] hover:text-[#38BDEF] hover:bg-white border border-[#38BDEF]"
            onClick={() => router.push('/login')}
          >
            Join Now
          </Button>
        ) : (
          // </Link></div>)}
          <Button
            className="bg-[#38BDEF] hover:text-[#38BDEF] hover:bg-white border border-[#38BDEF]"
            onClick={() => router.push('/login')}
          >
            <LogIn />
          </Button>
          // </Link>
        )}
      </>
      )}
    </div>
  );
}



// {isClicked ? (
//   <div className="flex items-center gap-2">
//     <Link href={"/profile"} className="hidden lg:block">
//       <Avatar>
//         <AvatarImage src="/user.jpg" alt="user" />
//         <AvatarFallback className="bg-white border border-[#38BDEF] text-[#38BDEF]">
//           {getInitials(userName)}
//         </AvatarFallback>
//       </Avatar>
//     </Link>
//     {/* Reward Balance */}
//     <Link href="/profile/wallet">
//       <p className="text-[9px] text-black">Reward Balance</p>
//       <p className="text-[15px] mt-0.5 font-[450] text-black">$0.00</p>
//     </Link>
//   </div>
// ) : (
//   <>
//     {isLargeScreen ? (
//       // <Link href="/signup">
//       <Button
//         className="bg-[#38BDEF] hover:text-[#38BDEF] hover:bg-white border border-[#38BDEF]"
//         onClick={() => router.push('/login')}
//       >
//         Join Now
//       </Button>
//     ) : (
//       // </Link></div>)}
//       <Button
//         className="bg-[#38BDEF] hover:text-[#38BDEF] hover:bg-white border border-[#38BDEF]"
//         onClick={() => router.push('/login')}
//       >
//         <LogIn />
//       </Button>
//       // </Link>
//     )}
//   </>
// )}