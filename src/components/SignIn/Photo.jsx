import React from 'react'
import { Card } from 'react-bootstrap'
import image from "../../assets/images/unsplash_Dmg0cltK0VA.png"

const Photo = () => {
  return (
    <Card border='0' className='rounded-0'>
        <Card.Img className='w-75 mx-auto' variant='top' src={image} />
      </Card>
  )
}

export default Photo