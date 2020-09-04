import React from 'react'
import styled from 'styled-components'
import BtnHeader from '../BtnHeader';

const ContainerHeader = styled.div`
    padding-top: ${(props) => (props.on ? "20px" : "62px")};
    margin-left: 29px;
    margin-right: 29px;
    margin-bottom: 12%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 600px) {
    margin-bottom: 0;
    padding-top: ${(props) => (props.on ? "10px" : "32px")}
  }
`;

const Logo = styled.img`
    width: ${(props) => (props.on ? "100px" : "200px")};
    height: auto;
    
`;

const Header = ({logo, on, history}) => {
        return (
            <>
                <ContainerHeader on={on}>
                    <Logo on={on} src={logo}></Logo>
                    <BtnHeader on={on} onPress={() => history.push("/login")}></BtnHeader>
                </ContainerHeader>
            </>
        )
    }

export default Header;
