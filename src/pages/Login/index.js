import React, { Component } from 'react'
import Header from '../../components/Header'
import Btn from '../../components/Btn'
import styled from 'styled-components'
import Input from '../../components/Input';

const ContainerBtns = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 24% 8% 8% 8%;
`;

const ContainerText = styled.div`
    margin: 8% 8% 8% 8%;

    h1{
        font-size: 24pt;
        margin-top: 0px;
    }

    h2{
        font-size: 12pt;
        margin-bottom: 0px;
    }
`;


const ContainerLogin = styled.div`

`;
 
const Index = ({history}) => {
        return (
            <div>
                <Header></Header>
                <ContainerText>
                    <h2>Olá, que bom ver você por aqui</h2>
                    <h1>Faça login</h1>
                </ContainerText>
                <ContainerLogin>
                    <Input type="text" placeholder="seu@email.com" onChangeText={(text) => console.log("Texto", text)}></Input>
                </ContainerLogin>
                <ContainerBtns>
                    <Btn onClick={()=> history.push("/login")}>Cadastrar</Btn>
                    <Btn onClick={() => history.push("/login")}>Entrar</Btn>
                </ContainerBtns>
            </div>
        )
}

export default Index;
