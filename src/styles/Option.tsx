import styled from "styled-components";

const Option = styled.div`
  cursor: pointer;
  padding: 5px 15px;

  &:hover {
    background: ${p => p.theme.primaryColor};
    color: ${p => p.theme.secondaryColor};
  }
`;
export default Option;
