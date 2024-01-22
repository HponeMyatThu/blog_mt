import TableBlog from 'src/components/admin/TableBlog';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import {
  get_all_blogs,
  make_approve_blog,
  make_reject_blog,
} from 'src/api/index';
import Model from 'src/components/admin/Model';
import toast from 'react-hot-toast';
import PageSize from 'src/components/admin/PageSize';
import NextPrevPageBtn from 'src/components/admin/NextPrevPageBtn';
import Navbar from 'src/components/admin/Navbar';

const AdminBlogList = () => {
  const [nextPrev, setNextPrev] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [dataResponse, SetDataResponse] = useState();
  const [id, SetId] = useState('');
  const [basicModal, setBasicModal] = useState(false);

  const { data, stauts, error, refetch } = useQuery({
    queryKey: `blogs${nextPrev}${pageSize}`,
    queryFn: () => get_all_blogs(`?page=${nextPrev}&pageSize=${pageSize}`),
  });

  useEffect(() => {
    SetDataResponse(data);
    stauts === 'success' ? (
      SetDataResponse(data)
    ) : stauts === 'loading' ? (
      <div>loading...</div>
    ) : (
      <div>{error}</div>
    );
  }, [data, stauts, error, nextPrev, pageSize]);

  const toggleOpen = para => {
    SetId(para);
    setBasicModal(!basicModal);
  };

  const handlePageSizeChange = event => {
    setPageSize(Number(event.target.value));
  };

  const approveMutation = useMutation(make_approve_blog, {
    onSuccess: () => {
      toast.success('Successfully approved');
      setBasicModal(false);
      refetch();
      // BlogRefetch();
    },
    onError: error => {
      console.error('Error in handleApprove:', error);
    },
  });

  const rejectMutation = useMutation(make_reject_blog, {
    onSuccess: () => {
      toast.success('Successfully rejected');
      setBasicModal(false);
      refetch();
      // BlogRefetch();
    },
    onError: error => {
      console.error('Error in handleReject:', error);
    },
  });

  const handleApprove = async () => {
    try {
      approveMutation.mutate({ id });
      setBasicModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async () => {
    try {
      rejectMutation.mutate({ id });
      setBasicModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextClick = () => {
    setNextPrev(prev => prev + 1);
  };

  const handlePrevClick = () => {
    setNextPrev(prev => prev - 1);
  };

  return (
    <>
      <Navbar title='Blog-list' />
      <Model
        lblApprove='Approve'
        lblReject='Reject'
        basicModal={basicModal}
        toggleOpen={toggleOpen}
        setBasicModal={setBasicModal}
        handleApprove={handleApprove}
        handleReject={handleReject}
        id={id}
      />
      <PageSize
        style='d-flex justify-content-end mx-5 my-5'
        pageSize={pageSize}
        handleClick={handlePageSizeChange}
      />
      <TableBlog
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

export default AdminBlogList;
