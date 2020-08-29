import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerHeader = styled.div`
    margin-top: 62px;
    margin-left: 29px;
    margin-bottom: 12%;
`;

const Logo = styled.img`
    width: 200px;
    height: auto
`;

export default class Header extends Component {
    render() {
        return (
            <>
                <ContainerHeader className="header">
                    <Logo src="https://svgshare.com/i/P74.svg"></Logo>
                </ContainerHeader>
            </>
        )
    }
}
