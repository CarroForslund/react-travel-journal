import styled from 'styled-components';

export const StyledModal = styled.div`
    /* 320px — 480px: Mobile devices.*/
    width: 90%;
    margin: 5% auto;
    background-color: white;
    padding: 2rem;

    /* 481px — 768px: iPads, Tablets. */
    @media (min-width: 481px) {
        width: 70%;
    }

    /* 769px — 1024px: Small screens, laptops. */
    @media (min-width: 769px) {
        width: 60%;
    }

    /* 1025px — 1200px: Desktops, large screens. */
    @media (min-width: 1025px) {
        width: 50%;
    }

    /* 1201px and more — Extra large screens, TV. */
    @media (min-width: 1201px) {
        width: 30%;
    }

`;