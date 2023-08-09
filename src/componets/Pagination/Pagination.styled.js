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
        border-color: blue;
    }
`