import React from 'react'

const Photo = (props) => {
    const {photo} = props
  return (
    <img src={photo} alt="nasa pic of the day"/>
  )

}

export default Photo
