import styled from 'styled-components'

import LogoImage from '../images/kolorowa (1).png'

const Logo = styled.img `
position: fixed;
top: 5vh;
left: 5vh;
width: 14%;
height: 10%;
margin: 0;
padding: 0;
background: url(${LogoImage}) no-repeat center center fixed;
border: none;
background-position: -1% -33% ;
content:url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
border-style: none;
color: black;
`;

export default Logo;