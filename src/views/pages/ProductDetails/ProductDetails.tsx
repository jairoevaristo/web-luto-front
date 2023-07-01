import React from "react";
import { Header } from "../../../components/Header";
import { useGetProductById } from "../../../hooks/useGetProductById";
import { PageLoader, ProductDescription } from "../../../components";

export const ProductDetails: React.FC = () => {
  const [id] = React.useState(
    parseInt(String(location.pathname.split("/").slice(-1)[0]))
  );
  const { data, isLoading } = useGetProductById({
    productId: id,
  });

  return (
    <PageLoader condition={!isLoading}>
      <Header/>
      <ProductDescription
        image={data?.product.image}
        name={data?.product.name}
        price={data?.product.price}
        quantity={data?.product.quantity}
        type={data?.product.type}
        dimension={data?.product.dimension}
      />
    </PageLoader>
  );
};
