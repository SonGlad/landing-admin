import styled from "styled-components";


export const StyledHeader = styled.header`
    background-color: ${p => p.theme.color.primary_black_2};
`

export const StyledHeaderContainer = styled.div`
    display: flex;
    padding: 10px 0;
    width: 100%;
    //position for the "accordion" of the mobile menu
    position: relative;

    @media screen and (min-width: 834px) {
        padding: 15px 0;
    }
`