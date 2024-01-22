import { Icon } from '@iconify/react';
import React from 'react';
import { Button, Table } from 'react-bootstrap';

const UserList = ({ dataResponse, toggleOpen }) => {
  return (
    <div className='mx-5 my-5'>
      <Table striped bordered hover responsive className='custom-table'>
        <thead>
          <tr>
            <th colSpan={6}>User List</th>
          </tr>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Date In</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataResponse?.data?.content?.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                {new Date(item.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </td>
              <td
                className={`${
                  item.status === 'SUSPENDED' ? 'text-danger' : 'text-success'
                }`}
              >
                <b>{item.status === 'SUSPENDED' ? 'Inactive' : 'Active'}</b>
              </td>
              <td>
                <Button
                  varient='primary'
                  size='sm'
                  onClick={() => toggleOpen(item._id)}
                >
                  <Icon icon='mdi:pencil' width='20px' />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
