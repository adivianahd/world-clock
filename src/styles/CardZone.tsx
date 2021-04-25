import styled from "styled-components";

const CardZone = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%;
  min-width: 250px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: ${(p) => p.theme.cardShadow};
  button {
    align-self: flex-end;
    background: none;
    width: 40px;
    height: 30px;
    border-radius: 0px 10px 0px 10px;
    border-width: 0px;
    outline: none;
    transition: .3s;
    cursor:pointer;
      &:hover{
        color: ${(p) => p.theme.secondaryColor};
        background: ${(p) => p.theme.primaryColor};
      }
      &:active{
        opacity: 0.5;
      }
  `;

export default CardZone;
