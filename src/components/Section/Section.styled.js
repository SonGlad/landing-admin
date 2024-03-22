import { styled } from "styled-components";
import BackGroundWelcome from "../../images/images/welcome.jpg"
import BackGroundLogin from "../../images/images/login.jpg";
import BackGroundRegister from "../../images/images/register.jpg"


export const SectionStyle = styled.section`
	/* min-height: 100vh;
    display: flex;
    align-items: center;
	flex-direction: column;
    font-size: 40px;
	font-family: 'Open Sans', sans-serif;
    color: #fff; */
`

export const WelcomeSectionStyled = styled.section`
    background-image: url(${BackGroundWelcome});
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    height: 100dvh;
    width: 100%;
    margin-top: -56px;

    @media screen and (min-width: 834px){
        margin-top: -76px;
    }
    @media screen and (min-width: 1440px){
        margin-top: -81px;
    }
`

export const RegisterSectionStyled = styled.section`
    background-image: url(${BackGroundRegister}), linear-gradient(180deg, #081047, #201193);
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
`

export const LoginSectionStyled = styled.section`
    background-image: url(${BackGroundLogin}), linear-gradient(180deg, #081047, #201193);
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
`