import styled from "styled-components";

const ContainerInput = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  border: 1px solid ${(p) => p.theme.primaryColor};
  border-radius: 7px 35px 35px 7px;
  padding-left: 12px;

  input {
    width: 100%;
    height: 35px;
    border-width: 0px;
    outline: none;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
  }

  button {
    outline: none;
    background: transparent;
    width: 35px;
    heigth: 35px;
    transition: 0.3s;
    border: none;
    border-radius: 100%;
    background: ${(p) => p.theme.primaryColor};
    color: ${(p) => p.theme.secondaryColor};
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.3;
    }
  }
`;
export default ContainerInput;
