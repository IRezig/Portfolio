import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'
import SmallTitle from '../Components/SmallTitle'
import ResumeItem from '../Components/ResumeItem'
import BusinessCenter from '@material-ui/icons/BusinessCenter'
import School from '@material-ui/icons/School'

function Resume() {
  const briefCaseIcon = <BusinessCenter />
  const schoolIcon = <School />
  return (
    <ResumeStyles>
      <Title title={'Resume'} span={'Resume'} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefCaseIcon} title={'Working Expériance'} />
        </div>
        <div className="resume-content">
          <ResumeItem 
            year={'2015 - 2017'} 
            title={'Licence in Computer Science'}  
            subTitle={'Good grades'} 
            text={'Aliqua consequat pariatur anim nostrud duis aliqua ullamco ullamco enim nostrud aute irure.'}
          />
          <ResumeItem 
            year={'2015 - 2017'} 
            title={'Licence in Computer Science'}  
            subTitle={'Good grades'} 
            text={'Aliqua consequat pariatur anim nostrud duis aliqua ullamco ullamco enim nostrud aute irure.'}
          />
          <ResumeItem 
            year={'2015 - 2017'} 
            title={'Licence in Computer Science'}  
            subTitle={'Good grades'} 
            text={'Aliqua consequat pariatur anim nostrud duis aliqua ullamco ullamco enim nostrud aute irure.'}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={schoolIcon} title={'Education'} />
        </div>
        <div className="resume-content">
          <ResumeItem 
            year={'2015 - 2017'} 
            title={'Licence in Computer Science'}  
            subTitle={'Good grades'} 
            text={'Aliqua consequat pariatur anim nostrud duis aliqua ullamco ullamco enim nostrud aute irure.'}
          />
          <ResumeItem 
            year={'2015 - 2017'} 
            title={'Licence in Computer Science'}  
            subTitle={'Good grades'} 
            text={'Aliqua consequat pariatur anim nostrud duis aliqua ullamco ullamco enim nostrud aute irure.'}
          />
          <ResumeItem
            year={'2015 - 2017'} 
            title={'Licence in Computer Science'}  
            subTitle={'Good grades'} 
            text={'Aliqua consequat pariatur anim nostrud duis aliqua ullamco ullamco enim nostrud aute irure.'}
          />
        </div>
      </InnerLayout>
    </ResumeStyles>
  )
}

const ResumeStyles =  styled.div`
  .small-title {
    padding-bottom: 3rem;
  }

  .resume-content{
    border-left: 1px solid var(--border-color);
  }

  .u-small-title-margin {
    margin-top: 4rem;
  }

`;

export default Resume
