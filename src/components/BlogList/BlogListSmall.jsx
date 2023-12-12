import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogListCard from 'src/components/BlogList/BlogListCard';

const Small = () => {
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
    <Container>
      {array.map((item, index) => (
        <Row key={index}>
          <Col sm={2}></Col>
          
          <Col sm={4}>
            <BlogListCard title={item.title} text={item.text} />
          </Col>
          <Col sm={4}>
            <BlogListCard title={item.title} text={item.text} />
          </Col>
          <Col sm={2}></Col>
        </Row>
      ))}
    </Container>
  );
};

export default Small;
