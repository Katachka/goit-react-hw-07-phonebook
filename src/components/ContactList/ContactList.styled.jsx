import styled from '@emotion/styled';

export const ContactsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  background-color: var(--accent-bg-color);
  color: var(--second-text-color);

  margin-right: 30px;
  padding: 15px;
`;

export const Number = styled.p`
  font-weight: 700;
  margin-right: 30px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
  border-radius: 8px;

  background-color: #2b2b2b;
  color: var(--second-text-color);

  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  &:hover,
  &:focus {
    background-color: var(--accent-bg-color);
  }
`;
