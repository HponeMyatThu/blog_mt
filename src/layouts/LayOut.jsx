import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import NavbarLayout from './NavbarLayout';

const Layout = () => {
  return (
    <div className='h-screen w-screen'>
      <NavbarLayout />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
