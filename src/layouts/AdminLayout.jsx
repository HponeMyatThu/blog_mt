import React from 'react';
import AdminNavbar from './AdminNavbar';
import { Outlet } from 'react-router-dom';
import Navbar from 'src/components/admin/Navbar';
import { Col, Row } from 'react-bootstrap';

const AdminLayout = () => {
  return (
    <div>
      <Row className='m-0 p-0'>
        <Col className='m-0 p-0' lg={2}>
          <AdminNavbar />
        </Col>
        <Col className='m-0 p-0' lg={10}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default AdminLayout;
