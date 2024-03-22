import styled from "styled-components";


export const StyledAuthNav = styled.nav`
    display: flex;
    align-items: center;
    margin-left: auto;

    .link {
        text-decoration: none;
        font-weight: 400;
        color: ${p => p.theme.color.primary_white};
        font-size: 12px;
        letter-spacing: 1px;
        transition: color ${p => p.theme.transition.main_transition};

        @media screen and (min-width: 834px) {
            font-size: 15px;
        }

        @media screen and (min-width: 1440px) {
            font-size: 18px;
        }

        &:hover,
        &:focus {
            color: ${p => p.theme.color.primary_green_lite};
        }
    }

    .link.active {
        color: ${p => p.theme.color.primary_green_lite};
    }

    .header-span {
        text-decoration: none;
        font-weight: 400;
        color: ${p => p.theme.color.primary_white};
        font-size: 12px;
        letter-spacing: 1px;
        margin-left: 5px;
        margin-right: 5px;

        @media screen and (min-width: 834px) {
            font-size: 15px;
        }

        @media screen and (min-width: 1440px) {
            font-size: 18px;
        }
    }

    .avatar-img{
        width: 26px;
        margin-left: 6px;

        @media screen and (min-width: 834px) {
            width: 28px;
        }
    }
`