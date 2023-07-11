import { createContext } from "react";

export interface CartProduct {
    price: number;
    quantity: number;
    productId: number;
    product_name: string;
    product_image_url: string;
    product_type: string;
}

export interface CartContextData {
    products: CartProduct[];
    showCart: boolean;
    onAddCartProduct: (product: CartProduct) => void;
    onRemoveCartProduct: (productId: number) => void;
    onClearCart: () => void;
    onToggleShowCart: () => void;
}

export const cartContext = createContext({} as CartContextData);
