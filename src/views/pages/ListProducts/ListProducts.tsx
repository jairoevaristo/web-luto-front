import React from "react";
import { Header } from "../../../components/Header";
import { ProductCard } from "../../../components/ProductCard";
import { useGetAllProducts } from "../../../hooks/useGetAllProducts";
import { useNavigate } from "react-router-dom";
import { ResponseGetProduct } from "../../../types/ResponseGetProduct";
import { PageLoader } from "../../../components";

export const ListProducts: React.FC = () => {
  const navigate = useNavigate();
  
  const { data, isLoading } =
    useGetAllProducts();

  return (
    <PageLoader condition={!isLoading}>
      <div className="bg-slate-100 flex justify-center w-screen h-auto min-h-screen">
        <Header/>
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-[20px] mt-[100px] mb-[20px]">
          {data?.productList.map(
            (product: ResponseGetProduct["product"]) => (
              <div key={product.id}>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  img={product.image}
                  onClick={() => navigate("/produto/" + product.id)}
                />
              </div>
            )
          )}
        </div>
      </div>
    </PageLoader>
  );
};
