import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: #3532b2;

  height: 64px;

  display: flex;
  justify-content: ${(props) =>
    props.many_items ? "space-between" : "center"};
  align-items: center;

  padding: 0px 10px;

  border-radius: ${(props) => (props.partlyRound ? "12px 0 0 12px" : "12px")};

  font-size: 12px;
  font-weight: 900;
  color: white;

  flex-shrink: 0;

  cursor: pointer;
`;
