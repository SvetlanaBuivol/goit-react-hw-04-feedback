import styled from '@emotion/styled';

export const ButtonsFeedback = styled.ul`
display: flex;
gap: 24px;
`;

const getColor = (option) => {
  if (option === 'good') {
    return 'green';
  }
  if (option === 'bad') {
    return 'red';
  }
  return 'gray'; 
};

export const Button = styled.button`
background-color: #C0C0C0;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ option }) => getColor(option)};
  }
`;