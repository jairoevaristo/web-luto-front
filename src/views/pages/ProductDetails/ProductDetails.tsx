import React from "react";
import { Header } from "../../../components/Header";
import { useGetProductById } from "../../../hooks/useGetProductById";
import { PageLoader, ProductDescription } from "../../../components";
import { useParams } from "react-router-dom";
import { formatMediaImageStrapi } from "../../../utils/formatMediaImageStrapi";

export const ProductDetails: React.FC = () => {
  const params = useParams<{ id: string }>()

  const { data, isLoading } = useGetProductById({
    productId: params.id || '',
  });

  return (
    <PageLoader condition={!isLoading}>
      <Header/>
      <ProductDescription
        image={formatMediaImageStrapi(data?.data.attributes.image.data.attributes.formats.thumbnail.url)}
        name={data?.data.attributes.name}
        price={Number(data?.data.attributes.price)}
        quantity={2}
        type={2}
        id={Number(data?.data.id)}
        dimension={'2'}
      />
    </PageLoader>
  );
};
