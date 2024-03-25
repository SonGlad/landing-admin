import styled from "styled-components";
import error from '../../../images/svg-icons/error.svg';
import correct from '../../../images/svg-icons/correct.svg';
import eye from '../../../images/svg-icons/eye.svg';
import eye_off from '../../../images/svg-icons/eye-off.svg';


export const SettingsModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 500px;
    height: auto;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 40px;
    border-radius: 12px;
    background: ${(props) => props.theme.color.primary_black_2};
    position: relative;

    @media only screen and (min-width: 834px) {
        padding: 25px;
    }

    .close-btn{
        position: absolute;
        z-index: 20;
        top: 10px;
        right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        background-color: ${p => p.theme.color.primary_white};
        border-radius: 50%;
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset,
                    0px 0px 0px 0px rgba(0,0,0,0.3);
        transition: transform ${p => p.theme.transition.main_transition},
        box-shadow ${p => p.theme.transition.main_transition};

        &:hover, 
        &:focus{
            transform: rotate(90deg);
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 10px 10px rgba(0,0,0,0.3);
        }

        @media screen and (min-width: 1440px){
            top: 15px;
            right: 15px;
        }
    }

    .close-icon{
        width: 12px;
        height: 12px;
        fill: ${p => p.theme.color.primary_black};
        transition: all ${p => p.theme.transition.main_transition};
    }

    .close-btn .close-icon:hover,
    .close-btn .close-icon:focus{
        fill: ${p => p.theme.color.secondary_color_grey_1};
    }

    .form-title{
        text-align: center;
        margin-top: 17px;
        color: ${p => p.theme.color.primary_white};
        font-weight: 500;
        font-size: 30px;
        line-height: 1.2;
        margin-bottom: 20px;
    }

    .settings-form{
        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 32px;
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

        &[type="file"] {
            visibility: hidden;
            pointer-events: none;
            display: none;
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
    .DivInput:hover .HidePassword,
    .DivInput:hover .ShowPasswordNew,
    .DivInput:hover .HidePasswordNew {
        display: block;
    }


    .DivInput:hover input[name='currentPassword'],
    .DivInput:hover input[name='newPassword'] {
        border: 1px solid ${props => props.theme.color.primary_green_lite};
    }

    .DivInput[id='currentPassword']:hover .ImgError,
    .DivInput[id='currentPassword']:hover .ImgCorrect,
    .DivInput[id='currentPassword']:hover .ErrorText,
    .DivInput[id='currentPassword']:hover .SuccessText,
    .DivInput[id='newPassword']:hover .ImgError,
    .DivInput[id='newPassword']:hover .ImgCorrect,
    .DivInput[id='newPassword']:hover .ErrorText,
    .DivInput[id='newPassword']:hover .SuccessText {
        display: none;
    }

    .ShowPassword,
    .ShowPasswordNew {
        display: none;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        background-image: url(${eye_off});
    }

    .HidePassword,
    .HidePasswordNew {
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


    .FileContainer {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 12px;
    }

    .Thumb {
        height: 36px;
        width: 36px;
        border-radius: 50%;
        margin-right: 12px;
        overflow: hidden;
    }

    .AvaImg {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .DownloadPhoto {
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        display: flex;
        align-items: center;
        gap: 6px;

        & > .download-svg {
            width: 16px;
            height: 16px;
            stroke:  ${(props) => props.theme.color.primary_green_lite};
        }
    }

    .label-for-avatar{
        cursor: pointer;
        max-width: 215px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color ${p => p.theme.transition.main_transition},
                    stroke ${p => p.theme.transition.main_transition};
    }

    .label-for-avatar:hover .DownloadPhoto,
    .label-for-avatar:focus .DownloadPhoto{
        color: ${(props) => props.theme.color.primary_green_lite};
    }

    .label-for-avatar:hover .DownloadPhoto > .download-svg,
    .label-for-avatar:focus .DownloadPhoto > .download-svg {
        stroke: ${(props) => props.theme.color.primary_white};
    }


    .ButtonContainer {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 20px;
        margin-top: 20px;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 834px) {
            flex-direction: row;
        }
    }

    .SaveButton {
        color: ${(props) => props.theme.color.primary_black};
        background-color: ${(p) => p.theme.color.primary_green_lite};
        font-family: Poppins;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        width: 50%;
        border: 1px solid ${(p) => p.theme.color.primary_green_lite};
        border-radius: 12px;
        padding: 8px;
        cursor: pointer;
        transition: color ${p => p.theme.transition.main_transition};

        &:hover {
            color: ${(props) => props.theme.color.primary_grey};
        }

        &:disabled {
            color: ${(props) => props.theme.color.primary_grey};
            pointer-events: none;
        }

        @media screen and (max-width: 834px) {
            max-width: 45%;
        }
    }

    .CancelButton {
        background-color: ${(props) => props.theme.color.primary_black_2};
        color: ${(props) => props.theme.color.primary_grey};
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        width: 50%;
        padding: 8px 12px;
        border: 1px solid transparent;
        border-radius: 12px;
        cursor: pointer;
        transition: color ${p => p.theme.transition.main_transition};

        &:hover {
            color: ${(props) => props.theme.color.primary_green_lite};
        }

        @media screen and (min-width: 834px) {
            max-width: 45%;
        }
    }
`