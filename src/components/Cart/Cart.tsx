import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../hooks/useCart"
import { formatCurrency } from "../../utils/format";
import { useMemo } from "react";

export const Cart: React.FC = () => {
    const { products, onRemoveCartProduct, onToggleShowCart, showCart } = useCart();
    const total = useMemo(() => {
      return products.reduce(
        (arr, item) => (arr += item.price * item.quantity),
        0
      );
    }, [products]);

    if (!showCart) {
        return null;
    }

    return (
        <div className="overflow-auto p-4 fixed z-50 top-0 right-1 shadow-lg h-screen bg-opacity-95 w-[420px] border-l border-gray-300 bg-white">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl text-gray-800 text-center">Itens no seu carinho</h1>
                <button onClick={onToggleShowCart}>
                    <XMarkIcon className="text-black h-7 w-7" />
                </button>
            </div>
            <div className="space-y-5">
                {products.map(product => {
                    return (
                        <div className="px-2 py-3 flex items-center justify-between bg-white border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <img src={product.product_image_url} className="w-10 h-10" />
                                <div className="flex flex-col">
                                    <span>{product.product_name}</span>
                                    <span>{formatCurrency(product.price)}</span>
                                </div>
                        </div>
                            <div className="flex flex-col justify-center" onClick={() => onRemoveCartProduct(product.productId)}>
                                <span>{product.quantity}x</span>
                                <button className="cursor-pointer mt-2">
                                    <TrashIcon className="text-red-500 w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-full flex justify-end mt-2">
              <span className=" text-lg font-semibold">Total: {formatCurrency(total)}</span>
            </div>
            <button
                className="w-full p-3 bg-[#333] mt-10 font-[500] text-[#FFFFFF] rounded-[5px] hover:opacity-90"
                onClick={() => {
                  window.location.href = "http://localhost:5173/usuario/pagamento";
                }}
            >
                Finalizar compra
            </button>
        </div>
    )
}