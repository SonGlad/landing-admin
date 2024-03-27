import styled from "styled-components";


export const StyledConfirmModal = styled.div`
    width: 95%;
    max-width: 500px;
    height: auto;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 40px;
    border-radius: 12px;
    background: ${p => p.theme.color.primary_black_2};
    border: 1px solid ${p => p.theme.color.secondary_color_grey_1};
    position: relative;

    @media only screen and (min-width: 834px) {
        padding-top: 20px;
        padding-bottom: 20px;
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
        font-size: 26px;
        line-height: 1.8;
    }

    .ButtonContainer {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 12px;
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
        font-size: 20px;
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
        font-size: 20px;
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