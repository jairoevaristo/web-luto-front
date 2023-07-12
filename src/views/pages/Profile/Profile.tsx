import React, { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { PageLoader } from "../../../components";
import { useGetUser } from "../../../hooks/useGetUser";
import * as Avatar from "@radix-ui/react-avatar";
import {
  ArrowSmallRightIcon,
  TrashIcon
} from "@heroicons/react/24/outline";

export const Profile: React.FC = () => {
  const { data, isLoading } = useGetUser();

  const nameInitials = (firstName: string | undefined, lastName: string | undefined) => {
    if (firstName && lastName) return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    else return "";
  }

  const userInitials: string = nameInitials(data?.entity.client.firstName, data?.entity.client.lastName);
  
  return (
    <PageLoader condition={!!isLoading && !!data}>
      <Header />
      <div className="bg-white px-16 py-12 rounded-2xl w-1/2 h-max flex flex-col items-center mt-[100px] mb-[10px] shadow-xl">
        <div className="w-full flex flex-row items-start">
          <h1 className="font-semibold text-black text-xl">Perfil:</h1>
        </div>
        <Avatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-[150px] h-[150px] rounded-full bg-white">
          <Avatar.Image
            src={data?.entity.client.avatar}
            alt="Perfil"
            className="w-full h-full object-cover rounded-[inherit]"
          />
          <Avatar.Fallback className="w-[150px] h-[150px] flex items-center justify-center bg-[#333] text-white text-[60px] leading-[1] font-[500]" delayMs={600}>
            {userInitials}
          </Avatar.Fallback>
        </Avatar.Root>
        <div className="mt-5 flex flex-col items-center">
          <span className="text-xl font-semibold">{data?.entity.client.firstName} {data?.entity.client.lastName}</span>
          <span className="text-lg">{data?.entity.client.email}</span>
        </div>
        <div className="w-full grid grid-cols-[1fr_1fr] gap-[10px] mt-7">
          <span className="text-lg"><strong className="font-semibold">CPF:</strong> {data?.entity.client.cpf}</span>
          <span className="text-lg"><strong className="font-semibold">Data de Nascimento:</strong> {data?.entity.client.birthDate}</span>
          <span className="text-lg"><strong className="font-semibold">Telefone:</strong> {data?.entity.client.phone}</span>
        </div>
        <div className="w-full flex flex-row items-start mt-7 opacity-80">
          <h1 className="font-semibold text-black text-xl flex flex-row items-center"><ArrowSmallRightIcon className="h-6 w-6 mr-2"/>Endereço:</h1>
        </div>
        <div className="w-full grid grid-cols-[1fr_1fr] gap-[10px] mt-5">
          <span className="text-lg"><strong className="font-semibold">CEP:</strong> {data?.entity.client.adress.zipCode}</span>
          <span className="text-lg"><strong className="font-semibold">Rua:</strong> {data?.entity.client.adress.addressLine}</span>
          <span className="text-lg"><strong className="font-semibold">Número:</strong> {data?.entity.client.adress.addressLineNumber}</span>
          <span className="text-lg"><strong className="font-semibold">Bairro:</strong> {data?.entity.client.adress.neighborhood}</span>
        </div>
        <button
          className="w-[250px] flex justify-center p-2 bg-[#333] rounded-[4px] mt-10 text-white hover:opacity-75"
        >
          <TrashIcon className="h-6 w-6 mr-2"/>Apagar
        </button>
      </div>
    </PageLoader>
  );
};
