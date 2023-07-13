import React, { useMemo } from "react";
import { Header } from "../../../components/Header";
import { useGetProductById } from "../../../hooks/useGetProductById";
import { Cart, PageLoader, ProductDescription } from "../../../components";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { formatMediaImageStrapi } from "../../../utils/formatMediaImageStrapi";
import { useCreditCard } from "../../../context/CreditCardProvider";
import { useCart } from "../../../hooks/useCart";
import { useCreateSale } from "../../../hooks/useCreateSale";

export const ProductDetails: React.FC = () => {
  const params = useParams<{ id: string }>()
  const { card } = useCreditCard();
  const { products, onClearCart } = useCart();
  const total = useMemo(() => {
    return products.reduce(
      (arr, item) => (arr += item.price * item.quantity),
      0,
    );
  }, [products]);

  const { data, isLoading } = useGetProductById({
    productId: params.id || '',
  });

  const { refetch, isLoading: isLoadingSale, data: dataSale } = useCreateSale({
    card: {
      cvv: card.cvc.toString(),
      expirationDate: card.expiry.toString(),
      fullName: card.name,
      number: card.number.toString(),
    },
    products: products.map((product) => ({
      productId: product.productId,
      name: product.product_name,
      dimension: "200cm x 40cm x 50cm",
      image: product.product_image_url,
      price: product.price,
      quantity: product.quantity
    })),
    totalValue: total
  });
  const navigate = useNavigate();

  return (
    <PageLoader condition={!isLoading}>
      <Header/>
      <ProductDescription
        image={formatMediaImageStrapi(data?.data.attributes.image.data.attributes.formats.thumbnail.url)}
        name={data?.data.attributes.name}
        price={Number(data?.data.attributes.price)}
        quantity={5}
        type={2}
        id={Number(data?.data.id)}
        dimension={'200cm x 40cm x 50cm'}
      />
      <Cart isLoading={isLoadingSale} onClick={() => {
        refetch()
        if(!!dataSale) {
          onClearCart();
          navigate("/usuario/pagamento", {state: dataSale});
        }
      }} />
    </PageLoader>
  );
};
