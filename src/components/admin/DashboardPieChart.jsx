import React, { PureComponent, useEffect, useState } from 'react';
import './DashboardPieChart.css';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from 'recharts';
import { useQuery } from 'react-query';
import { get_all_blogs } from 'src/api/index';

const COLORS = ['#0c73f3', '#ff8600', '#f71213'];
const DashboardPieChart = ({BlogData}) => {
  const [pending, setPending] = useState(0);
  const [reject, setReject] = useState(0);
  const [approved, setApproved] = useState(0);

  useEffect(() => {
    setPending(0);
    setReject(0);
    setApproved(0);
    if (BlogData && BlogData.data.data.content) {
      BlogData.data.data.content.forEach(item => {
        if (item.status === 'APPROVED') {
          setApproved(prevApproved => prevApproved + 1);
        } else if (item.status === 'PENDING') {
          setPending(prevPending => prevPending + 1);
        } else {
          setReject(prevReject => prevReject + 1);
        }
      });
    }
  }, [BlogData]);

  const data = [
    { name: 'Approved', value: approved },
    { name: 'Pending', value: pending },
    { name: 'Reject', value: reject },
  ];

  return (
    <>
      <div className='d-flex w-100'>
        <div className='d-flex flex-column '>
          <div className='mx-5'>Blog list</div>
          <PieChart width={280} height={300}>
            <Pie
              data={data}
              cx={120}
              cy={140}
              innerRadius={60}
              outerRadius={80}
              fill='#8884d8'
              paddingAngle={5}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label position='center' value={'Total - 10'} />
            </Pie>
          </PieChart>
        </div>

        <div className='w-50 my-auto'>
          <div className='d-flex gap-2 my-3'>
            <p className='color-ball-blue my-auto'></p>
            APPROVED
          </div>
          <div className='d-flex gap-2 my-3'>
            <p className='color-ball-orange my-auto'></p>
            PENDING
          </div>
          <div className='d-flex gap-2 my-3'>
            <p className='color-ball-red my-auto'></p>
            REJECT
          </div>
        </div>

        <div className='w-100'>
          <div className='mx-5 my-3'>Blog Information</div>
          <div className='mt-5'>
            <div className='py-2 mx-5 bg-primary text-center rounded-3 my-3 w-75'>
              {approved}
            </div>
            <div className='py-2 mx-5 bg-orange text-center rounded-3 my-3 w-75'>
              {pending}
            </div>
            <div className='py-2 mx-5 bg-danger text-center rounded-3 my-3 w-75'>
              {reject}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPieChart;
