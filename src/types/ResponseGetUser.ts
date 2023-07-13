export interface ResponseGetUser {
  client: {
      address: Address;
      avatar: string;
      birthDate: string;
      cpf: string;
      createDate: Date;
      email: string;
      firstName: string;
      id: number;
      isConfirmed: boolean;
      lastName: string;
      phone: string;
  }
};

interface Address {
  zipCode: string
  addressLine: string;
  addressLineNumber: string;
  neighborhood: string;
};