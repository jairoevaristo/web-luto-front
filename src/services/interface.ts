export interface UserInfo {
  avatar: string;
  name: string;
  surname: string;
  cpf: string;
  email: string;
  dataOfBirth: string;
  tel: string;
  cep: string;
  street: string;
  neighborhood: string;
  number: number;
  password: string;
};

export interface ProductInfo {
  id: number;
  name: string;
  price: number;
  type: number;
  quantity: number;
  dimension: string;
  image: string;
};