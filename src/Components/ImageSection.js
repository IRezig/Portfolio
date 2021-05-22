import React from 'react'
import styled from "styled-components"
import resume from '../img/avatar.jpeg'
import PrimaryButton from "../Components/PrimaryButton"

function ImagesSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt='resume-img' />
      </div>
      <div className="right-content">
        <h4>I'm Lorem Ipsum</h4> 
        <p className="paragraphy">
          Est ea exercitation non voluptate laborum et do cupidatat ullamco in qui. 
          Est ea exercitation non voluptate laborum et do cupidatat ullamco in qui. 
        </p>
        <div className='about-info'>
          <div className='info-title'>
            <p>Full name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className='info'>
            <p>:Lorem Ipsum</p>
            <p>:23</p>
            <p>:Algerian</p>
            <p>:French, english, arabic</p>
            <p>:Paris, France</p>
            <p>:Freelance</p>
          </div>
        </div>
        <PrimaryButton title={"Download CV"} />
      </div>
    </ImageSectionStyled>
  )
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width:1000px){
    flex-direction: column;
    .left-content{
      margin-bottom: 2rem;
    }
  }
  .left-content{
    width: 100%;
    img{
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content{
    width: 100%;
    h4{
      font-size: 2rem;
      color: var(--white-color);
      span{
        font-size: 2rem;
      }
    }
    .paragraph{
      padding: 1rem 0;
    }
    .about-info{
      display: flex;
      padding-bottom: 1.4rem;
      .info-title{
          padding-right: 3rem;
          p{
              font-weight: 600;
          }
      }
      .info-title, .info{
        p{
          padding: .3rem 0;
        }
      }
    }
  }
`;

export default ImagesSection
