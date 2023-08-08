import styled from 'styled-components'; 
import Select from 'react-select';

export const Wrapper = styled.div`
    display: flex;
   margin-bottom: 30px;
    justify-content: center;
    gap: 30px;
`

export const SelectStyled = styled(Select)`
    width: 90px;
    transition: border-color 0.2s ease-in-out;
 
    height: 36px;

    &:hover {
        /* box-shadow: 0px 7px 7px 0px rgba(0, 123, 255, 0.3); */
        border-color: blue;
    }
`