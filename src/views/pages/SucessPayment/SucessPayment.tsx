import React, { useEffect, useMemo, useState } from "react";
import { Header } from "../../../components/Header";
import { PageLoader, TextInput } from "../../../components";
import {
  CheckCircleIcon
} from "@heroicons/react/24/outline";
import { formatCurrency } from "../../../utils/format";
import { CartProduct } from "../../../context/CartContext";
import { useLocation } from "react-router-dom";

export const SucessPayment: React.FC = () => {
  const location = useLocation();
  const productsString = localStorage.getItem("products");
  const productsArray: CartProduct[] = JSON.parse(productsString ? productsString : "[]");
  const [products, setProducts] = useState<CartProduct[]>([]);
  const total = useMemo(() => {
    return products.reduce((arr, item) => (arr += item.price * item.quantity), 0);
  }, [products]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setProducts(productsArray);
    setLoading(true);
  }, []);

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem("products");
    };

    if (location.pathname !== "/usuario/pagamento") {
      clearLocalStorage();
    }

    return () => {
      clearLocalStorage();
    };
  }, [location]);

  return (
    <PageLoader condition={loading}>
      <Header/>
      <div className="bg-transparent px-16 py-12 rounded-2xl w-1/2 flex flex-col items-center mt-[100px] mb-[30px]">
        <CheckCircleIcon className="text-green-500 w-[200px] h-[200px]"/>
        <h2 className="mt-7 font-semibold text-xl">Compra realizada com sucesso!</h2>
        <p className="mt-2 text-sm">Entraremos em contato via WhatsApp: (88) 3691-2020</p>
        <div className="space-y-5 w-full mt-7">
          {products.map(product => (
              <div className="px-4 py-5 flex items-center justify-between bg-white border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <img src={product.product_image_url} className="w-10 h-10" />
                  <div className="flex flex-col">
                    <span>{product.product_name}</span>
                    <span>{formatCurrency(product.price)}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span>{product.quantity}x</span>
                </div>
              </div>
          ))}
        </div>
        {total !== 0 ? <div className="w-full flex justify-end mt-2">
          <span className="text-lg font-semibold">Total: {formatCurrency(total)}</span>
        </div> : <div className="w-full flex justify-center mt-2">
          <span className="text-sm font-semibold">Nenhum produto cadastrado no carrinho.</span>
        </div>}
      </div>
    </PageLoader>
  );
};
