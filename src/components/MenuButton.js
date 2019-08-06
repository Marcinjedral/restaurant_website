import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import 'typeface-amatic-sc'

const ButtonMenu = styled.button `
background: transparent;
background-color: #480607;
margin: 0;
border:none;
position:relative;
height:60px;
padding:0 2em;
cursor:pointer;
transition:800ms ease all;
outline:none;
font-size: 2em;
font-family: 'Amatic SC';
font-weight: bold;
color: white;

&:hover{
  background:transparent;
  color:white;
}
&:before,&:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #480607;
  transition:400ms ease all;
}
&:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
&:hover:before,&:hover:after{
  width:100%;
  transition:800ms ease all;
}
`;

const StyledLink = styled(Link)`
color: white;
text-decoration: none;
`;

const MenuButton = () => (
    <ButtonMenu>
       <StyledLink to={'/menusite/'}>ZOBACZ MENU!</StyledLink>
    </ButtonMenu>
);

export default MenuButton;