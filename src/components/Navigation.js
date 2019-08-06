import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import SlideBar from '../components/SlideBar'

const NavigationStyled = styled.ul `
position: fixed;
top: 4vh;
left: 45vh;
list-style: none;
font-size: 0.5em;
font-family: 'Amatic SC';
color: white;
font-weight: 800;
display: flex;
`;

const NavigationItem = styled.li `
margin-left: 20vh;
font-size: 8em;
font-family: 'Amatic SC';
color: white;
`;

const LinkMenu = styled(Link)`
color: white;
text-decoration: none;

&::before  {
  content: "";
  position: absolute;
  text-align: center;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  transform-origin: 26.5%;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

&:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(0.4);
  transform: scaleX(0.12);
  transform-origin: 26.5%;
}
`;

const LinkAbout = styled(Link)`
color: white;
text-decoration: none;

&::before  {
  content: "";
  position: absolute;
  text-align: center;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  transform-origin: 61%;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

&:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(0.4);
  transform: scaleX(0.12);
  transform-origin: 61%;
}
`;

const LinkContact = styled(Link)`
color: white;
text-decoration: none;

&::before  {
  content: "";
  position: absolute;
  text-align: center;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  transform-origin: 101%;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

&:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(0.4);
  transform: scaleX(0.17);
  transform-origin: 101%;
}
`;

const Navigation = () => (
    <NavigationStyled>
       <NavigationItem><LinkMenu to={'/menusite'}>Menu</LinkMenu></NavigationItem>
       <NavigationItem><LinkAbout to={'/about'}>O nas</LinkAbout></NavigationItem>
       <NavigationItem><LinkContact to={'/contact'}>Kontakt</LinkContact></NavigationItem>
    </NavigationStyled>
);

export default Navigation;