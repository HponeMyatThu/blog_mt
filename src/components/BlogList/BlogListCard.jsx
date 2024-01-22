import React from 'react';
import { Card } from 'react-bootstrap';
// import image from 'src/assets/images/image 2.png';

const BlogListCard = ({title, text, img}) => {
  return (
    <Card border='0' className='rounded-0 my-3'>
      <Card.Img className='pt-2' variant='top' src={img} />
      <Card.Text className='small text-center'>
        {title}
      </Card.Text>
    </Card>
  );
};

export default BlogListCard;
