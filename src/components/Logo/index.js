import React from 'react'
import styled from 'styled-components'


const Logo = styled.img`
    width: 200px;
    height: auto
`;

const Header = (props) => {
    return (
        <>
                <Logo src={props.src} />
        </>
    )
}

export default Header;