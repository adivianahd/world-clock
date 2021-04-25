import styled from "styled-components";

const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px 20px 0px 0px;

  input {
    width: 100%;
    height: 35px;
    border-radius: 5px 0px 0px 5px;
    border-width: 0px;
    outline: none;
  }

  button {
    background: #fff;
    width: 35px;
    heigth: 35px;
    border-radius: 0px 5px 5px 0px;
    border-width: 0px;
    outline: none;
    transition: 0.5s;
    &:hover {
      background: #1c95d6;
      color: #fff;
    }
  }
`;
export default ContainerInput;
