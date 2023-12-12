import BlogListCard from 'src/components/BlogList/BlogListCard'
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const ReadArticlesList = () => {
  return (
    <>
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
  )
}

export default ReadArticlesList