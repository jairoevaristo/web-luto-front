import React from "react";
import { Header } from "../../../components/Header";
import { ProductCard } from "../../../components/ProductCard";
import { useGetAllProducts } from "../../../hooks/useGetAllProducts";
import { useNavigate } from "react-router-dom";
import { PageLoader } from "../../../components";
import { formatMediaImageStrapi } from "../../../utils/formatMediaImageStrapi";


export const ListProducts: React.FC = () => {
  const navigate = useNavigate();
  
  const { data, isLoading } =
    useGetAllProducts();

  return (
    <PageLoader condition={!isLoading || !data}>
      <div className="bg-slate-100 flex justify-center w-screen h-auto min-h-screen">
        <Header/>
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-[20px] mt-[100px] mb-[20px]">
          {data?.data?.map(({ id, attributes }) => (
            <div key={id}>
            <ProductCard
              name={attributes.name}
              price={Number(attributes.price)}
              img={formatMediaImageStrapi(attributes.image.data.attributes.formats.thumbnail.url)}
              onClick={() => navigate("/produto/" + id)}
            />
          </div>
          ))}
        </div>
      </div>
    </PageLoader>
  );
};
