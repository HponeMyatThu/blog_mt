import BlogListCard from '../BlogList/BlogListCard';
import React from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from 'react-bootstrap';
import image from 'src/assets/images/image 2.png';
import profilePic from 'src/assets/images/Mask Group.png';
import Pic from 'src/assets/images/Rectangle 8.png';
import { Icon } from '@iconify/react';

const Articles = () => {
  const array = [
    {
      title: 'title1',
      text: 'text1',
    },
    {
      title: 'title2',
      text: 'text2',
    },
    {
      title: 'title3',
      text: 'text3',
    },
    {
      title: 'title4',
      text: 'text4',
    },
    {
      title: 'title5',
      text: 'text5',
    },
  ];
  return (
    <>
      

      

      

      <div className='w-50 h-100 mx-auto'>
        <Container>
          <Row>
            <Col sm={2}>
              <Image src={profilePic} />
            </Col>
            <Col sm={6}>
              <div>
                <p className='mb-0'>Mika MAtikainen</p>
                <p>Apr 15, 2020 · 4 min read</p>
              </div>
            </Col>
            <Col sm={2}></Col>
            <Col
              sm={1}
              className='border d-flex justify-content-center align-items-center'
            >
              <Icon icon='ion:logo-facebook' width='30px' />
            </Col>
            <Col
              sm={1}
              className='border d-flex justify-content-center align-items-center'
            >
              <Icon icon='ion:logo-twitter' width='30px' />
            </Col>
          </Row>
        </Container>
        </div>

        <div className='w-75 mx-auto mt-5'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra.{' '}
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui
            molestie, molestie lectus eu, semper lectus.{' '}
          </p>
          <h3 className='mt-5'>Next on the pipeline</h3>
          <p className='mt-4'>
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.{' '}
          </p>
          <p>
            Morbi efficitur auctor metus, id mollis lorem pellentesque id.
            Nullam posuere maximus dui et fringilla.{' '}
          </p>
        </div>

        <div className='w-100'>
          <Image src={Pic} className='w-100' />
        </div>

        <div className='w-75 mx-auto'>
          <p>
            Image caption centered this way and I’ll make this a bit longer  to
            indicate the amount of line-height.{' '}
          </p>
          <p>
            Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Aliquam quis posuere ligula.{' '}
          </p>
          <p>
            In eu dui molestie, molestie lectus eu, semper lectus. Proin at
            justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi
            arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id.
            Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
          </p>
          <p>A list looks like this:</p>
          <ul>
            <li>First item in the list</li>
            <li>
              Second item in the list lorem ipsum dolor sit amet nunc felis
              dolor lorem ipsum sit amet
            </li>
            <li>Third item in the list</li>
          </ul>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula.{' '}
          </p>
          <p>
            Thanks for reading, <br></br> Mika
          </p>
        </div>

        <div className='flex'>
          <Container>
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
        <div className='w-75 mt-4 text-center'>
          <p>
            Tags:{' '}
            <span className='textDecorationLine: Underline'>
              {' '}
              product design
            </span>
            , <span className='textDecorationLine: Underline'> culture</span>
          </p>
        </div>
        <div className='d-flex border-top'>
          <Image src={profilePic} className='h-50 mt-3' />
          <p className='mt-3'>
            Mika Matikainen is a Design Founder & Advisor, Berlin School of
            Creative Leadership Executive MBA participant, Zippie advisor, Wolt
            co-founder, and Nordic Rose stakeholder.{' '}
          </p>
        </div>
      </div>
      <hr style={{ width: '100%', height: '2px', background: 'black' }}></hr>
      <div className='w-75 mx-auto'>
        <h1 className='text-center'>What to read next</h1>
        <Container>
          <>
            <Row key='1'>
              <Col sm={4}>
                <BlogListCard title='title3' text='text3' />{' '}
              </Col>
              <Col sm={4}>
                <BlogListCard title='title2' text='text2' />{' '}
              </Col>
              <Col sm={4}>
                <BlogListCard title='title 1' text='text1' />{' '}
              </Col>
            </Row>
            <Row key='2'>
              <Col sm={4}>
                <BlogListCard title='title3' text='text3' />{' '}
              </Col>
              <Col sm={4}>
                <BlogListCard title='title2' text='text2' />{' '}
              </Col>
              <Col sm={4}>
                <BlogListCard title='title 1' text='text1' />{' '}
              </Col>
            </Row>
          </>
        </Container>
      </div>

      <Container>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <div
              style={{
                width: '100%',
                margin: '0px auto',
                height: '10px',
                background: 'black',
                transform: 'translateY(49px)',
              }}
            ></div>
            <div className='mx-auto border border-dark p-5 mt-5 border-radius-0'>
              <h3 className='text-center'>Sign up for the newsletter</h3>
              <p className='text-center'>
                If you want relevant updates occasionally, sign up for the
                private newsletter. Your email is never shared.{' '}
              </p>
              <div className='d-flex'>
                <Form.Control
                  type='text'
                  placeholder='Enter Your Email...'
                  style={{ borderRadius: '0' }}
                  className='text-white border border-dark'
                />
                <Button
                  variant='dark'
                  style={{ borderRadius: '0' }}
                  className='w-25 bounded-0'
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Articles;
