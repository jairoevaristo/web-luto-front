export const getAllProductsEndpoint = () => "/products?populate=image";

export const getProductByIdEndpoint = (productId: string) => `/products/${productId}?populate=image`;