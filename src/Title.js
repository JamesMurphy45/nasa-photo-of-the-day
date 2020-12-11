import React from 'react'
import styled from "styled-components"

const Title = props =>{
    const { title } = props

    return(
        <StyledTitle className='title'>
            <h1>{title}</h1>
        </StyledTitle>
    )
}

const StyledTitle = styled.div`
color: silver;

justify-content:center;

&:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
`;

export default Title