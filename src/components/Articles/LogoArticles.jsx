import { Icon } from '@iconify/react';
import React from 'react';
import profilePic from 'src/assets/images/Mask Group.png';
import { Col, Container, Image, Row } from 'react-bootstrap';

const LogoArticles = () => {
  return (
    <>
      <div className='flex w-50 mx-auto'>
        <Container className='w-75'>
          <Row>
            <Col
              sm={6}
              className='border d-flex justify-content-center align-items-center py-3'
            >
              <Icon icon='ion:logo-facebook' width='30px' />{' '}
              <p className='my-auto'>Share on Facebook</p>
            </Col>
            <Col
              sm={6}
              className='border d-flex justify-content-center align-items-center py-3'
            >
              <Icon icon='ion:logo-twitter' width='30px' />{' '}
              <p className='my-auto'>Share on Twitter</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='w-50 mt-4 mx-auto text-center'>
        <p>
          Tags:{' '}
          <span className='textDecorationLine: Underline'> product design</span>
          , <span className='textDecorationLine: Underline'> culture</span>
        </p>
      </div>
      <div className='w-50 mx-auto'>
        <div className='w-75 mx-auto d-flex border-top'>
          <Image src={profilePic} className='h-50 mt-3' />
          <p className='mt-3'>
            Mika Matikainen is a Design Founder & Advisor, Berlin School of
            Creative Leadership Executive MBA participant, Zippie advisor, Wolt
            co-founder, and Nordic Rose stakeholder.{' '}
          </p>
        </div>
        <hr style={{ width: '100%', height: '2px', background: 'black' }}></hr>
        <h1 className='text-center'>What to read next</h1>
      </div>
    </>
  );
};

export default LogoArticles;
