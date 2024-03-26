import styled from "styled-components";
import error from '../../../images/svg-icons/error.svg';
import correct from '../../../images/svg-icons/correct.svg';


export const StyledCreateContactModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 700px;
    height: auto;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 40px;
    border-radius: 12px;
    background: ${(props) => props.theme.color.primary_black_2};
    position: relative;

    @media only screen and (min-width: 834px) {
        padding-top: 5px;
        padding-bottom: 10px;
    }

    .close-btn{
        position: absolute;
        z-index: 20;
        top: 15px;
        right: 15px;
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
        margin-bottom: 10px;
    }

    .create-contact-form{
        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .form-label{
        display: block;
        width: 100%;
        max-width: 450px;
        margin: 0 auto;
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

    .form-field{
        display: block;
        width: 100%;
        height: 38px;
        border-radius: 12px;
        padding: 5px;
        border: 1px solid ${props => props.theme.color.primary_green_lite};
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        padding-left: 50px;
        background-color: transparent;
    }

    .dropdown-cont{
        height: 40px;
        outline: none;
        border: none;
        border-radius: 30px;
        background-color: transparent;
        margin-left: 5px;
        top: 50%;
        transform: translateY(-50%);

        &:hover,
        &:focus,
        &:active{
            background-color: transparent;
            border-radius: none;
            border-radius: 50px;
        }
    }















    .react-tel-input .flag-dropdown.open {
        background: transparent;
    }

    .react-tel-input .flag-dropdown.open .selected-flag {
        background: transparent;
    }

    .react-tel-input .selected-flag:hover, 
    .react-tel-input .selected-flag:focus {
        background-color: transparent;
    }   

    .react-tel-input .selected-flag .arrow {
        border-top: 4px solid ${p => p.theme.color.primary_white};
    }

    .react-tel-input .selected-flag .arrow.up {
        border-top: none;
        border-bottom: 4px solid ${p => p.theme.color.primary_white};
    }

    .react-tel-input .country-list {
        background-color: ${p => p.theme.color.primary_grey};
        border-radius: 8px;
        color: ${p => p.theme.color.primary_black};
        font-size: 16px;
        overflow-x: hidden;
        padding-left: 10px;
    }

    .react-tel-input .country-list .search {
        background-color: ${p => p.theme.color.primary_grey};
    }

    .react-tel-input .country-list .country .dial-code {
        color: ${p => p.theme.color.primary_green_lite};
    }

    .react-tel-input .country-list .country.highlight {
        background-color: ${p => p.theme.color.primary_grey};
    }

    .react-tel-input .country-list .country:hover {
        background-color: ${p => p.theme.color.primary_violet};
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





















    .radio-btn-list{
        display: flex;
        align-items: flex-start;
        gap: 12px;
        flex-wrap: wrap;
    }

    .radio-btn-item{
        width: 32%;
        padding: 5px;
        border: 1px solid ${props => props.theme.color.primary_green_lite};
        border-radius: 12px;
    }

    .radio-btn-item-title{
        margin-bottom: 10px;
        text-align: center;
    }

    .LabelActivity {
        position: relative;
        align-items: center;
        display: flex;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        margin-bottom: 10px;
        padding-left: 8px;
    }

    .radio-btn-input {
        height: 12px;
        width: 12px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        cursor: pointer;
        margin-right: 8px;
        border-radius: 50%;
        padding: 0;

        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background-color: ${props => props.theme.color.primary_black_2};
            border: 1px solid ${props => props.theme.color.primary_grey};
        }

        &:checked::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: ${props => props.theme.color.primary_green_lite};
            transform: translate(-50%, -50%);
            visibility: visible;
        }
    }


















































    .ButtonContainer {
        display: flex;
        flex-direction: column;
        gap: 12px;
        /* margin-top: 20px; */
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