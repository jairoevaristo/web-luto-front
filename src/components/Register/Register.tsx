import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../TextInput";
import Resizer from "react-image-file-resizer";
import { Profile } from "../Profile";

export const Register: React.FC = () => {
  const [avatar, setAvatar] = React.useState("");
  const navigate = useNavigate();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Resizer.imageFileResizer(
      file,
      150,
      150,
      "JPEG",
      100,
      0,
      (event) => setAvatar(event),
      "base64"
    );
  };

  const onClickSignInPage = () => {
    navigate("/login");
  };

  return (
    <form>
      <Tabs.Root className={styles.container} defaultValue="tab1">
        <Tabs.List className={styles.header} aria-label="Manage your account">
          <Tabs.Trigger className={styles.sections} value="tab1">
            Dados Pessoais
          </Tabs.Trigger>
          <Tabs.Trigger className={styles.sections} value="tab2">
            Endereço
          </Tabs.Trigger>
          <Tabs.Trigger className={styles.sections} value="tab3">
            Senha
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className={styles.content} value="tab1">
          <Profile avatar={avatar} onChange={handleImageUpload}/>
          <div className={styles.dateLine}>
            <TextInput id="name" name="name" type="text" label="Nome" required={true}/>
            <TextInput id="surname" name="surname" type="text" label="Sobrenome" required={true}/>
          </div>
          <div className={styles.dateLine}>
            <TextInput id="email" name="email" type="email" label="Email" required={true}/>
            <TextInput id="cpf" name="cpf" type="text" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" label="CPF" required={true}/>
          </div>
          <div className={styles.dateLine}>
            <TextInput id="dateOfBirth" name="dateOfBirth" type="date" label="Data de Nascimento" required={true}/>
            <TextInput id="tel" name="tel" type="tel" label="Telefone" required={true} placeholder="(XX) XXXXX.XXXXX"/>
          </div>
        </Tabs.Content>
        <Tabs.Content className={styles.content} value="tab2">
          <div className={styles.dateLine}>
            <TextInput id="cep" name="cep" pattern="\d{5}-\d{3}" type="text" label="CEP" required={true}/>
            <TextInput id="street" name="street" type="text" label="Rua" required={true}/>
          </div>
          <div className={styles.dateLine}>
            <TextInput id="neighborhood" name="neighborhood" type="text" label="Bairro" required={true}/>
            <TextInput id="number" name="number" type="number" label="Número" required={true}/>
          </div>
        </Tabs.Content>
        <Tabs.Content className={styles.content} value="tab3">
          <TextInput id="password" name="password" type="password" label="Senha" required={true}/>
          <TextInput id="passwordConfirmation" name="passwordConfirmation" type="password" label="Senha de Confirmação" required={true}/>
        </Tabs.Content>
        <div className={styles.description}>
          <p className={styles.text}>Já tem conta?</p>
          <p className={styles.link} onClick={onClickSignInPage}>Entre</p>
        </div>
      </Tabs.Root>
    </form>
  );
};