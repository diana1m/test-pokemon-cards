import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.section`
    max-width: 1280px; 
    margin: 40px auto;
`

export const List = styled.ul `
    max-width: 1280px;
   
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`

export const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
   
    width: 380px;
    height: 50px;
    margin: 0 auto;
    margin-bottom: 40px;

    background-color: #EBD8FF;
    border: 3px solid #5736A3;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;

    cursor: pointer;

    font-weight: 600;
    font-size: 18px;
    line-height: calc(22 / 18);
    text-transform: uppercase;
    color: #373737;

    transition: background-color 500ms linear, color 500ms linear, border 500ms linear ;

    &:hover{
        background-color: #5736A3;
        border: 2px solid #EBD8FF;
        color: #EBD8FF;
    }

    &:disabled{
        background-color: white;
        color: grey;
        border: none;
        cursor: not-allowed;
    }
`

export const BtnGoBack = styled(NavLink)`
    display: block;
    width: 140px;
    margin-top: 40px;
    margin-left: 30px;
    padding: 12px 18px;

    display: flex;
    align-items: center;

    border: none;
    background-color: transparent;
    border-radius: 10px;

    color: #373737;
    text-decoration-line: underline;
    font-weight: 600;
    font-size: 18px;
    line-height: calc(22 / 18);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    
    cursor: pointer;
    transition: background-color 500ms linear;
    &:hover,
    &:focus {
        color:#EBD8FF;
        background-color: #5736A3;
    }
`