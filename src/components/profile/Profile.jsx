import React from 'react';
import img from 'src/assets/images/Mask Group.png';

const Profile = ({ username, email, status }) => {
  return (
    <>
      <div className='d-flex shadow-lg mt-3 rounded-3 w-50 mx-auto'>
        <div className='w-50 mt-5 d-flex flex-column justify-content-center align-items-center'>
          <img src={img} alt='images' className='w-25' />
          <p className='d-flex my-auto p-5'>USERNAME : {username}</p>
        </div>
        <div className='w-50 d-flex flex-column justify-content-end  align-content-center'>
          <div className='d-flex justify-content-start'>
            <p className='d-flex justify-content-start w-25'>STATUS</p>
            <p className='w-75'>: {status}</p>
          </div>
          <div className='d-flex justify-content-start mb-4 py-2'>
            <p className='d-flex justify-content-start w-25'>EMAIL </p>
            <p className='w-75'>: {email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
