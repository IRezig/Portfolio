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
  &:hover::after {
    transform: All .4s ease-in-out;
    content: "";
    position: absolute;
    width: 100%;
    height: .2rem;
    background-color: var(--white-color);
    left: 0;
    bottom: 0;
  }
`

export default PrimaryButton;