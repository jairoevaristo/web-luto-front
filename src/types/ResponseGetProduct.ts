export interface ResponseGetProduct {
  product: {
    id: number;
    name: string;
    price: number;
    type: number;
    quantity: number;
    dimension: string;
    image: string;
  };
}