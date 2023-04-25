<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify'

import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import logoImg from "../../../assets/icon/LogoIcon.svg";

import { ControlledInput } from "../../../components/ControlledTextInput/ControlledTextInput";

import { signinSchemaValidator } from "../../validations/signin-validation";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { LoginUserRequest } from "../../../services/login-user";
import { RenderConditional } from "../../../components";
import { SpinnerLoading } from "../../../components/SpinnerLoading/SpinnerLoading";

export const SignIn: React.FC = () => {
  const { handleSubmit, control, setValue } = useForm({
    resolver: yupResolver(signinSchemaValidator),
  });

  const [userLoginData, setUserLoginData] = useState<LoginUserRequest>({} as LoginUserRequest)
  const [showPassword, setShowPassword] = useState(false);
  
  const { data, refetch, isLoading, isError } = useLoginUser(userLoginData);

  const handleShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  const onSubmit = (data: any) => {
    setUserLoginData(data);
  };

  useEffect(() => {
    if (userLoginData.email && userLoginData.password) {
      refetch();
    }
  }, [userLoginData])

  useEffect(() => {
    if (isError) {
      setValue('email', '');
      setValue('password', '');

      setUserLoginData({
        email: '',
        password: ''
      });
    }
  }, [isError]);

  return (
    <div className="bg-slate-100 w-full h-screen flex justify-center items-center">
      <div className="bg-white w-[34vw] h-[70vh] rounded-lg shadow-xl p-5">
        <div className="flex flex-col items-start px-8 py-4">
          <img src={logoImg} />
          <div className="font-normal mt-5">
            <h1 className="font-semibold text-3xl">Bem vindo</h1>
            <span className="font-light text-xl mt-3">
              Faca o seu login agora
            </span>
          </div>
        </div>

        <form
          className="w-full px-8 mt-6 flex flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <ControlledInput
            label="E-mail"
            autoFocus
            name="email"
            placeholder="Digite seu e-mail"
            control={control}
            leftIcon={<EnvelopeIcon className="text-[#333] w-5 h-5" />}
          />
          <ControlledInput
            label="Senha"
            name="password"
            placeholder="Digite sua senha"
            type={showPassword ? "text" : "password"}
            control={control}
            leftIcon={<LockClosedIcon className="text-[#333] w-5 h-5" />}
            rightIcon={
              !showPassword ? (
                <EyeIcon className="text-[#333] w-5 h-5" />
              ) : (
                <EyeSlashIcon className="text-[#333] w-5 h-5" />
              )
            }
            onClickRightIcon={handleShowPassword}
          />

          <button className="bg-[#333] p-4 text-white rounded-[4px] hover:opacity-90 transition-opacity mt-2 flex items-center justify-center gap-2">
            Fazer login
            <RenderConditional condition={isLoading}>
              <SpinnerLoading size="SMALL" />
            </RenderConditional>
          </button>

          <div className="text-center font-light">
            <span className="text-md">Não tem conta ainda? </span>
            <strong className="font-semibold hover:underline hover:cursor-pointer">
              <Link to="/cadastro">Crie uma agora</Link>
            </strong>
          </div>
        </form>
      </div>
    </div>
  );
};
=======
import React from "react";
import styles from "./SignIn.module.css";
import { Acess } from "../../../components";

export const SignIn: React.FC = () => {

  return (
    <div className={styles.container}>
      <Acess/>
    </div>
  );
};
>>>>>>> 78e0cbc (feat: Subindo tela de login e cadastro)
