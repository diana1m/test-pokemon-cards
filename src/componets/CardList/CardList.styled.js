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
    gap: 50px;
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
    max-width: 180px;
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