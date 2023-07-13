export interface CreateSale {
  products: Product[]
  card: Card
  totalValue: number
}

export interface ResponseCreateSale {
  products: Product[]
  totalValue: number
  saleId?: number
  purchaseDate?: Date,
}

export interface Product {
  productId: number
  name: string
  price: number
  quantity: number
  dimension: string
  image: any
}

export interface Card {
  number: string
  cvv: string
  expirationDate: string
  fullName: string
}