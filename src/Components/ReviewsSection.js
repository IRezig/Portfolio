import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import ReviewItem from './ReviewItem'
import Title from './Title'

function ReviewsSection() {
  return (
    <ReviewSectionStyled>
      <Title title={'Reviews'} span={'Reviews'} />
      <InnerLayout>
        <div className='reviews'>
          <ReviewItem 
            text={'Irure amet ullamco ut mollit velit anim veniam labore.'} 
          />
          <ReviewItem 
            text={'Irure amet ullamco ut mollit velit anim veniam labore.'} 
          />
        </div>
      </InnerLayout>
    </ReviewSectionStyled>
  )
}
const ReviewSectionStyled = styled.section`
  .reviews {
    display: flex;
  }
`

export default ReviewsSection
