import styled from "styled-components";

const BoxRegionWorld = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%; 
  min-width: 250px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: -2px -1px 8px 0px rgba(50, 50, 50, 0.49);
  button {
    align-self: flex-end;
    background: none;
    width: 40px;
    height: 30px;
    border-radius: 0px 10px 0px 5px;
    border-width: 0px;
    outline: none;
    transition: .5s;
      &:hover{
        background: #1c95d6;
        color: #fff;
      }
  `;

export default BoxRegionWorld;
