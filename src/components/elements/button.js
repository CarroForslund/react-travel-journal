import styled from 'styled-components';

export const StyledButton = styled.button`
    background: deeppink;
    color: white;
    padding: .8rem;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    text-transform: uppercase;
    transition: all ease-in-out .2s;

    &:hover {
        background: mediumvioletred;
    }

`;