import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: #FBFCFB;
    font-size: 22px;
    font-weight: 700;
    padding: 3px 15px;
    border-radius: 10px;
    border: 3px solid transparent;
    box-sizing: border-box;

    text-transform: uppercase;
    transition-property: background-color, border-color;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    &:hover,
    &:focus {
        border-color: #fad61f;
    }
    &.active {
        background-color: #fad61f;
        pointer-events: none;
    }
`

export const NavigationWrapper = styled.nav`
    display: flex;
    justify-content: center;
    gap: 30px;
`

