import React from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import image from 'src/assets/images/image 2.png';
import './AdminNavbar.css';
import { Icon } from '@iconify/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { store } from 'src/features/store';
import { useDispatch } from 'react-redux';
import { signOut } from 'src/features/Slice/userSlice';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    navigate('/sign-in');
    dispatch(signOut());
  };

  const arrayList = [
    {
      id: 1,
      title: 'Dashboard',
      icon: 'mdi:view-dashboard',
      link: '/admin/dashboard',
      className: 'p-3 cursor-pointer hover-effect d-flex gap-3',
      active: true,
    },
    {
      id: 2,
      title: 'BlogList',
      icon: 'mdi:clipboard-text-multiple',
      link: '/admin/blog-list',
      className: 'p-3 cursor-pointer hover-effect d-flex gap-3',
      active: false,
    },
    {
      id: 3,
      title: 'UserList',
      icon: 'mdi:account-group',
      link: '/admin/user-list',
      className: 'p-3 cursor-pointer hover-effect d-flex gap-3',
      active: false,
    },
    {
      id: 4,
      title: 'Admin Management',
      icon: 'mdi:account-group-outline',
      link: '/admin/admin-management',
      className: 'p-3 cursor-pointer hover-effect d-flex gap-3',
      active: false,
    },
    {
      id: 5,
      title: 'Category',
      icon: 'mdi:clipboard-text-multiple',
      link: '/admin/category',
      className: 'p-3 cursor-pointer hover-effect d-flex gap-3',
      active: false,
    },
    {
      id: 6,
      title: 'BlockList',
      icon: 'mdi:account-cancel',
      link: '/admin/block-list',
      className: 'p-3 cursor-pointer hover-effect d-flex gap-3',
      active: false,
    },
  ];

  return (
    <>
      <div className='d-flex flex-column h-100 bg-white pt-1 gap-4 shadow-lg'>
        <div className='text-primary text-center'>
          <h1>Blog Logo</h1>
        </div>

        <div className='d-flex w-75 mx-auto'>
          <div className='d-flex flex-column gap-3 '>
            {arrayList.map(item => (
              <>
                <div
                  onClick={e => {
                    e.preventDefault();
                    return navigate(item.link);
                  }}
                  className={`${item.className} ${
                    location.pathname === item.link ? 'active' : ''
                  }`}
                >
                  <Icon icon={item.icon} width='30px' />
                  <p className='my-auto'>{item.title}</p>
                </div>
              </>
            ))}
            <div
              className='p-3 cursor-pointer hover-effect d-flex gap-3'
              onClick={e => handleClick(e)}
            >
              <Icon icon='mdi:logout' width='30px' />
              <p className='my-auto'>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
