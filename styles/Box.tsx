import React from "react"
import styled from "styled-components"

const Box = styled.div`
  width: 100%; 
  height: 500px;
  background: #f00;
  transition: 1s;

    &:hover {
      background: #000;
    }
  `

export default Box