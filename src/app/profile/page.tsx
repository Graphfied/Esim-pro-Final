import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import OptionListComponent from "@/components/profilePageComponents/OptionListComponent";
import { LogOutButton } from "@/components/profilePageComponents/LogOutButton";
import { ProfileComponent } from "@/components/profilePageComponents/ProfileComponent";
import getCurrentUser from "@/actions/getCurrentUser";

const Profile = async () => {
  const currentUser = await getCurrentUser();

  return (
      <ProfileComponent currentUser={currentUser} />
  );
};

export default Profile;
