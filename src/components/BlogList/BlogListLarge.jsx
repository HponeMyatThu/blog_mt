import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import image from 'src/assets/images/image 2.png';
import { useQuery } from 'react-query';
import { get_all_blogs } from 'src/api/index';
import { get_photo } from 'src/api/index';

const BlogListLarge = () => {
  const [serverBlogData, setServerBlogData] = useState();

  const {
    data: blogsData,
    status: blogsStatus,
    error: blogsError,
  } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => get_all_blogs('?page=1&pageSize=10'),
  });

  useEffect(() => {
    setServerBlogData(blogsData)
  },[blogsData, blogsStatus, blogsError]);

  const photoName = serverBlogData && serverBlogData.data.results.content[0].url_list[0].name;

  return (
    <>
      <Card border='0' className='w-75 mx-auto  rounded-0'>
        <Card.Img variant='top' className='pt-3' src={`http://localhost:8080/api/v1/photo/${photoName}`} />
        <Card.Body>
          <Card.Text className='text-center'>
            <h1 className='mx-auto'>
              {' '}
              A few words about this blog platform, Ghost, and how this site was
              made{' '}
            </h1>
          </Card.Text>
          <Card.Text className='text-center'>
            <p className='small mx-5 text-secondary'>
              {' '}
              Why Ghost (& Figma) instead of Medium, WordPress, or other
              options?{' '}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogListLarge;
