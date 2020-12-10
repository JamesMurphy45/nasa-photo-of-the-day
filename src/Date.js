import React from 'react'

const Date = props =>{
    const { date } = props

    return(
        <div className='date'>
            <p>'{date}'</p>
        </div>
    )
}


export default Date