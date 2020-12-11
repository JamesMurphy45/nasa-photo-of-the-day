import React from 'react'
import styled from "styled-components"

const Date = props =>{
    const { date } = props

    return(
        <div className='date'>
            <StyledDate>'{date}'</StyledDate>
        </div>
    )
}

const StyledDate = styled.p`
font-style:italic;
color:orangered;
`

export default Date