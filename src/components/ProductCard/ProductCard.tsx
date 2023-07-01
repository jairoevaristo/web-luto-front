import React from "react";
import { capitalizeFirstLetter } from "../../utils/format";
import { maskReal } from "../../utils/masks";

interface ProductCardProps {
  price: number;
  name?: string;
  img?: string;
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  price,
  name,
  img,
  onClick,
}) => {
  return (
    <div className="bg-white flex justify-between items-center w-[200px] h-[300px] p-[20px] flex-col rounded-[4px] hover:shadow-lg transition-shadow">
      <div className="bg-white w-[160px] relative h-[160px] flex justify-center items-center rounded-[4px]">
        <img
          className="w-full h-full object-contain rounded-[4px]"
          src={img}
        />
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-start pb-[10px] mt-[5px]">
        <h5 className="text-lg font-normal tracking-tight text-[#333]">
          {capitalizeFirstLetter(name?.toLowerCase())}
        </h5>
        <span className="text-lg font-semibold text-[#333]">
          {maskReal(price)}
        </span>
      </div>
      <button
        onClick={onClick}
        className="w-full p-[5px] bg-[#333] font-[500] text-[#FFFFFF] rounded-[5px] hover:opacity-90"
      >
        Comprar
      </button>
    </div>
  );
};
