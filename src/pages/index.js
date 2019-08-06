import React from "react"
import styled, {createGlobalStyle} from 'styled-components'
import Header from '../components/Header'
import MenuButton from '../components/MenuButton'
import Logo from '../components/Logo.js'
import Navigation from '../components/Navigation'

import backgroundImage from '../images/polish-food-bigos.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

`;

const StyledWelcomePage = styled.div`
display: flex;
flex-direction: column;
justify-content: right;
align-items: flex-end;
padding:50vh 5vw;
width: 100%;
height: 100vh;
background: url(${backgroundImage}) no-repeat center center fixed;
background-size: cover;
`;


const IndexPage = () => (
  <>
  <GlobalStyle/>
   <Logo/>
   
    <StyledWelcomePage>
      <Header>PRAWDZIWY POLSKI SMAK!</Header>
      <MenuButton/>
      <Navigation/>
    </StyledWelcomePage>
  </>
)

export default IndexPage;
