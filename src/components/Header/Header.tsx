import React from "react";
import { Dropdown } from "../Dropdown";
import { AccountAvatar } from "../AccountAvatar";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "../../hooks/useGetUser";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../hooks/useCart";

export const Header: React.FC = () => {
  const { data } = useGetUser();
  const navigate = useNavigate();
  const { products, onToggleShowCart } = useCart()

  const formatUserName = (firstName?: string, lastName?: string) => {
    if (firstName && lastName)
      return (
        firstName.charAt(0).toUpperCase() +
        firstName.slice(1) +
        " " +
        lastName.charAt(0).toUpperCase() +
        lastName.slice(1)
      );
    else return "";
  };

  return (
    <div className="w-screen h-[70px] flex items-center z-10 justify-between fixed top-0 p-[0_20px] backdrop-blur-[2px] shadow-[0_2px_10px_#e6e6e6]">
      <div className="cursor-pointer" onClick={() => navigate("/produtos")}>
        <img
          className="w-[125px]"
          src="/src/assets/icon/FullLogoIcon.svg"
          alt="Logo"
        />
      </div>
      <div className="w-auto h-auto flex justify-center items-center">
        <h1 className="font-normal text-lg m-[0_10px]">
          {formatUserName(
            data?.entity.client.firstName.toLowerCase(),
            data?.entity.client.lastName.toLowerCase()
          )}
        </h1>
        <AccountAvatar
          img={data?.entity.client.avatar}
          firstName={data?.entity.client.firstName}
          lastName={data?.entity.client.lastName}
        />
        <Dropdown />
        {products.length > 0 && (
          <button 
            className="mx-4 relative cursor-pointer bg-none border-0"
            onClick={onToggleShowCart}
          >
            <span className="text-xs text-white absolute bg-blue-600 h-4 w-4 flex items-center justify-center rounded-full -bottom-2 -left-1">
              {products.length}
            </span>
            <ShoppingBagIcon className="text-black h-7 w-7" />
          </button>
        )}
      </div>


    </div>
  );
};
