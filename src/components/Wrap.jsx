import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    width: 100%;
    max-width: 640px;
    margin: 20px auto;
    text-align: center;
`

function Wrapper({children}) {
  return (
    <Wrap>{children}</Wrap>
  )
}

export default Wrapper