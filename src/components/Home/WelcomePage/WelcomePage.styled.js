import styled from "styled-components";


export const StyledWelcomePage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .welcome-title{
        margin-bottom: 60px;
        font-size: 40px;
        line-height: 1.3;
        font-weight: 500;
        color: ${p => p.theme.color.primary_white};
    
        @media screen and (min-width: 834px) {
            font-size: 55px;
            line-height: 1.2;
            letter-spacing: 10px;
        }

        @media screen and (min-width: 1440px) {
            font-weight: 700;
            font-size: 70px;
        }
    }

    .welcome-navigation{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .welcome-nav-list{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 60px;
        flex-direction: column;

        @media screen and (min-width: 834px) {
            flex-direction: row;
            gap: 30px;
        }
        @media screen and (min-width: 1440px) {
            gap: 60px;
        }
    }

    .welcome-nav-item{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        @media screen and (min-width: 1440px) {
            width: 30%;
        }
    }

    .welcome-item-text{
        text-align: center;
        margin-bottom: 30px;

        @media screen and (min-width: 1440px) {
            font-size: 25px;
            line-height: 1.5;
        }
    }

    .welcome-nav-link{
        display: flex;
        width: 142px;
        padding: 8px 10px;
        border-radius: 12px;
        background: rgb(227, 255, 168);
        font-size: 14px;
        font-weight: 500;
        line-height: 1.4;
        justify-content: center;
        color: rgb(15, 15, 15);
        transition: all ${p => p.theme.transition.main_transition};

        &:hover {
            color: ${props => props.theme.color.primary_grey};
        }

        &:focus {
            color: ${props => props.theme.color.primary_grey};
        }

        @media screen and (min-width: 834px) {
            width: 50%;
            font-size: 20px;
        }

        @media screen and (min-width: 1440px) {
            font-size: 25px;
            line-height: 1.5;
        }
    }

`