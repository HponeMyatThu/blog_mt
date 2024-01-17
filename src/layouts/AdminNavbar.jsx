import React from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import image from 'src/assets/images/image 2.png';
import './AdminNavbar.css';
import { Icon } from '@iconify/react';

const AdminNavbar = () => {
  return (
    <>
      <div className='d-flex flex-column h-100 bg-white pt-1 gap-5 shadow-lg'>
        <div className='text-primary text-center'>
          <h1>Blog Logo</h1>
        </div>

        <div className='w-100'>
          <div className='d-flex flex-column gap-3'>
            <div className='p-3 cursor-pointer hover-effect active d-flex gap-3'>
              <Icon icon='mdi:view-dashboard' width='30px' />
              <p className='my-auto'>DashBoard</p>
            </div>
            <div className='p-3 cursor-pointer hover-effect d-flex gap-3'>
              <Icon icon='mdi:clipboard-text-multiple' width='30px' />
              <p className='my-auto'>Blogs List</p>
            </div>
            <div className='p-3 cursor-pointer hover-effect d-flex gap-3'>
              <Icon icon='mdi:account-group' width='30px' /> 
              <p className='my-auto'>User List</p>
            </div>
            <div className='p-3 cursor-pointer hover-effect d-flex gap-3'>
              <Icon icon='mdi:account-group-outline' width='30px' />
              <p className='my-auto'>Admin Management</p>
            </div>
            <div className='p-3 cursor-pointer hover-effect d-flex gap-3'>
              <Icon icon='mdi:clipboard-text-multiple' width='30px' /> 
              <p className='my-auto'>Category</p>
            </div>
            <div className='p-3 cursor-pointer hover-effect d-flex gap-3'>
              <Icon icon='mdi:account-cancel' width='30px' /> 
              <p className='my-auto'>Block List</p>
            </div>
            <div className='p-3 cursor-pointer hover-effect d-flex gap-3'>
              <Icon icon='mdi:logout' width='30px' /> 
              <p className='my-auto'>Logout</p>
            </div>
          </div>
        </div>

        <div className='w-100 h-25 d-flex'>
          <div className='w-25 h-100 m-3'>
            <img className='w-75 h-75' src={image} alt='img' />
          </div>
          <div>
            <p>
              <b>Aung Aung</b>
              <br />
              Admin
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
