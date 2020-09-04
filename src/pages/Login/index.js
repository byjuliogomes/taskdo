import React, { useState } from "react";
import Header from "../../components/Header";
import Btn from "../../components/Btn";
import styled from "styled-components";
import Input from "../../components/Input";
import LogoBranco from "../../assets/Logo.svg";
import { FaUserAlt } from "react-icons/fa";
import { login } from "../../API/user";

const ContainerBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24% 8% 8% 8%;

  @media (min-width: 400px) {
    display: block;
    margin: 12% 4% 4% 4%;
  }
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

  @media (min-width: 400px) {
    margin: 4% 4% 4% 4%;
  }
`;

const ContainerInput = styled.div`
  margin: 24% 8% 8% 8%;

  @media (min-width: 800px) {
    margin: 4% 4% 4% 4%;
  }
`;

const Illustration = styled.img`
  margin: 10% 8% 8% 8%;
  width: 50%;
  height: auto;

  @media (min-width: 800px) {
    margin: 4% 4% 4% 4%;
  }
`;

const ContainerGeral = styled.div`
  display: block;
  margin: 2% 8% 0% 8%;

  @media (min-width: 400px) {
    display: flex;
    justify-content: space-between;
  }
`;

const ContainerLogin = styled.div`
  width: 50%;
`;

const IconUser = styled(FaUserAlt)`
  position: absolute;
  padding: 25px 0px 25px 12px;
  color: #75758b;
`;

const Index = ({ history, onEnterPressed }) => {
  const [email, setEmail] = useState("");
  const doLogin = async () => {
    try {
      if (!email /* validação de email */) {
        return alert("Email inválido");
      }
      const userData = await login(email);

      localStorage.setItem("userData", JSON.stringify(userData));

      history.push("/");
    } catch (e) {
      alert("Deu ruim " + e.message);
    }
  };

  return (
    <ContainerGeral>
      <ContainerLogin>
        <Header logo={LogoBranco}></Header>
        <ContainerText>
          <h2>Olá, que bom ver você por aqui</h2>
          <h1>Faça login</h1>
        </ContainerText>
        <ContainerInput>
          <IconUser></IconUser>
          <Input
            type="text"
            placeholder="seu@email.com"
            border={"#454545"}
            onChangeText={(text) => setEmail(text)}
            onEnterPressed={doLogin}
          ></Input>
        </ContainerInput>
        <ContainerBtns>
          <Btn color={"#28E07B"} onPress={doLogin}>
            Entrar
          </Btn>
          <Btn color={"#ffff"} onPress={() => history.push("/signup")}>
            Cadastrar
          </Btn>
        </ContainerBtns>
      </ContainerLogin>
      <Illustration src="https://svgshare.com/i/PFa.svg"></Illustration>
    </ContainerGeral>
  );
};

export default Index;
