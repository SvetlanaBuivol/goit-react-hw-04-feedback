import styled from '@emotion/styled';
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledNotification = styled.h2`
animation: ${fadeIn} 0.5s ease-in;

  color: #333;
  font-size: 28px;
  text-align: center;

`;



