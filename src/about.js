import React from 'react'
import styled from "styled-components"

const About = props =>{
    const { about } = props

    return(
        <StyledAbout className='about'>
            <p>'{about}'</p>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
 width: 80%;
 display:flex;
justify-content:center;
margin-left: 10%;
color:orangered;
background-color:black;

  @media (max-width: 550px) {
    width: 100%;
  }
`


export default About