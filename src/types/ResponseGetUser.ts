export interface ResponseGetUser {
  client: {
      adress: Adress;
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

interface Adress {
  zipCode: string
  addressLine: string;
  addressLineNumber: string;
  neighborhood: string;
};