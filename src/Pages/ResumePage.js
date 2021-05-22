import React from 'react'
import styled from 'styled-components'
import Skills from '../Components/Skills'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'

function ResumePage() {
  return (
    <MainLayout>
      <ResumePageStyled>
        <InnerLayout>
          <Title title={'Resume'} span={'Resume'} />
        </InnerLayout>
        <Skills>

        </Skills>

      </ResumePageStyled>
    </MainLayout>
  )
}

const ResumePageStyled = styled.div`

`

export default ResumePage
