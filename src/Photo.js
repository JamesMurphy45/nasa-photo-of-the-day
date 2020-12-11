import React from 'react'
import styled from "styled-components"

const Photo = (props) => {
    const {photo} = props
  return (
    <StyledPhoto src={photo} alt="nasa pic of the day"/>
  )

}

const StyledPhoto = styled.img`
  width: 80%;
  justify-content:center;

  @media (max-width: 550px) {
    width: 100%;
  }
`;



export default Photo
