import styled from "styled-components";


export const StyledCreateContactModal = styled.div`
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

`