import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const Dropdown: React.FC = () => {
  const navigate = useNavigate();
  const { setAuthenticated } =useAuth();

  const onClickProfileButton = () => {
    navigate("/usuario/perfil");
  };

  const onClickLogoutButton = () => {
    setAuthenticated(false);
    navigate("/");
  };

  const onClickAddCardButton = () => {
    navigate("/usuario/cartao");
  };

  const onClickMyShoppingButton = () => {
    navigate("/usuario/my-shopping");
  };

  const buttonList = [
    { id: 1, name: "Perfil", onClick: onClickProfileButton },
    { id: 2, name: "Minhas compras", onClick: onClickMyShoppingButton },
    { id: 3, name: "Cartão", onClick: onClickAddCardButton },
    { id: 4, name: "Sair", onClick: onClickLogoutButton },
  ];

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-[#333] bg-transparent" aria-label="">
            <ChevronDownIcon className="w-4 h-4" />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="rounded-[4px] overflow-hidden mt-[5px] mr-[5px] w-[200px] bg-white shadow-[0_2px_10px_#e6e6e6] z-10" sideOffset={5}>
            <div className="flex flex-col gap-[10]">
              {buttonList.map((button) => (
                <div key={button.id} className="p-[5px_0] bg-white cursor-pointer hover:bg-[#f2f2f2]" onClick={button.onClick}>
                  <h3 className="p-[0_10px] font-normal">{button.name}</h3>
                </div>
              ))}
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};