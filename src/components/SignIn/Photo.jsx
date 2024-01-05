import React from 'react';
import { Card } from 'react-bootstrap';
import image from 'src/assets/images/unsplash_Dmg0cltK0VA.png';
import './Photo.css';

const Photo = () => {
  return (
    <Card
      border='0'
      className='rounded-0 d-flex positon-relative justify-content-center align-items-center'
    >
      <h2
        className='position-absolute'
        style={{ zIndex: 1000, top: 10, left: 50 }}
      >
        Logo
      </h2>
      <Card.Img
        id='img'
        className='w-100'
        variant='top'
        src={image}
        style={{ zIndex: '1' }}
      />
    </Card>
  );
};

export default Photo;
