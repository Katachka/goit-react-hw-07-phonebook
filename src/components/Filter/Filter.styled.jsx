import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Text = styled.p`
  font-weight: 600;
  color: var(--main-text-color);
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 10px 0 10px;
  border: 1px solid var(--second-bg-color);
  outline: none;
  color: var(--main-text-color);
  font-size: 16px;

  &:focus {
    border-color: var(--accent-bg-color);
  }
`;
