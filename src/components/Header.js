import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return ( 
        <ContenedorHeader>
          <Titulo>Personal Blog</Titulo>
          <Menu>
            <NavLink to='/' exact={true}>Home</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/about'>About</NavLink>
          </Menu>
        </ContenedorHeader>
     );
}
 
const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom: 40px;
`;

const Titulo = styled.h1`
    margin-bottom: 20px;
    font-size: 26px;
    text-transform: uppercase;
`;

const Menu = styled.nav`
    a {
        text-decoration: none;
        color: #165168;
        margin: 0 10px; 
    }
    a:hover{
        color: #143a49;
    }
    a.active{
        border-bottom: 3px solid #165168;
        padding-bottom: 3px;
    }
`;

export default Header;