import styled from "styled-components";
import error from '../../images/svg-icons/error.svg';
import correct from '../../images/svg-icons/correct.svg';
import eye from '../../images/svg-icons/eye.svg';
import eye_off from '../../images/svg-icons/eye-off.svg';


export const StyledLogin = styled.div`
    width: 100%;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media only screen and (min-width: 1440px) {
        align-items: normal;
        padding-left: 150px;
    }

    .TitleContainer{
        @media only screen and (min-width: 1440px) {
           max-width: 600px;
        } 
    }

    .singup-title{
        font-size: 34px;
        font-weight: 600;
        line-height: 40px;
        text-align: center;

        @media only screen and (min-width: 834px) {
            font-size: 36px;
            line-height: 46px;
        }

        @media only screen and (min-width: 1440px) {
            font-size: 40px;
            line-height: 50px;
        }
    }

    .title-text{
        color: ${props => props.theme.color.primary_grey};
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        margin-top: 20px;
        text-align: center;
        margin-bottom: 20px;

        @media only screen and (min-width: 834px) {
            font-size: 22px;
            line-height: 32px;
        }
        @media only screen and (min-width: 1440px) {
            font-size: 28px;
            line-height: 40px;
        }
    }

    .register-form{
        width: 100%;
        max-width: 500px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0);
        backdrop-filter: blur(5px); 
        box-shadow: 0px 0px 5px 5px rgba(255,255,255,0.5);
        margin-bottom: 60px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding: 20px;

        @media screen and (min-width: 834px){
            max-width: 600px;
            padding: 30px;
        }
        @media screen and (min-width: 1440px){
            max-width: 600px;
            padding: 40px;
        }
    }


    .DivInput {
        position: relative;
    }

    input {
        position: relative;
        width: 100%;
        padding: 8px 10px;
        border-radius: 12px;
        border: 1px solid ${props => props.theme.color.primary_green_lite};
        background: ${props => props.theme.color.primary_black_2};
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: ${props => props.theme.color.primary_white};
        &:focus {
        outline: none;
        box-shadow: none;
        }
    }

    .ErrorInput {
        border: 1px solid #e74a3b;
    }

    .SuccessInput {
        border: 1px solid #3cbc81;
    }

    .ImgError {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        background-image: url(${error});
    }

    .ImgCorrect {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        background-image: url(${correct});
    }

    .ErrorText {
        position: absolute;
        margin-top: 4px;
        margin-left: 10px;
        color: #e74a3b;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;

        @media only screen and (min-width: 1440px) {
        max-width: 200px;
        }
    }

    .SuccessText {
        position: absolute;
        margin-top: 4px;
        margin-left: 10px;
        color: #3cbc81;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;

        @media only screen and (min-width: 1440px) {
        max-width: 200px;
        }
    }

    .DivInput:hover .ShowPassword,
    .DivInput:hover .HidePassword {
        display: block;
    }

    .DivInput:hover input[name='password'] {
        border: 1px solid ${props => props.theme.color.primary_green_lite};
    }

    .DivInput[id='password']:hover .ImgError,
    .DivInput[id='password']:hover .ImgCorrect,
    .DivInput[id='password']:hover .ErrorText,
    .DivInput[id='password']:hover .SuccessText {
        display: none;
    }

    .ShowPassword {
        display: none;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        background-image: url(${eye_off});
    }

    .HidePassword {
        display: none;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        background-image: url(${eye});
    }

    input::placeholder {
        color: ${props => props.theme.color.primary_grey};
    }

    .ButtonNext {
        margin-top: 8px;
        border-radius: 12px;
        color: ${props => props.theme.color.primary_black_2};
        background: ${props => props.theme.color.primary_green_lite};
        padding: 8px 10px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        cursor: pointer;
        transition: color ${p => p.theme.transition.main_transition};

        &:active,
        &:hover {
        color: ${props => props.theme.color.primary_grey};
        }

        &:disabled {
        color: ${(props) => props.theme.color.primary_grey};
        pointer-events: none;
        }
    }

    .DivContainerSingIn {
        margin-top: 48px;

        @media only screen and (min-width: 834px) {
            display: flex;
            align-items: baseline;
            gap: 16px;
        }
    }

    .SingInText {
        color: ${props => props.theme.color.primary_grey};
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;

        @media only screen and (min-width: 834px) {
            font-size: 22px;
            line-height: 32px;
        }
        @media only screen and (min-width: 1440px) {
            font-size: 28px;
            line-height: 40px;
        }
    }

    .LinkToSingIn {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        margin-top: 16px;
        transition: color ${p => p.theme.transition.main_transition};

        &:active,
        &:hover {
            color: ${props => props.theme.color.primary_green_lite};
        }

        @media only screen and (min-width: 834px) {
            font-size: 22px;
            line-height: 32px;
        }
        @media only screen and (min-width: 1440px) {
            font-size: 28px;
            line-height: 40px;
        }
    }
`