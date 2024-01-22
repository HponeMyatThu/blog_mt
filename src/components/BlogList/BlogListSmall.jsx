import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import BlogListCard from 'src/components/BlogList/BlogListCard';
import { get_all_blogs } from 'src/api/index';

const Small = () => {
  const { data, status, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => get_all_blogs('?page=1&pageSize=10'),
  });

  if (status !== 'success') {
    return <div>Loading...</div>;
  }

  // const array = data && data.data.results.content;
  // console.log('🚀 ~ Small ~ array:', array[0].url_list[0]);

  const array = data && data.data.data.content;
  
  return (
    <Container>
      {array &&
        array.map((item, index) => (
          <Row key={index}>
            <Col sm={2}></Col>
            <Col sm={4}>
              <BlogListCard
                title={item.title}
                text={item.text}
                img={`http://localhost:8080/api/v1/photo/${item && item.url_list[0] && item.url_list[0].name}`}
              />
            </Col>
            {index + 1 < array.length && (
              <Col sm={4}>
                <BlogListCard
                  title={array[index + 1].title}
                  text={array[index + 1].text}
                  img={`http://localhost:8080/api/v1/photo/${array && array[index + 1].url_list[0] && array[index + 1].url_list[0].name}`}
                />
                {console.log(array && array[index + 1].url_list[0] && array[index + 1].url_list[0].name)}
              </Col>
            )}
            <Col sm={2}></Col>
          </Row>
        ))}
    </Container>
  );
};

export default Small;
