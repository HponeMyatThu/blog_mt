import DashboardPieChart from 'src/components/admin/DashboardPieChart';
import React, { PureComponent, useEffect, useState } from 'react';
import Navbar from 'src/components/admin/Navbar';
import TableBlog from 'src/components/admin/TableBlog';
import NextPrevPageBtn from 'src/components/admin/NextPrevPageBtn';
import PageSize from 'src/components/admin/PageSize';
import Model from 'src/components/admin/Model';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useMutation, useQuery } from 'react-query';
import {
  make_approve_blog,
  make_reject_blog,
  get_all_blogs,
} from 'src/api/index';
import toast from 'react-hot-toast';

const AdminDashBoardPage = () => {
  const [nextPrev, setNextPrev] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [id, SetId] = useState('');
  const [dataResponse, SetDataResponse] = useState();
  const [basicModal, setBasicModal] = useState(false);

  const { data, stauts, error, refetch } = useQuery({
    queryKey: `blogs${nextPrev}${pageSize}`,
    queryFn: () => get_all_blogs(`?page=${nextPrev}&pageSize=${pageSize}`),
  });

  const {
    data: BlogData,
    status: BlogStatus,
    error: BlogError,
    refetch: BlogRefetch,
  } = useQuery({
    queryKey: ['data'],
    queryFn: () => get_all_blogs('?'),
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
  }, [data, stauts, error, nextPrev]);

  const handleNextClick = () => {
    console.log('next');
    setNextPrev(prev => prev + 1);
  };

  const handlePrevClick = () => {
    setNextPrev(prev => prev - 1);
  };

  const handlePageSizeChange = event => {
    setPageSize(Number(event.target.value));
  };

  const toggleOpen = para => {
    SetId(para);
    setBasicModal(!basicModal);
  };

  const approveMutation = useMutation(make_approve_blog, {
    onSuccess: () => {
      toast.success('Successfully approved');
      setBasicModal(false);
      refetch();
      BlogRefetch();
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
      BlogRefetch();
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

  return (
    <>
      <div>
        <Navbar title='Dashboard' />
        <Model
          basicModal={basicModal}
          toggleOpen={toggleOpen}
          setBasicModal={setBasicModal}
          handleApprove={handleApprove}
          handleReject={handleReject}
          id={id}
        />
        <DashboardPieChart BlogData={BlogData} />
        {/* <PageSize
          style='d-flex justify-content-end mx-5'
          pageSize={pageSize}
          handleClick={handlePageSizeChange}
        /> */}
        <TableBlog
          pageNo={nextPrev}
          pageSize={pageSize}
          toggleOpen={toggleOpen}
          dataResponse={dataResponse}
        />
        {/* <NextPrevPageBtn
          handleNext={handleNextClick}
          handlePrev={handlePrevClick}
          pageNo={nextPrev}
        /> */}
      </div>
    </>
  );
};

export default AdminDashBoardPage;
