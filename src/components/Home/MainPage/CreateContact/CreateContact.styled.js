import styled from "styled-components";


export const StyledCreateContact = styled.div`
    display: flex;
    margin-bottom: 10px;

    .creat-btn{
        margin: 0 auto;
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

        @media screen and (min-width: 834px) {
            max-width: 30%;
        }
    }
`