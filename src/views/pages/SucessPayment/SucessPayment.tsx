import React, { useEffect, useMemo, useState } from "react";
import { Header } from "../../../components/Header";
import { PageLoader, TextInput, Ticket } from "../../../components";
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
      <div className="bg-transparent rounded-2xl w-1/2 flex flex-col items-center mt-[100px] mb-[30px]">
        <CheckCircleIcon className="text-green-500 w-[100px] h-[100px] mb-2"/>
        <h2 className="mt-2 font-semibold text-xl">Compra realizada com sucesso!</h2>
        <p className="mt-2 font-medium text-sm">Entraremos em contato via WhatsApp: (88) 3691-2020</p>
        <p className="mt-2 text-sm mb-7">(Seu comprovante abaixo)</p>
        <Ticket />
      </div>
    </PageLoader>
  );
};
