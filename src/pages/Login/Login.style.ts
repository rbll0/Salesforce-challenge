  import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { colors } from '../../styles/colors';

export const LoginWrapperElement = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 73px);
  background-color: ${colors.backgound.main};
`;

export const LoginActionContentElement = styled(Box)`
  flex-grow: 1;
  padding: 2rem; /* Adicionei padding para melhor espaçamento */
  & h1 {
    line-height: 1.2;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 800;
    color: ${colors.text.title};
    text-align: center;
  }

  & p {
    margin-bottom: 1rem;
    font-size: 1rem;
    text-align: left;
    font-weight: 500;
    color: ${colors.text.main};
  }
`;

export const LoginBearImage = styled.img`
  width: 59%;
  @media (min-width: 1640px) {
    width: 52%;
  }
`;
