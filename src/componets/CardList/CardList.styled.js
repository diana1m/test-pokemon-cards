import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.section`
    max-width: 1280px; 
    margin: 40px auto;
    padding: 0 30px;
`

export const Notification = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 36px;
    height: 150px;
    width: 80%;

`

export const List = styled.ul `
    max-width: 1280px;
   
    padding: 0;
    margin-bottom: 30px;
    margin-top: 30px;

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

    background-color: #feffe0;
    border: 3px solid #fad61f;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;

    cursor: pointer;

    font-weight: 600;
    font-size: 18px;
    line-height: calc(22 / 18);
    text-transform: uppercase;
    color: #373737;
    
    transition-property: background-color, border-color, color;
    transition-duration: 0.4s;
    transition-timing-function: ease;

    &:hover{
        background-color: #fad61f;
        border-color: #feffe0;
        color: #feffe0;
    }

    &:disabled{
        background-color: white;
        color: grey;
        border: none;
        cursor: not-allowed;
    }
`

export const WrapForBtn = styled.div`
    display: flex;
    align-items: center;
    padding-right: 140px;
    max-width: 1280px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
    }
`

export const BtnGoBack = styled(NavLink)`
    display: block;
    width: 140px;
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
    transition: background-color 500ms ease;
    &:hover,
    &:focus {
        color:#FBFCFB;
        background-color: #fad61f;
    }
`