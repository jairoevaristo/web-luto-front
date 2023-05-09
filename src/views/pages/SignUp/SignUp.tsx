import React from "react";

import LogoImg from "../../../assets/icon/LogoIcon.svg";

import { RenderConditional } from "../../../components";

import {
  SidebarSteps,
  Name,
  Identification,
  Address,
  Security,
  FinishedSignUp,
} from "../../../components/MultiStepForm";

import { useFormStep } from "../../../hooks/useFormStep";

export const SignUp: React.FC = () => {
  const { currentStep } = useFormStep();

  return (
    <div className="bg-white w-full h-screen">
      <div className="w-full h-screen flex flex-col mx-auto max-w-7xl">
        <div className="p-4 my-6">
          <div className="flex items-center">
            <img src={LogoImg} alt="Image da logo" />
            <h1 className="text-3xl text-gray-400">Crie sua conta agora</h1>
          </div>
          <span className="text-lg text-gray-500">
            Siga as etapas para criar sua conta com sucesso.
          </span>
        </div>

        <div className="flex items-center gap-24">
          <SidebarSteps currentStep={currentStep} />

          <div className="flex flex-1 h-[50vh]">
            <div className="w-full mt-6">
              <RenderConditional condition={currentStep === 0}>
                <Name />
              </RenderConditional>

              <RenderConditional condition={currentStep === 1}>
                <Identification />
              </RenderConditional>

              <RenderConditional condition={currentStep === 2}>
                <Address />
              </RenderConditional>

              <RenderConditional condition={currentStep === 3}>
                <Security />
              </RenderConditional>

              <RenderConditional condition={currentStep === 4}>
                <FinishedSignUp />
              </RenderConditional>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
