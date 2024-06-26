import { CSSProperties, styled } from "styled-components";
import { colors } from "../../styles/colors";

export const BackgroundForm: CSSProperties = {
    backgroundImage: "/src/assets/th-discover.webp",
}

export const ParagraphForm= styled.div `
    width: 80%;
    height: '';
    font-size: 16px;
    font-Weight: 700;
    line-height: 25.13px;
    color: ${colors.commom.white};
`;

export const FormSection = styled.div `
    background-color: ${colors.primary.second};
    border-radius: 27px;
    width: 50vw;
    height: 88vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px ;
    padding: 30px 16px;

    & input {
        background-color: #fff;
        width: 30vw;
        height: 30px;
        border: 1.55px solid #6C6C6C;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 300;
    };

    & textarea {
        background-color: #fff;
        width: 30vw;
        height: 100px;
        border: 1.55px solid #6C6C6C;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 300;
    };
    & button {
        margin-top: 10%;
        background-color: ${colors.actions.success.main};
    }
`;

export const Input: CSSProperties = {
    padding: '0 0 0 0.5vw'
}

export const InputBox: CSSProperties = {

    padding: '2vh 0 30vh 0.5vw'
}