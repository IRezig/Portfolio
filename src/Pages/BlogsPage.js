import React from 'react'
import Blogs from '../data/Blogs'
import Title from "../Components/Title"
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsPageStyled>
      <Title title={'Blogs'} span={'Blogs'} />
      <InnerLayout className="blogs">
        {
          Blogs.map(blog => {
            return <div key={blog.id} className="blog-item">
              <div className="image">
                <img src={blog.image} alt={`blog-`+blog.id} />
              </div>
              <div className="title">
                <a href={blog.link}> {blog.title} </a>
              </div>
            </div>
          })
        }
      </InnerLayout>
      </BlogsPageStyled>
    </MainLayout>
  )
}

const BlogsPageStyled = styled.div`
  .blogs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;

    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 2rem 1rem;
    }
    
    .image {
      width: 100%;
      overflow: hidden;
      padding-bottom: .5rem;
      img {
        height: 90%;
        width: 100%;
        object-fit: cover;
        
        transition: all .4s ease-in-out;
        &:hover {
          color: var(--primary-color);
          transform: scale(1.1);
        }
      }
    }

    .title {
      a {
        font-size: 1.6rem;
        padding: 5rem 0;
        cursor: pointer;
        color: var(--white-color);
        transition: all .4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`

export default BlogsPage
