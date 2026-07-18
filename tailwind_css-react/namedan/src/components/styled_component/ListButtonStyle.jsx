import styled from "styled-components";

export const ListButtonStyle = styled.button`
    color: #888888;

  position: relative;

  &:focus {
    color: #3532b2 !important;
    outline: none;
  }

  &:focus::after {
    display: inline-block;
  }

  &::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 16px;
    left: 50%;
    top: 130%;
    transform: translateX(-50%);
    background-color: #3532b2;
    display: none;
  }
`;
