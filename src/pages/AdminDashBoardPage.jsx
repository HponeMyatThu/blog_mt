import DashboardPieChart from 'src/components/admin/DashboardPieChart';
import React, { PureComponent } from 'react';
import Navbar from 'src/components/admin/Navbar';
import TableBlog from 'src/components/admin/TableBlog';

const AdminDashBoardPage = () => {
  return (
    <>
      <div>
        <DashboardPieChart />
        <TableBlog />
      </div>
    </>
  );
};

export default AdminDashBoardPage;
