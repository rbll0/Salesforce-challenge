import {  styled } from "styled-components";
import { colors } from "../../styles/colors";

export const MainPageTitle = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-template-columns: 60% 40%;
    white-space: pre-line;
    margin-top: 20px;
    margin-bottom: 50px;


    & h1 {
        font-size: clamp(20px, 4vw, 7vw);
        font-weight:500;
        text-align: center;
        color: ${colors.primary.main}

    }

    & p {
        font-size: 15px;
        font-weight: 300;
    }

    & img {
        width: 40%;
    }

    @media screen and (max-width: 767px) {
        
    }
`;

export const Section = styled.div `
margin-top: 30px;

    & h3 {
        font-size: clamp(20px, 2.8vw, 3.3vw);
        font-weight: 500;
        text-align: center;
        color: ${colors.primary.main}
    }

    & h2 {
        color: ${colors.primary.main}
    }

    & h4 {
        color: ${colors.primary.main}
    }

    & p {
        font-weight: 300;
    }

    @media screen and (max-width: 767px) {
        & h3 {
            font-size: clamp(20px, 4vw, 4vw);
        }
    }

`;

export const FlexSection = styled.div `
    display: flex;
    justify-content: space-around;
    margin-bottom: 3vw;
    margin-top: 10px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
`;

export const SectionConfig = styled.div `
    display: flex;
    flex-direction: column;


    & h2 {
        font-size: clamp(20px, 3.3vw, 2.5vw);
        font-weight: 600;
        color: ${colors.primary.third};
        padding-top: 32px;
    };

    & h3 {
        color: ${colors.primary.main};
        font-size: 36px;
    }

    & p {
        font-size: clamp(20px, 3.3vw, 2.5vw);
        font-weight: 300;
        font-size: 20px;
        padding-bottom: 10px;
    };

    & img {
        width: 50vw;
        height: 50vh;
        object-fit: cover;
        align-items: top;
      }
`;


export const ConfigDiv = styled.div `
    display: flex;
    flex-direction: column;
    gap: 4em;
    padding: 0 5vw;
`;
