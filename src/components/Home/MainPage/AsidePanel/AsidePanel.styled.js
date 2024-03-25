import styled from "styled-components";


export const StyledAsidePanel = styled.aside`
    background-color: ${p => p.theme.color.primary_black_2};
    box-shadow: 0px 0px 14px 5px rgba(227, 255, 168, 0.2);
    width: 200px;
    flex-grow: 1;
    border-radius: 10px;
    padding: 10px;

    .side-panel-cont{
        height: 100%;
        width: 100%;
        border: 1px solid ${p => p.theme.color.primary_green_lite};
        border-radius: 10px;
        padding: 10px;
    }
`