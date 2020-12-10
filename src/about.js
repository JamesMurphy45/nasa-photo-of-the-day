import React from 'react'

const About = props =>{
    const { about } = props

    return(
        <div className='about'>
            <p>'{about}'</p>
        </div>
    )
}


export default About