import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import './TableBlog.css';

const TableBlog = ({ toggleOpen, dataResponse }) => {
  return (
    <div className='mx-5'>
      <Table striped bordered hover responsive className='custom-table'>
        <thead>
          <tr>
            <th colSpan={6}>Blog Status (Lastest 5 Blogs)</th>
          </tr>
          <tr>
            <th>User</th>
            <th>Date In</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataResponse &&
            dataResponse.data.data.content.map((item, index) => (
              <tr key={item._id}>
                <td>{item && item.creator && item.creator.username}</td>
                <td>
                  {new Date(item.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </td>
                <td className='d-flex justify-content-center'>
                  {item.category.map(categoryItem => (
                    <span
                      key={categoryItem.id}
                      className='shadow-lg bg-white mx-1 px-2 py-1'
                      style={{ border: '1px solid black' }}
                    >
                      {categoryItem.name}
                    </span>
                  ))}
                </td>
                <td
                  className={`${
                    item.status === 'PENDING'
                      ? 'Pending'
                      : item.status === 'APPROVED'
                      ? 'Approve'
                      : 'Reject'
                  }`}
                >
                  {item.status}
                </td>
                <td>
                  {item.status === 'PENDING' && (
                    <Button
                      variant='primary'
                      size='sm'
                      onClick={() => toggleOpen(item._id)}
                    >
                      <Icon icon='mdi:pencil' width='20px' />
                    </Button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableBlog;
