import React from "react";
import { capitalizeFirstLetter } from "../../utils/format";
import { ArrowSmallLeftIcon, ChevronDownIcon, ChevronLeftIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { maskProductType, maskReal } from "../../utils/masks";
import { useCart } from "../../hooks/useCart";

interface ProductDescriptionProps {
  price?: number;
  name?: string;
  image?: string;
  quantity?: number;
  type?: number;
  dimension?: string;
  id: number;
};

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  price = 0,
  name,
  image,
  quantity = 0,
  type = 0,
  id,
  dimension,
}) => {
  const [ isDetails, setDetails ] = React.useState(false);
  const [ quantityProduct, setQuantityProduct ] = React.useState(1);
  const { onAddCartProduct, products } = useCart()

  const onClickAddCart = () => {
    const isProductsExists = products.filter((element) => element.productId === id);

    if(isProductsExists.length <= 0) {
      onAddCartProduct({
        price,
        product_image_url: image!,
        product_name: name!,
        product_type: String(type)!,
        productId: id,
        quantity: quantityProduct
      })
    }
  }

  return (
    <div className="grid grid-cols-[1fr_1fr] gap-[20px] mt-[130px] mb-[20px] relative px-5">
      <Link className="absolute top-[-45px] left-[20px]" to="#" onClick={() => window.history.back()}>
        <ArrowSmallLeftIcon className="text-[#333] w-8 hover:opacity-[0.9]"/>
      </Link>
      <div className="aspect-[1/1] max-w-[500px] bg-white flex justify-center items-center rounded-[10px] overflow-hidden">
        <img className="min-w-[500px] transition-[1s_all_ease-in-out] hover:scale-[2]" src={image}/>
      </div>
      <div className="flex flex-col items-start p-8 max-h-[500px]">
        <span className="text-right w-full font-light text-sm mt-3">
          {maskProductType(type)}
        </span>
        <h1 className="font-semibold text-3xl">{capitalizeFirstLetter(name)}</h1>
        <span className="font-light text-xl mt-3">
          {maskReal(price)}
        </span>
        <span className="font-light text-xs mt-3">
          {quantity} {quantity > 1 ? "disponíveis" : "disponível"}
        </span>
        <span className="mt-2 font-normal text-gray-500 text-sm">
          Quantidade: {quantityProduct}x
        </span>
        <div className="flex items-center justify-center border border-gray-300 bg-white shadow-xs mt-3 p-1 rounded gap-2">
          <button className="flex items-center justify-center" onClick={() => setQuantityProduct((prevState) => {
            if (prevState > 0 && prevState < quantity) {
              return prevState + 1
            }

            return prevState;
          })}>
            <PlusIcon className="text-black h-4 w-4" />
          </button>
          <MinusIcon className="text-black h-4 w-4 rotate-90" />
          <button className="flex items-center justify-center"onClick={() => setQuantityProduct((prevState) => {
            if (prevState > 1) {
              return prevState - 1
            }

            return prevState;
          })}>
            <MinusIcon className="text-black h-4 w-4" />
          </button>
        </div>
        <details className="w-full">
          <summary className="px-1 cursor-pointer list-none mt-20" onClick={() => setDetails(!isDetails)}>
            <div className="flex flex-row justify-between items-center">
              <p className="font-light text-[15px]">Dimensão (cm)</p>
              {isDetails === true ? <ChevronLeftIcon className="w-4 h-4"/> : <ChevronDownIcon className="w-4 h-4"/>}
            </div>
          </summary>
          <p className="font-light text-sm mt-1 ml-2">
            {dimension}
          </p>
        </details>
        <button
          className="w-full p-3 bg-[#333] mt-auto font-[500] text-[#FFFFFF] rounded-[5px] hover:opacity-90"
          onClick={onClickAddCart}
        >
          Adicionar ao carinho
        </button>
      </div>
    </div>
  );
};