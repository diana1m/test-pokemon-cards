import styled from 'styled-components';

export const StyledInput = styled.input`
    margin: 0 auto;
    background-color: transparent;
    border: none;
    font-size: 18px;
    padding: 7px 7px; 
    border-bottom: 2px solid #ccc;
    width: 300px;
    outline: none;
    transition: box-shadow 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;


    &:focus,
    :hover {
        box-shadow: 0px 7px 7px 0px rgba(0, 123, 255, 0.3);
        border-bottom-color: green;
    }
`;