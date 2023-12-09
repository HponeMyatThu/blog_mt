import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlogListCard from 'src/components/BlogList/BlogListCard'

const Small = () => {
  return (
    <Container>
    <Row>
      <Col sm={2}></Col>
      <Col sm={4}><BlogListCard/></Col>
      <Col sm={4}><BlogListCard/></Col>
      <Col sm={2}></Col>
    </Row>
    <Row>
      <Col sm={2}></Col>
      <Col sm={4}><BlogListCard/></Col>
      <Col sm={4}><BlogListCard/></Col>
      <Col sm={2}></Col>
    </Row>
    <Row>
      <Col sm={2}></Col>
      <Col sm={4}><BlogListCard/></Col>
      <Col sm={4}><BlogListCard/></Col>
      <Col sm={2}></Col>
    </Row>
    <Row>
      <Col sm={2}></Col>
      <Col sm={4}><BlogListCard/></Col>
      <Col sm={4}><BlogListCard/></Col>
      <Col sm={2}></Col>
    </Row>
  </Container>
  )
}

export default Small