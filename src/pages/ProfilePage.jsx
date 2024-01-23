import Profile from 'src/components/profile/Profile';
import React, { useEffect, useState } from 'react';
import ButtonComponent from 'src/components/Global/ButtonComponent';
import BlogList from 'src/components/profile/BlogList';
import NextPrevPageBtn from 'src/components/admin/NextPrevPageBtn';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { get_all_blogs } from 'src/api/index';
import { useNavigate } from 'react-router';

const ProfilePage = () => {
  const navigate = useNavigate();

  const [dataResponse, SetDataResponse] = useState();
  const [nextPrev, setNextPrev] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const ID = useSelector(state => state.user?.user[1]?.user._id);
  const USERNAME = useSelector(state => state.user?.user[1]?.user?.username);
  const STATUS = useSelector(state => state.user?.user[1]?.user?.status);
  const EMAIL = useSelector(state => state.user?.user[1]?.user?.email);

  const { data, stauts, error, refetch } = useQuery({
    queryKey: `blogs${nextPrev}${pageSize}`,
    queryFn: () => get_all_blogs(`?page=${nextPrev}&pageSize=${pageSize}&creator=${ID}`),
  });

  useEffect(() => {
    SetDataResponse(data?.data?.data?.content);
    stauts === 'success' ? (
        SetDataResponse(data?.data?.data?.content)
    ) : stauts === 'loading' ? (
      <div>loading...</div>
    ) : (
      <div>{error}</div>
    );
  }, [data, stauts, error, nextPrev, pageSize]);

  const handleNextClick = () => {
    setNextPrev(prev => prev + 1);
  };

  const handlePrevClick = () => {
    setNextPrev(prev => prev - 1);
  };
  
  const handleCreateBlog = (e) => {
    e.preventDefault();
    navigate('/create-blog');
  }

  return (
    <>
      <Profile username={USERNAME} status={STATUS} email={EMAIL} />
      <div onClick={(e) => handleCreateBlog(e)} className='d-flex justify-content-end  align-content-end w-75 mx-auto my-3'>
        <ButtonComponent
          className='bg-warning border-0 mx-3 my-1 px-5 py-3 rounded-3 text-white'
          type='button'
          btnLabel='Create Blog'
        />
      </div>
      <BlogList dataResponse={dataResponse}/>
      <div className='mt-5'>
        <NextPrevPageBtn 
        handleNext={handleNextClick}
        handlePrev={handlePrevClick}
        pageNo={nextPrev}
        />
      </div>
    </>
  );
};

export default ProfilePage;
