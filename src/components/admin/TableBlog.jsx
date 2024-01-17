import { Icon } from '@iconify/react';
import React from 'react';
import { Table } from 'react-bootstrap';

const TableBlog = () => {
  return (
    <div className='mx-5'>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th colSpan={5}>Blog Status</th>
          </tr>
          <tr>
            <th>User</th>
            <th>Date In</th>
            <th>Category</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jenny Wilson</td>
            <td>Dec 18, 2023</td>
            <td>IT</td>
            <td>Approve</td>
            <th>
              <Icon icon='mdi:pencil' width='30px' />
              <Icon icon='mdi:delete-outline' width='30px' />
            </th>
          </tr>
          <tr>
            <td>Albert Flores</td>
            <td>Dec 18, 2023</td>
            <td>Knowledge</td>
            <td>Pending</td>
            <th>
              <Icon icon='mdi:pencil' width='30px' />
              <Icon icon='mdi:delete-outline' width='30px' />
            </th>
          </tr>
          <tr>
            <td>Floyd Miles</td>
            <td>Dec 18, 2023</td>
            <td>Language</td>
            <td>Reject</td>
            <th>
              <Icon icon='mdi:pencil' width='30px' />
              <Icon icon='mdi:delete-outline' width='30px' />
            </th>
          </tr>
          <tr>
            <td>Marvin McKinney</td>
            <td>Dec 18, 2023</td>
            <td>IT</td>
            <td>Approved</td>
            <th>
              <Icon icon='mdi:pencil' width='30px' />
              <Icon icon='mdi:delete-outline' width='30px' />
            </th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableBlog;
