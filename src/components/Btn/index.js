import React from 'react'
import styled from 'styled-components'

const ContainerBtn = styled.button`
    width: 120px;
    height: 66px;
    background-color: ${(props) => (props.color)};
    color: var(--grey);
    font-size: 16pt;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    @media (min-width: 400px) {
    width: 260px;
    margin: 30px 0 30px 0;
  }

`;

const Btn = ({ onPress, children, color}) => {
        return (
            <>
                <ContainerBtn color={color} onClick={onPress}>{children}</ContainerBtn>
            </>
        )
    }

export default Btn
