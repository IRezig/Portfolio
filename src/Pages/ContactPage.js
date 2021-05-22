import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import PrimaryButton from '../Components/PrimaryButton'
import ContactItem from '../Components/ContactItem'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'

function ContactPage() {
  const phone = <PhoneIcon /> 
  const email = <EmailIcon /> 
  const location = <LocationOnIcon /> 
  return (
    <MainLayout>
      <Title title={'Contact'} span={'Contact'} />
      <ContactPageStyled>
        <InnerLayout className='contact-section'>
          <div className='left-content'>
            <div className='contact-title'>
              <h4> Get in Touch </h4>
            </div>
            <form className='form'>
              <div className='form-field'>
                <label htmlFor="name">Enter your name* </label>
                <input type="text" id="name" />
              </div>
              <div className='form-field'>
                <label htmlFor="email">Enter your email </label>
                <input type="text" id="email" />
              </div>
              <div className='form-field'>
                <label htmlFor="subject">Enter your subject </label>
                <input type="text" id="subject" />
              </div>
              <div className='form-field'>
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea name="texterea" id="textarea" cols="30" row="10" />
              </div>
              <div className='form-field'>
                <PrimaryButton title={'Send Email'} />
              </div>
            </form>
          </div>
          <div className='right-content'>
            <ContactItem icon={phone} title={'Phone'} contact1={'+33 6 53 34 23 44'} contact2={'+33 6 34 43 23 01'} />
            <ContactItem icon={email} title={'Contact'} contact1={'+33 6 53 34 23 44'} contact2={'+33 6 34 43 23 01'} />
            <ContactItem icon={location} title={'Address'} contact1={'Paris'} contact2={'France'} />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  )
}

const ContactPageStyled = styled.div`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;

    .right-content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }

    .form {
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          color: var(--white-color);
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 .5rem;
          color: inherit;
        }
        
        input {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          height: 50px;
          padding: O 15px;
          width: 100%;
          color: inherit;
        }

        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          width: 100%;
          color: inherit;
          padding: .8rem 1rem;
        }
        .contact-title {
          h4 {
            color: var(--white-color);
            padding: 1rem 0;
            font-size: 1.8rem;
          }
        }
      }
    }

  }
`

export default ContactPage
