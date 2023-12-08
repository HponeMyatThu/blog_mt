import React from 'react';
import { Card } from 'react-bootstrap';
import image from 'src/assets/images/image 2.png';

const BlogListLarge = () => {
  return (
    <>
      <Card border='0' className='w-75 mx-auto  rounded-0'>
        <Card.Img variant='top' className='pt-3' src={image} />
        <Card.Body>
          <Card.Text className='text-center' >
            <h1 className='mx-auto'> A few words about this blog platform, Ghost, and how this site was made </h1>
          </Card.Text>
          <Card.Text className='text-center' >
            <p className='small mx-5 text-secondary'> Why Ghost (& Figma) instead of Medium, WordPress or other options? </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogListLarge;
