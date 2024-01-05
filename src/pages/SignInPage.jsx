import { Col, Container, Row } from 'react-bootstrap';
import Photo from 'src/components/SignIn/Photo';
import TextInput from 'src/components/SignIn/TextInput';
import React from 'react';
import TitleComponent from 'src/components/Global/TitleComponent';

const SignInPage = () => {
  return (
    <>
      <Container>
        <Row className='position-relative'>
          <TitleComponent
            Text='logo'
            className='position-absolute'
            style={{ left: '1rem', top: '1rem', fontWeight: 'bold' }}
          />
          <Col sm={6} >
            <Photo/>
          </Col>
          <Col sm={1}></Col>
          <Col sm={5}>
            <TextInput />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignInPage;
