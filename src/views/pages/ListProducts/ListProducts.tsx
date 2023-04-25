import React from "react";
import { Header, ProductCard } from "../../../components";

export const ListProducts: React.FC = () => {

  return (
    <div className="bg-slate-100 flex justify-center w-screen h-auto min-h-screen">
      <Header/>
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-[20px] mt-[100px] mb-[20px]">
        <ProductCard price={3000} name={"Urna de Luxo"} img={"https://static.wixstatic.com/media/a18fc7_311aba460e4648e4903d2f2f22a13212~mv2.png/v1/fill/w_600,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a18fc7_311aba460e4648e4903d2f2f22a13212~mv2.png"}/>
      </div>
    </div>
  );
};