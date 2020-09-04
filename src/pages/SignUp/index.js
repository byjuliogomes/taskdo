import React, { useState } from "react";
import Header from "../../components/Header";
import Btn from "../../components/Btn";
import styled from "styled-components";
import Input from "../../components/Input";
import LogoBranco from "../../assets/Logo2.svg";
import { signUp } from "../../API/user";

const ContainerBtns = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24% 8% 8% 8%;
`;

const ContainerText = styled.div`
  margin: 8% 8% 8% 8%;

  h1 {
    font-size: 24pt;
    margin-top: 0px;
  }

  h2 {
    font-size: 12pt;
    margin-bottom: 0px;
  }
`;

const ContainerLogin = styled.div``;

const ContainerSignUp = styled.div`
  background-color: var(--green);
  height: 100%;
`;

const Index = ({ history }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const register = async () => {
    try {
      await signUp({ email, fullName });
      alert("Cadastrado com Sucesso");
      history.goBack();
    } catch (e) {
      alert("Algo deu Errado" + e.message);
    }
  };
  return (
    <ContainerSignUp>
      <Header logo={LogoBranco}></Header>
      <ContainerText>
        <h1>Se cadastre</h1>
      </ContainerText>
      <ContainerLogin>
        <Input
          margin={true}
          border={"#ffff"}
          placeholder="Nome completo"
          color={"#28E07B"}
          onChangeText={(text) => setFullName(text)}
        ></Input>
        <Input
          margin={false}
          border={"#ffff"}
          placeholder="email@email.com"
          color={"#28E07B"}
          onChangeText={(text) => setEmail(text)}
        ></Input>
      </ContainerLogin>
      <ContainerBtns>
        <Btn color={"#ffff"} onPress={() => history.goBack()}>
          Voltar
        </Btn>
        <Btn
          color={"#ffff"}
          onPress={() => history.push("/")}
          onPress={register}
        >
          Cadastrar
        </Btn>
      </ContainerBtns>
    </ContainerSignUp>
  );
};

export default Index;
