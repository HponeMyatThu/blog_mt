import { Col, Container, Row } from 'react-bootstrap';
import Photo from '../components/SignIn/Photo';
import TextInput from '../components/SignIn/TextInput';
import React from 'react';

const SignInPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <Photo />
          </Col>
          <Col sm={6}>
            <TextInput />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignInPage;
