import React from 'react'
import styled from 'styled-components'

function Practice() {
  return (
    <Wrapper>
          <h3>this is styled component</h3>
          <button>click me</button>
    </Wrapper>
  )
}

const Wrapper = styled.section
    `  
      h3{
          color:green;
          font-size:10px;
      }
      button{
          background:blue;
          color:white;
      }

    `

export default Practice;
