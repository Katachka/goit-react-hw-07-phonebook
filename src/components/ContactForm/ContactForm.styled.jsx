import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 50px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  font-weight: 600;
  color: var(--main-text-color);
  margin-bottom: 5px;
`;

export const Input = styled.input`
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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 40px;

  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  font-family: inherit;
  border: none;
  border-radius: 8px;

  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  &:hover,
  &:focus {
    background-color: var(--second-bg-color);
  }
`;
