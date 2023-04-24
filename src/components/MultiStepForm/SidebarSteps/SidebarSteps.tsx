import React from "react";
import {
  CheckCircleIcon,
  HomeIcon,
  IdentificationIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const steps = [
  {
    id: "1",
    title: "Quem é você?",
    description: "Informe seu nome",
    icon: <UserIcon className="h-6 w-6" />,
  },
  {
    id: "2",
    title: "Nos Fale mais",
    description: "Dados cadastrais",
    icon: <IdentificationIcon className="h-6 w-6" />,
  },
  {
    id: "3",
    title: "Onde te encontramos?",
    description: "Dados de endereço",
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    id: "4",
    title: "Crie sua segurança",
    description: "Senha para entrar",
    icon: <LockClosedIcon className="h-6 w-6" />,
  },
];

interface SidebarStepsPrips {
  currentStep: number;
}

export const SidebarSteps: React.FC<SidebarStepsPrips> = ({ currentStep }) => {
  const activated = currentStep;

  return (
    <div className="flex flex-col justify-start mt-10">
      <div className="flex flex-col justify-center gap-14 h-[50vh] w-80 border-1 border-gray-300 border-r relative">
        {steps.map((item, index) => {
          return (
            <div className="flex items-center" key={item.id}>
              <div className="flex flex-col">
                <span className="text-xl">{item.title}</span>
                <span className="text-md text-gray-500">
                  {item.description}
                </span>
              </div>
              <div
                className={`absolute -right-6 w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 border-2 border-gray-200 ${
                  activated >= index + 1 && "!bg-emerald-400 !border-0"
                } ${
                  activated === index &&
                  "!bg-white scale-125 transition-transform duration-500"
                }`}
              >
                {activated >= index + 1 ? (
                  <CheckCircleIcon className="text-white h-12 w-12" />
                ) : (
                  item.icon
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
