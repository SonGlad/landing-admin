import styled from "styled-components";


export const StyledMainPage = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 20px;

    .info-cont{
        width: 100%;
    }

    .main-content{
        background-color: ${p => p.theme.color.primary_black_2};
        width: 100%;
        height: 750px;
        border-radius: 15px;
        box-shadow: 4px 0px 15px 2px rgba(227, 255, 168, 0.2);
        padding: 10px;
        display: flex;
        gap: 5px;
    }

    ::-webkit-scrollbar {
        width: 3px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: ${p => p.theme.color.primary_grey};
        border-radius: 50%;
    }
`