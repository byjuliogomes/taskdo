import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
`


const InputBox = styled.input`
    width: 260px;
    height: 60px;
    border-bottom: 5px solid var(--grey);
    background-color: var(#ffff);
    outline: 0;
    border-width: 0 0 2px;
  
  :focus {
      border-bottom: 5px solid var(--green);
  }
`;

const Input = ({ placeholder, onChangeText }) => {
        return (
            <>
            <ContainerInput>
                    <InputBox type="text" placeholder={placeholder} onChange={(event) => onChangeText(event.target.value)}></InputBox>
                </ContainerInput>
            </>
        )
    }

export default Input;