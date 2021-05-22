import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import ProgressBar from '../Components/ProgressBar'

function Skills() {
  return (
    <SkillsStyled>
      <Title title={'My skills'} span={'My skills'} />
      <InnerLayout>
        <div className='skills'>
          <ProgressBar
            title={'HTML'}
            width={'70%'}
            text={'70%'}
          />
          <ProgressBar
            title={'CSS'}
            width={'90%'}
            text={'90%'}
          />
          <ProgressBar 
            title={'JavaScriopt'}
            width={'70%'}
            text={'70%'}
          />
          <ProgressBar
            title={'Python'}
            width={'90%'}
            text={'90%'}
          />
          <ProgressBar 
            title={'React Js'}
            width={'70%'}
            text={'70%'}
          />
          <ProgressBar 
            title={'Node Js'}
            width={'70%'}
            text={'70%'}
          />
        </div>
      </InnerLayout>
    </SkillsStyled>
  )
}

const SkillsStyled = styled.div`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
  }
`

export default Skills
