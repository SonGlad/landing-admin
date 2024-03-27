import styled from "styled-components";


export const StyledDinamicContactPanel = styled.div`
    display: contents;

    .content-container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        border: 1px solid ${p => p.theme.color.primary_green_lite};
        height: 100%;
        border-radius: 10px;
        padding: 10px;
        transition: width ${p => p.theme.transition.main_transition};
    }

    .content-container.expanded {
        display: block;
        width: 100%;
        overflow: hidden;
    }

    .content-title{
        text-align: center;
        transform: rotate(-90deg);

        &::first-letter{
            text-transform: uppercase;
        }
    }

    .content-title.expanded{
        transform: rotate(0);
        display: block;
        text-align: center;
        margin-bottom: 10px;

        &::first-letter{
            text-transform: uppercase;
        }
    }
























    



    .filter-btn-block{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    .nav-btn-block{
        width: 33%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .filter-label{
        margin-left: 25px;
    }

    .input{
        width: 280px; 
        background: rgba(0,0,0,0.1);
        border: none;
        outline: none;
        padding: 5px;
        font-size: 15px;
        color: #fff;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 4px;
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
        -webkit-transition: box-shadow .5s ease;
        -moz-transition: box-shadow .5s ease;
        -o-transition: box-shadow .5s ease;
        -ms-transition: box-shadow .5s ease;
        transition: box-shadow .5s ease;
    }

    .input:focus { 
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); 
    }

    .filter-btn{
        color: ${(props) => props.theme.color.primary_black};
        background-color: ${(p) => p.theme.color.primary_green_lite};
        font-family: Poppins;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        width: 25%;
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
    }

    .delete-btn-block{
        gap: 1px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .delete-btn{
        width: 100px;
        margin-left: 20px;
    }























    .contact-list{
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        align-content: flex-start;
        padding: 10px;
        gap: 15px;
        height: 100%;
        overflow: auto;
        padding-bottom: 100px;
    }

    .contact-item{
        padding: 10px;
        width: 31.4%;
        overflow: hidden;
        border: 1px solid ${p => p.theme.color.primary_green_lite};
        border-radius: 10px;

        h3 {
            margin-bottom: 5px;
            margin-left: 25px;
            color: ${p => p.theme.color.secondary_color_pink}
        }
    }

    .contact-item-container{
        display: flex;
        align-items: center;
    }

    .item-content-cont{
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        width: 100%;
        cursor: pointer;
    }

    .trash-button{
        padding: 0;
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
    }
    
    .trash-icon{
        width: 15px;
        height: 15px;
        stroke: ${props => props.theme.color.primary_green_lite};
        transition: stroke ${p => p.theme.transition.main_transition};

        &:hover {
            stroke: ${props => props.theme.color.primary_white};
        }

        &:focus {
            stroke: ${props => props.theme.color.primary_white};
        }
    }

    .item-container{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .icon{
        fill: ${p => p.theme.color.primary_green_lite};
        width: 15px;
        height: 15px;
    }

    .item-text{
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-size: 14px;

        &::first-letter{
            text-transform: uppercase;
        }

        @media screen and (min-width: 1600px){
            font-size: 18px;
        }
    }

    .checkbox-container{
        position: relative;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .all-checkbox-container{
        gap: 0;
    }

    .checkbox {
        width: 15px;
        height: 15px;
        outline: none;
        border: none;
        cursor: pointer;
        opacity: 0;
    }
    
    .custom-checkbox{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .custom-checkbox-before, .custom-checkbox-after{
        position: absolute;
        left: 0px;
        top: 0px;
        pointer-events: none;
    }
    .custom-checkbox-before{
        opacity: 1;
        transition: opacity 0.25s;
    }
    .custom-checkbox-after{
        opacity: 0;
        transition: opacity 0.25s;
    }
     .checkbox:focus + .custom-checkbox > .custom-checkbox-before{
        outline: 3px solid #9BB537;
        border-radius: 2px;
        outline-offset: -3px; 
    }

    .checkbox:checked + .custom-checkbox > .custom-checkbox-after{
        opacity: 1;
    }
    .checkbox:checked + .custom-checkbox > .custom-checkbox-before{
        opacity: 0;
    }
`