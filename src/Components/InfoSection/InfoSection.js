import React from 'react'
import styled from 'styled-components'
import './InfoSection.css'

const ColmnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  color: #000;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem)
    
  }

  p {
    margin-bottom: 2rem;
  }
`
const ColmnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`


const InfoSection = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image }) => {
  return (
    <div className='Section'>
      <div className='Container'>
        <ColmnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <button to='/homes'>{buttonLabel}</button>
        </ColmnLeft>
        <ColmnRight reverse={reverse}>
          <img src={image} />
        </ColmnRight>
      </div>
    </div>
  
  )
}

export default InfoSection