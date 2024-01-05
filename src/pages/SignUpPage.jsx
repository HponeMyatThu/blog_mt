import Photo from 'src/components/SignIn/Photo'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TextInput from 'src/components/SignUp/TextInput'

const SignUpPage = () => {
  return (
    <Container>
        <Row >
          <Col sm={6}>
            <Photo />
          </Col>
          <Col sm={1}>
          </Col>
          <Col sm={5}>
            <TextInput />
          </Col>
        </Row>
      </Container>
  )
}

export default SignUpPage