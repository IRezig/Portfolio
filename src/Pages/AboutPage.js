import React from 'react';
import styled from 'styled-components';
import {MainLayout} from "../styles/Layouts";
import Title from "../Components/Title"

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={'About me'} span={'About ME'} />
      </AboutStyled>
    </MainLayout>
  )
}

const AboutStyled = styled.section`

`

export default AboutPage
