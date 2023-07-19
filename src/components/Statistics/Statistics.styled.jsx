import styled from "@emotion/styled";

export const StyledStatistics = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    transition: transform 0.2s;
    color: #333;
    cursor: pointer;
  }

  p:hover {
    transform: scale(1.05);
    color: blue;
  }
`;