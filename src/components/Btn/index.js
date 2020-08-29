import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerBtn = styled.button`
    width: 120px;
    height: 66px;
    background-color: var(--green);
    color: var(--grey);
    font-size: 16pt;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

`;

export default class Btn extends Component {
    render() {
        return (
            <>
                <ContainerBtn>{this.props.children}</ContainerBtn>
            </>
        )
    }
}
