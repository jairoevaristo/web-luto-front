export interface ResponseGetAllProducts {
  map(arg0: (product: { id: number; name: string; price: number; type: number; quantity: number; dimension: string; image: string; }) => JSX.Element): import("react").ReactNode;
  productList: {
    id: number;
    name: string;
    price: number;
    type: number;
    quantity: number;
    dimension: string;
    image: string;
  }[];
}