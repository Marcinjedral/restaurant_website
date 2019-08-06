import React from "react"
import styled from 'styled-components'
import 'typeface-amatic-sc'

import DinnerMenu from '../images/menu1.png'
import DrinkMenu from '../images/menu2.png'


const IntroductionStyled = styled.h1`
display: flex;
margin: 10vh 0 3vh 0;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 35px;
font-family: 'Amatic sc';
`;

const H2 = styled.h2`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 20px;
font-family: 'Amatic sc';
`;

const FrameDivStyled = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding:5vh;
width: 95vw;
height: 100vh;
background-color: white;
border: 5px #480607;
border-style: none none none none;
`;


const DinnerStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding:-20vh 5vw;
width: 50%;
height: 100vh;
background: url(${DinnerMenu}) no-repeat center center;
background-size: 900px 1100px;
opacity: 1;
`;

const DrinkStyled = styled.div`
display: flex;
justify-content: center;
text-align: center;
padding:-20vh 5vw;
width: 50%;
height: 100vh;
background: url(${DrinkMenu}) no-repeat center center;
background-size: 900px 1100px;
opacity: 1;
`;



const Indroduction = () => (
    <>
    <IntroductionStyled>Nasze menu oferuje wszystko to, co najwspanialsze w polskiej tradycji kulinarnej</IntroductionStyled>
    <H2>Przywołujemy najlepsze kulinarne wspomnienia przywiezione z najpiękniejszych zakątków Południa. W naszej kuchni można znaleźć tylko oryginalne i wysokiej jakości składniki. Poniżej znajduję się nasze menu, gdzie każdy powinien znaleźć coś dla siebie.</H2>
    <FrameDivStyled >
    <DinnerStyled/>
    <DrinkStyled/>
    </FrameDivStyled>
    </>
)
export default Indroduction;