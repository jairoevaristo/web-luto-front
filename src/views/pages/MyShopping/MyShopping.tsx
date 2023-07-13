import React, { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { PageLoader, Ticket } from "../../../components";
import { useGetAllSale } from "../../../hooks/useGetAllSale";

export const MyShopping: React.FC = () => {
  const { data, isLoading } = useGetAllSale();
  console.log(data);
  return (    
    <PageLoader condition={!!data}>
      <Header />
      <div className="w-auto bg-transparent rounded-2xl flex flex-col items-center mt-[100px] mb-[30px]">
        <div className="w-full flex flex-row items-start mb-5">
          <h1 className="font-semibold text-black text-xl">Minhas Compras:</h1>
        </div>
        <Ticket data={data!} />
      </div>
    </PageLoader>
  );
};
