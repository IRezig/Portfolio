import React from 'react'
import Particle from '../Components/Particles'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import YoutubeIcon from '@material-ui/icons/YouTube'

function HomePage() {
  return (
    <HomePageStyled>
      <div className="praticles-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>Hi I'm <span>Lorem Ipsum</span></h1>
        <p>Elit amet consequat cillum elit nostrud aute sint pariatur deserunt minim. </p>
        <div className="icons">
          <a href="code.com" className="icon i-facebook"> <FacebookIcon /> </a>
          <a href="code.com" className="icon i-github"> <GithubIcon /> </a>
          <a href="code.com" className="icon i-youtube"> <YoutubeIcon /> </a>
          
        </div>

      </div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .p-praticles-js {
    position: absolute;
    top: 0;
    left: 0;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    width: 80%;

    .icons{
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid var(--border-color);
        border-radius: 50%;
        transition: all .5s ease-in-out;
        &:hover{
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          cursor: pointer;
        }
        &:not(:last-child){
          margin-right: 1rem;
        }
        svg{
          margin: .5rem;
        }
      }
      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      
      .i-github {
        &:hover {
          border: 2px solid #5F4687;
          color: #5F4687;
        }
      }
    }
  }
`;

export default HomePage
