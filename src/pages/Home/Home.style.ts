import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const HomeWrapperElement = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 73px);
  background-color: ${colors.backgound.main};
`;

export const HomeActionContentElement = styled.div`
  flex-grow: 1;
  & h1 {
    line-height: 1.2;
    margin-bottom: 1rem;
    font-size: 3.5rem;
    font-weight: 800;
    color: ${colors.text.title};

  }

  & p {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${colors.text.gray};
    text-align: left;
    justify-content: center;
    
  }

  & span {
    font-weight: 800;
    color: #0176D3 ;
  }

  & button {
    margin-top: 2rem;
  }
`;

export const HomeBearImage = styled.img`
  width: 45%;
  flex-grow: 0;
  @media (min-width: 1640px) {
    width: 45%;
  }
`;
