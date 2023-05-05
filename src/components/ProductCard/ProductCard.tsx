import React from "react";

interface ProductCardProps {
  price?: number;
  name?: string;
  img?: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  price,
  name,
  img,
}) => {
  return (
    <div className="bg-white flex justify-between items-center w-[200px] h-[300px] shadow-xl p-[20px] flex-col rounded-[4px] hover:shadow-2xl transition-shadow">
      <div className="bg-white w-[200px] relative h-[150px] flex justify-center items-center rounded-[4px]">
        <img className="w-full h-full object-cover rounded-[4px]" src={img} alt="produto"/>
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-start px-[10px] pb-[10px]">
        <h5 className="text-xl font-semibold tracking-tight text-[#333]">{name}</h5>
        <span className="text-xl font-bold text-[#333]">R${price}</span>
      </div>
      <button className="w-full p-[5px] bg-[#333] font-[500] text-[#FFFFFF] rounded-[5px] hover:opacity-90">Comprar</button>
    </div>
  );
};