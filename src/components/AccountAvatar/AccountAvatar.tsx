import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

interface AccountAvatarInfo {
  img?: string;
  firstName?: string;
  lastName?: string;
};

export const AccountAvatar: React.FC<AccountAvatarInfo> = ({ img, firstName, lastName }) => {
  const nameInitials = (firstName: string | undefined, lastName: string | undefined) => {
    if (firstName && lastName) return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    else return "";
  }

  const userInitials: string = nameInitials(firstName, lastName);

  return (
    <div>
      <Avatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-[40px] h-[40px] rounded-full bg-white">
        <Avatar.Image
          src={img}
          alt="Perfil"
          className="w-full h-full object-cover rounded-[inherit]"
        />
        <Avatar.Fallback className="w-[40px] h-[40px] flex items-center justify-center bg-[#333] text-white text-[15px] leading-[1] font-[500]" delayMs={600}>
          {userInitials}
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
};