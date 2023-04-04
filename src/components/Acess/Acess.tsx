import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import styles from "./Acess.module.css";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../TextInput";

export const Acess: React.FC = () => {
  const navigate = useNavigate();

  const onClickSignUpPage = () => {
    navigate("/cadastro");
  };

  return (
    <Tabs.Root className={styles.container} defaultValue="tab1">
      <Tabs.List className={styles.header} aria-label="Manage your account">
        <Tabs.Trigger className={styles.sections} value="tab1">
          Email
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.sections} value="tab2">
          Senha
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className={styles.content} value="tab1">
        <p className={styles.text}>Insira seu email.</p>
        <TextInput id="email" name="email" label="Email" type="email" required={true}/>
      </Tabs.Content>
      <Tabs.Content className={styles.content} value="tab2">
        <p className={styles.text}>Insira sua senha.</p>
        <TextInput id="password" name="password" label="Senha" type="password" required={true}/>
      </Tabs.Content>
      <div className={styles.description}>
        <p className={styles.text}>Não tem conta?</p>
        <p className={styles.link} onClick={onClickSignUpPage}>Cadastra-se</p>
      </div>
    </Tabs.Root>
  );
};