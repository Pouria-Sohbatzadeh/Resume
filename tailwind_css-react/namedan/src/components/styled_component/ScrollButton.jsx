import styled from "styled-components";

export const ScrollButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ active }) => (active ? "#3532b2" : "#AAAAAA")};

  color: ${({ active }) => (active ? "#3532b2" : "#AAAAAA")};
`;
