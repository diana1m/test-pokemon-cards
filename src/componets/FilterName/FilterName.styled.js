import styled from 'styled-components';
// import { FiSearch } from 'react-icons/fi';


// export const FormStyled = styled.form`
//     display: flex;
//     margin: 0 auto;
//     position: relative;
// `

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
`

// export const Btn = styled.button`
//     position: absolute;
//     right: 0;
//     /* bottom: 10px; */
//     padding: 6px;
//     border: none;
//     background-color: transparent;
//     color: grey;
//     cursor: pointer;
//     transition: color 0.2s ease-in-out;

//     &:focus,
//     :hover {
//         color: green;
//         /* transform: scale(1.1); */
//     }
// `

// export const Icon = styled(FiSearch)`
//     height: 34px;
//     width: 20px;
//     transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

//     &:focus,
//     :hover {
//         color: green;
//         transform: scale(1.1);
//     }
// `