import styled from "styled-components";

const StyleLoad = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: ${(p) => p.theme.secondaryColor};
margin: 5px;
border-radius: 50%;
width: 2.5em;
height: 2.5em;
background: ${(p) => p.theme.primaryColor};
animation: pulse 1.5s infinite ease-in-out;
animation-direction: alternate;

@keyframes pulse {
  0% {
    transform: scale(.8);
  }
  100% {
    transform: scale(1);
  }
}
}
`;

export default StyleLoad;
