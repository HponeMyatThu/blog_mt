import React from 'react';
import { Card } from 'react-bootstrap';
import image from 'src/assets/images/unsplash_Dmg0cltK0VA.png';
import "./Photo.css";

const Photo = () => {
  return (
    <Card
      border='0'
      className='rounded-0 d-flex justify-content-center align-items-center'
    >
      <Card.Img
        id="img"
        className='w-100'
        variant='top'
        src={image}
        style={{zIndex: '1'}}
        // style={{ height: '100vh' }}
      />
    </Card>
  );
};

export default Photo;
