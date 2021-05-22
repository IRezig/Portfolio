import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'

function Skills() {
  return (
    <SkillsStyled>
      <MainLayout>
        <InnerLayout>
          <Title title={'Skills'} />
        </InnerLayout>
      </MainLayout>
    </SkillsStyled>
  )
}

const SkillsStyled = styled.div`

`

export default Skills
