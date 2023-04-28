import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    min-width: 120px;
    padding: 14px 27px;
    border-radius: 9999px;
    outline: none;
    font-size: 18px;
    font-family: 'NanumSquareRoundEB';
    cursor: pointer;
    border:${(props) => props.blue? '1px solid #7090ff' : '1px solid #ff4664'};
    background-color:${(props) => props.blue? 'rgba(0, 89, 255, 0.2)' : 'rgba(255, 78, 78, 0.2)'};
    color: ${(props) => props.blue? '#7090ff' : '#ff4664'};

    &.blue:hover{
        background-color: rgba(0, 89, 255, 0.3);
    }
    
    &.red:hover{
        background-color: rgba(255, 78, 78, 0.3);
    }

    &+&{
      margin-left:20px;
    }
`

function button({children, ...rest}) {
  return (
    <Button {...rest}>{children}</Button>
  )
}

export default button