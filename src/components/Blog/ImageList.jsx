import React from 'react';

const ImageList = ({ dataServer }) => {
  return (
    <>
      <div className='mx-5'>
        <hr />
      </div>
      <div className='w-100 d-flex flex-wrap'>
        {dataServer?.url_list?.map((item, index) => (
          <div className='w-25 p-5'>
            <img
              className='w-100 d-flex mx-auto '
              src={`http://localhost:8080/api/v1/photo/${item?.name}`}
              alt=''
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageList;
