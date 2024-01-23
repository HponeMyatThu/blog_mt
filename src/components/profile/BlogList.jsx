import React from 'react';
import { Table } from 'react-bootstrap';
import './BlogList.css'
import { useNavigate } from 'react-router-dom';

const BlogList = ({ dataResponse }) => {
  const navigate = useNavigate();

  const handleClick = (e, id) => {
    e.preventDefault();
    navigate(`/detail-blog`, {state: id});
  }

  return (
    <>
      <div className='mx-5 shadow-lg rounded-3 '>
        <div className='d-flex justify-content-between '>
          <div className='px-5 py-3'>
            <h5>Blog-List</h5>
          </div>
          <div className='px-5 py-3'>
            <h5>Total Number of Blog : {dataResponse?.length} </h5>
          </div>
        </div>
        <div className='mb-0'>
          <div className='d-flex border-bottom'>
            <p className='w-25 mt-3 d-flex justify-content-center  align-content-center '>
              <b>Title</b>
            </p>
            <p className='w-25 mt-3 d-flex justify-content-center  align-content-center '>
              <b>Date</b>
            </p>
            <p className='w-25 mt-3 d-flex justify-content-center  align-content-center '>
              <b>Category</b>
            </p>
            <p className='w-25 mt-3 d-flex justify-content-center  align-content-center '>
              <b>Status</b>
            </p>
          </div>
          {dataResponse?.map((item, index) => (
            <div className='d-flex' key={item._id}>
              <p onClick={e => handleClick(e, item._id)} className='w-25 d-flex justify-content-center  align-content-center text-primary cursor-pointer under-line' >
                {item.title}
              </p>
              <p className='w-25 d-flex justify-content-center  align-content-center '>
                {new Date(item.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className='w-25 d-flex justify-content-center  align-content-center '>
                {item?.category?.map(categoryItem => (
                  <span
                    key={categoryItem.id}
                    className='shadow-lg bg-white mx-1 px-2 py-1'
                    style={{ border: '1px solid black' }}
                  >
                    {categoryItem.name}
                  </span>
                ))}
              </p>
              <p
                className={`${'w-25 d-flex justify-content-center  align-content-center '} ${
                  item.status === 'PENDING'
                    ? 'text-warning'
                    : item.status === 'APPROVED'
                    ? 'text-primary'
                    : 'text-danger'
                }`}
              >
                {item.status === 'PENDING'
                  ? 'Pending'
                  : item.status === 'APPROVED'
                  ? 'Approved'
                  : 'Rejected'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
