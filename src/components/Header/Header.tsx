import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const Header: React.FC = () => {
  return (
    <div className="w-screen h-[70px] flex items-center z-10 justify-between fixed top-0 p-[0_20px] backdrop-blur-[2px] shadow-[0_2px_10px_#e6e6e6]">
      <div>
        <img className="w-[125px]" src="/src/assets/icon/FullLogoIcon.svg" alt="Logo"/>
      </div>
      <div className="w-auto h-auto flex justify-center items-center">
        <Avatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-[40px] h-[40px] rounded-full bg-white">
          <Avatar.Image
            src=""
            alt="Perfil"
            className="w-full h-full object-cover rounded-[inherit]"
          />
          <Avatar.Fallback className="w-[40px] h-[40px] flex items-center justify-center bg-[#333] text-white text-[15px] leading-[1] font-[500]" delayMs={600}>
            WL
          </Avatar.Fallback>
        </Avatar.Root>
        <Popover.Root>
          <Popover.Trigger asChild>
            <button className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-[#333] bg-transparent" aria-label="">
              <ChevronDownIcon className="w-4 h-4" />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="rounded-[4px] overflow-hidden mt-[5px] mr-[5px] w-[200px] bg-white shadow-[0_2px_10px_#e6e6e6] z-10" sideOffset={5}>
              <div className="flex flex-col gap-[10]">
                <div className="p-[5px_0] bg-white ">
                  <h3 className="p-[0_10px] font-[600]">Perfil</h3>
                </div>
                <div className="p-[5px_0] bg-white ">
                  <h3 className="p-[0_10px] font-[600]">Perfil</h3>
                </div>
                <div className="p-[5px_0] bg-white ">
                  <h3 className="p-[0_10px] font-[600]">Perfil</h3>
                </div>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
};