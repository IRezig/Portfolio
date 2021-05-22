import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'

function Resume() {
  return (
    <ResumeStyles>
      <Title title={'Resume'} span={'Resume'} />
      <InnerLayout>
      </InnerLayout>
    </ResumeStyles>
  )
}

const ResumeStyles =  styled.div`

`;

export default Resume
