import styled from "styled-components";

const Layout = styled.div`
  min-width: ${(p) => p.theme.containerMinWidth};
  max-width: ${(p) => p.theme.containerMaxWidth};
  background: ${(p) => p.theme.containerColor};

  width: 100vw;
  min-height: 100vh;
  padding-top: 50px;
  margin: 0px;

  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: ${(p) => p.theme.containerShadow};

  @media screen and (min-width: 600px) {
    width: 80vw;
    margin: 50px auto;
    min-height: auto;
  }
`;

export default Layout;
