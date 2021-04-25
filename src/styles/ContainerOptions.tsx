import styled from "styled-components";

const ContainerOptions = styled.div`
  position: absolute;
  max-height: 100px;
  min-width: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 40px;
  margin-right: 20px;

  box-shadow: ${p => p.theme.containerShadow};
  background: ${p => p.theme.containerColor};
`;
export default ContainerOptions;
