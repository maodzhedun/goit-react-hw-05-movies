import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  justify-content: center;
  margin: 24px 0;
`;

export const Input = styled.input`
  width: 320px;
  padding: 10px 16px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: #1976d2;
  }
`;