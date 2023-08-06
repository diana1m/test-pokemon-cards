import styled from "styled-components";
import { typesColor } from "../CardItem/CardItem.styled";

export const Wrapper = styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
`

export const TagsBtn = styled.button`
    font-size: 24px;
    background-color: ${props => typesColor[props.color]};
    border-width: 2px;
    border-style: solid;
    color: ${props => props.isActive ? "black" : "#fefff1"};
    border-color: ${props => props.isActive ? "black" : "#fefff1"};
    text-decoration:  ${props => props.isActive ? "underline" : "none"};
    border-radius: 8px;
    padding: 4px 12px;
    transform: ${props => props.isActive ? "scale(1.1)" : "scale(1)"};
    cursor: pointer;
    transition-property: box-shadow;
    transition-duration: 0.4s;
    transition-timing-function: ease;

    :hover,
    :focus{
        box-shadow: 0px 7px 7px 0px rgba(0, 123, 255, 0.3);
    }
`