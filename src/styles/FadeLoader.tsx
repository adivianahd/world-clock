import styled from "styled-components";

const FadeLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  bottom: 0px;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(150, 150, 150, 0.5);
  z-index: 1;
`;

export default FadeLoader;
