import React from 'react'
import styled from 'styled-components'
import { FaDoorOpen } from "react-icons/fa";

const ContainerBtn = styled.button`
    width: 60px;
    height: 35px;
    background-color: #f9f9f9;
    color: var(--grey);
    font-size: 10pt;
    display: ${(props) => (props.on ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    border: 0.5px solid #EFEFEF;

`;

const IconDoor = styled(FaDoorOpen)`
    margin-right: 8px;
`;
const BtnHeader = ({ onPress, on }) => {
    return (
        <>
            <ContainerBtn on={on} onClick={onPress}><IconDoor />Sair</ContainerBtn>
        </>
    )
}

export default BtnHeader;
