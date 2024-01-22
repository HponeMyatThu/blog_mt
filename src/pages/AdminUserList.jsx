import UserList from 'src/components/admin/UserList';
import React, { useEffect, useState } from 'react';
import NextPrevPageBtn from 'src/components/admin/NextPrevPageBtn';
import { useMutation, useQuery } from 'react-query';
import { get_all_users } from 'src/api/index';
import Model from 'src/components/admin/Model';
import PageSize from 'src/components/admin/PageSize';
import { make_active_user, make_inactive_user } from 'src/api/index';
import toast from 'react-hot-toast';
import Navbar from 'src/components/admin/Navbar';

const AdminUserList = () => {
  const [nextPrev, setNextPrev] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [dataResponse, SetDataResponse] = useState();
  const [id, SetId] = useState('');
  console.log('🚀 ~ AdminUserList ~ id:', id);
  const [basicModal, setBasicModal] = useState(false);

  const { data, stauts, error, refetch } = useQuery({
    queryKey: `users${nextPrev}${pageSize}`,
    queryFn: () => get_all_users(`?page=${nextPrev}&pageSize=${pageSize}`),
  });

  const toggleOpen = para => {
    SetId(para);
    setBasicModal(!basicModal);
  };

  const handleNextClick = () => {
    setNextPrev(prev => prev + 1);
  };

  const handlePrevClick = () => {
    setNextPrev(prev => prev - 1);
  };

  useEffect(() => {
    SetDataResponse(data?.data);
    stauts === 'success' ? (
      SetDataResponse(data?.data)
    ) : stauts === 'loading' ? (
      <div>loading...</div>
    ) : (
      <div>{error}</div>
    );
  }, [data, stauts, error, nextPrev]);

  const handlePageSizeChange = event => {
    setPageSize(Number(event.target.value));
  };

  const activeMutation = useMutation(make_active_user, {
    onSuccess: () => {
      toast.success('Successfully active');
      setBasicModal(false);
      refetch();
    },
    onError: error => {
      console.error('Error in handleActive:', error);
    },
  });

  const inactiveMutation = useMutation(make_inactive_user, {
    onSuccess: () => {
      toast.success('Successfully inactive');
      setBasicModal(false);
      refetch();
    },
    onError: error => {
      console.error('Error in handleInactive:', error);
    },
  });

  const handleActive = async () => {
    try {
      activeMutation.mutate({ id });
      setBasicModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInactive = async () => {
    try {
      inactiveMutation.mutate({ id });
      setBasicModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar title='User-list' />
      <Model
        lblActive='Active'
        lblInactive='Inactive'
        basicModal={basicModal}
        toggleOpen={toggleOpen}
        setBasicModal={setBasicModal}
        handleActive={handleActive}
        handleInactive={handleInactive}
        id={id}
      />
      <PageSize
        style='d-flex justify-content-end mx-5 my-5'
        pageSize={pageSize}
        handleClick={handlePageSizeChange}
      />
      <UserList
        pageNo={nextPrev}
        pageSize={pageSize}
        toggleOpen={toggleOpen}
        dataResponse={dataResponse}
      />
      <NextPrevPageBtn
        handleNext={handleNextClick}
        handlePrev={handlePrevClick}
        pageNo={nextPrev}
      />
    </>
  );
};

export default AdminUserList;
