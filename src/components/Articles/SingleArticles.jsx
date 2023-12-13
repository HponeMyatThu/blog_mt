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

const SingleArticles = () => {
  return (
    <>
      <div className='mx-5 text-center'>
        <h1 className='w-75 mx-auto'>
          A few words about this blog platform, Ghost, and how this site was
          made
        </h1>
        <div className='w-50 mx-auto'>
          <p className='secondary small'>
            Why Ghost (& Figma) instead of Medium, WordPress or other options?
          </p>
        </div>
      </div>

      <Card border='0' className='rounded-0 my-3'>
        <Card.Img className='pt-2 w-100 mx-auto' variant='top' src={image} />
      </Card>

      <div
        style={{
          width: '50%',
          margin: '20px auto',
          height: '2px',
          background: 'black',
        }}
      ></div>

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

      <div className='w-50 h-100 mx-auto'>
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
      </div>

      <div className='w-50 h-100 mx-auto'>
        <div className='w-100'>
          <Image src={Pic} className='w-100' />
        </div>
      </div>

      <div className='w-50 h-100 mx-auto'>
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
      </div>
    </>
  );
};

export default SingleArticles;
