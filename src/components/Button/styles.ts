import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonSubmit = styled.button`
  padding: 0.75em;
  padding: 10px 20px;
  background-color: #007bff; 
  color: #ffffff;
  border: none;
  cursor: pointer; 
  font-size: 16px;
  width: 20%;

  &:hover {
    background-color: #0056b3; 
  }
`