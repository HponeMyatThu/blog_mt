import { delete_blog } from 'src/api/index';
import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const BlogDetailComponent = ({ dataServer }) => {
  const navigate = useNavigate();

  const deleteMutation = useMutation(delete_blog, {
    onSuccess: () => {
      navigate('/profile');
      console.log('successfully deleted');
    },
    onError: error => {
      console.error('Error in handleDelete:', error);
    },
  })

  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteMutation.mutate({ id });
  }
  return (
    <>
      <div className='w-100 d-flex mx-5'>
        <div className='w-50 h-50 px-5'>
          <div className='w-100 d-flex'>
            <div className='w-50'>
              <p>Title</p>
            </div>
            <div className='w-50'>
              <p>{dataServer?.title}</p>
            </div>
          </div>
          <div className='d-flex w-100'>
            <div className='w-50'>
              <p>Category</p>
            </div>
            <div className='w-50'>
              {dataServer?.category?.map(item => (
                <p key={item?._id}>{item?.name}</p>
              ))}
            </div>
          </div>
          <div>
            <button className='w-100 bg-warning text-white border-0 py-2 rounded-2 my-2'>
              Update
            </button>
          </div>
          <div>
            <button onClick={(e) => handleDelete(e, dataServer._id)} className='w-100 bg-danger text-white border-0 py-2 rounded-2 my-2'>
              Delete
            </button>
          </div>
        </div>
        <div className='w-50 d-flex flex-column mx-5 '>
          <div className='d-flex w-100'>
            <div className='w-50'>Content</div>
            <div className='w-50'>{dataServer?.content}</div>
          </div>
          <div className='pt-4'>Description</div>
          <div>
            <textarea
              name='Here is your description'
              id='Description'
              className='rounded-3'
              cols='60'
              rows='10'
              value={dataServer?.description}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailComponent;
