import BlogDetailComponent from 'src/components/Blog/BlogDetailComponent';
import ImageList from 'src/components/Blog/ImageList';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { get_single_blog } from 'src/api/index';

const BlogDetailPage = () => {
  const [dataServer, SetDataServer] = useState();
 
  const location = useLocation();
  const id = location.state;

  const { data, status, error } = useQuery({
    queryKey: [`Blogs${id}`],
    queryFn: () => get_single_blog(id),
  });

  useEffect(() => {
    SetDataServer(data?.data);
    status ==='success'? (
        SetDataServer(data?.data)
    ) : status === 'loading'? (
      <div>loading...</div>
    ) : (
      <div>{error}</div>
    );
  },[data, status, error] )

  return (
    <>
      <BlogDetailComponent dataServer={dataServer} />
      <ImageList dataServer={dataServer}/>
    </>
  );
};

export default BlogDetailPage;
