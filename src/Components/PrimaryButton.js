import React from 'react';
import styled from "styled-components";

function PrimaryButton({title}) {
  return (
    <PrimaryButtonStyled>
      {title}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 1rem 2.5rem;
  color: var(--white-color);
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: All .4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: .2rem;
    transition: All .4s ease-in-out;
  }
  &:hover::after {
    background-color: var(--white-color);
    width: 100%;
  }
`

export default PrimaryButton;