import React from "react"
import styled, {createGlobalStyle} from 'styled-components'
import 'typeface-amatic-sc';
import 'typeface-montserrat';

import AboutImage from '../images/Chef-Christian-Le-Squer-Brigade-Le-Cinq-BD.jpg'
import FbIconImage from '../images/facebook-logo.png'
import GoogleIconImage from '../images/google-plus-logo.png'
import TwitterIconImage from '../images/twitter.png'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

`;

const AboutStyled = styled.div`
display: flex;
justify-content: center;
margin: 25vh;
word-wrap: break-word;
font-family: 'Amatic sc';
`;

const ImageAboutStyled = styled.image`
display: flex;
width: 55vw;
height: 55vh;
background: url(${AboutImage}) no-repeat center center;
background-size: contain;
`;


const DescriptionStyled = styled.span`
display: flex;
font-size: 35px;
font-weight: bold;
padding: 5vh;
word-wrap: break-word;
font-family: 'Amatic sc';
`;

const FormSectionStyled = styled.div`
display: flex;
width: 100%;
height: 100vh;
background-color: #480607;
opacity: 0.7;
`;

const FormStyled = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
margin: auto auto;
background-color: transparent;
`;

const InputNameStyled = styled.input`
display: flex;
padding: 10px;
width: 500px;
margin: 20px;
font-size: 20px;
font-family: 'montserrat';
font-weight: bold;
background-color: transparent;
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-border-radius: 30px;
border-radius: 30px;
border: 3px solid black;
`;

const InputMailStyled = styled.input`
display: flex;
padding: 10px;
margin: 20px;
font-size: 20px;
font-family: 'montserrat';
font-weight: bold;
background-color: transparent;
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-border-radius: 30px;
border-radius: 30px;
border: 3px solid black;
`;

const TextAreaStyled = styled.textarea`
display: flex;
margin: 20px;
height: 250px;
font-size: 20px;
font-family: 'montserrat';
font-weight: bold;
background-color: transparent;
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-border-radius: 30px;
border-radius: 30px;
border: 3px solid black;
`;

const FormButtonStyled = styled.button`
display: flex;
margin: 20px;
padding: 15px;
font-size: 20px;
width: 300px;
justify-content: center;
margin: 75px auto;
align-items: center;
font-weight: normal;
font-family: 'montserrat';
background-color: black;
color: white;
border: 0;
-webkit-border-radius: 30px;
border-radius: 30px;
-webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
`;

const SocialMediaIcons = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0;
padding: 0 50px;
width: 99%;
height: 9vh;
background-color: transparent;
`;

const FbIcon = styled.a`
display: flex;
justify-content: center;
align-items: center;
width: 25%;
height: 100%;
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
-webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
background: url(${FbIconImage}) no-repeat center center;
background-color: grey;

&:hover {
  transform: scale(1.1);
  background-color: #3b5998;
}
`;

const InstaIcon = styled.a`
display: flex;
justify-content: center;
align-items: center;
width: 25%;
height: 100%;
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
-webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
background: url(${GoogleIconImage}) no-repeat center center;
background-color: grey;

&:hover {
  transform: scale(1.1);
  background-color: #dc4a38;
}
`;

const GoogleIcon = styled.a`
display: flex;
justify-content: center;
align-items: center;
width: 25%;
height: 100%;
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
-webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
background: url(${TwitterIconImage}) no-repeat center center;
background-color: grey;

&:hover {
  transform: scale(1.1);
  background-color: #3cf;
}
`;





const About = () => (
    <>
    <AboutStyled>
    <DescriptionStyled>Bar Kolorowa od 20 lat dostarcza naszym klientom <br/> najlepsze polskie dania.  Zaczynając chociażby od tradycyjnego <br/> kotleta schabowego, kończąc na przepysznych pierogach z <br/> różnego rodzaju nadzieniem. Oprócz obiadów oferujemy <br/> również wspaniałe desery wypiekane na miejscu przez <br/> naszych najlepszych kucharzy, a podczas czekania na <br/> zamówienie umożliwiamy poczytanie najnowszej prasy. <br/> Serdecznie zapraszamy!</DescriptionStyled>
    <ImageAboutStyled/>
    </AboutStyled>
    <FormSectionStyled>
    <GlobalStyle/>
    <FormStyled>
      <InputNameStyled name="name" placeholder="Wpisz swoje imie" type="text"/>
      <InputMailStyled name="email" placeholder="Wpisz swój adres e-mail" type="text"/>
      <TextAreaStyled name="message"/>
      <FormButtonStyled>Wyslij wiadomosc!</FormButtonStyled>
      <SocialMediaIcons><FbIcon/><InstaIcon/><GoogleIcon/></SocialMediaIcons>
    </FormStyled>
    </FormSectionStyled>
    </>
)
export default About;