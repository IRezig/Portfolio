import React from 'react'
import styled from 'styled-components'
import {MainLayout} from "../styles/Layouts"
import Title from "../Components/Title"
import ImagesSection from '../Components/ImageSection'
import ServicesSection from '../Components/ServicesSection'

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={'About me'} span={'About ME'} />
        <ImagesSection />
        <ServicesSection />
      </AboutStyled>
    </MainLayout>
  )
}

const AboutStyled = styled.section`
`

export default AboutPage
