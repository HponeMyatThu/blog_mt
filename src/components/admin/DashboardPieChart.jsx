import React, { PureComponent } from 'react';
import './DashboardPieChart.css';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];
const COLORS = ['#0c73f3', '#ff8600', '#f71213'];
const DashboardPieChart = () => {
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
              400
            </div>
            <div className='py-2 mx-5 bg-warning  text-center rounded-3 my-3 w-75'>
              300
            </div>
            <div className='py-2 mx-5 bg-danger text-center rounded-3 my-3 w-75'>
              300
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPieChart;
