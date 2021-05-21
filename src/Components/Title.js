import React from 'react'
import styled from 'styled-components'

function Title({title, span}) {
  return (
    <TitleStyled>
      <h2>{title} <span> {span} </span> </h2>
    </TitleStyled>
  )
}

const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 3.1rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: .6rem;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 7.5rem;
      height: .33rem;
      border-radius: 15px;
      background-color: var(--background-light-color-2);
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 3.5rem;
      height: .33rem;
      border-radius: 15px;
      background-color: var(--primary-color);
    }
    span {
      font-weight: 900;
      color: rgba(25, 29, 43, .44);
      font-size: 5rem;
      position: absolute;
      left: 0;
      top: 20%;
      z-index: -1;
    }
  }
`

export default Title
