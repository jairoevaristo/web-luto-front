import { ReactNode, useCallback, useMemo, useState } from "react"
import { CartProduct, cartContext } from "./CartContext"

export const CardProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<CartProduct[]>([]);
    const [showCart, setShowCart] = useState(false);

    const onAddCartProduct = useCallback((product: CartProduct) => {
        setShowCart(true)
        setProducts(prevState => [...prevState, { ...product }])
    }, []);

    const onToggleShowCart = useCallback(() => {
        setShowCart(prevState => !prevState)
    }, []);

    const onRemoveCartProduct = useCallback((productId: number) => {
        setProducts(prevState =>  prevState.filter(product => product.productId !== productId))
        setShowCart(() => products.length > 0);
    }, []);

    const onClearCart = useCallback(() => setProducts([]), []);

    const values = useMemo(() => ({
        products,
        onAddCartProduct,
        onRemoveCartProduct,
        onClearCart,
        onToggleShowCart,
        showCart
    }), [
        products,
        onAddCartProduct,
        onRemoveCartProduct,
        onClearCart,
        onToggleShowCart,
        showCart
    ])

    return (
        <cartContext.Provider value={values}>
            {children}
        </cartContext.Provider>
    )
}