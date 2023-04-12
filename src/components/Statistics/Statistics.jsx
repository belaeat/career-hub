import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const marksArray = [
        { id: 'A1', marks: 60 },
        { id: 'A2', marks: 59 },
        { id: 'A3', marks: 55 },
        { id: 'A4', marks: 56 },
        { id: 'A5', marks: 43 },
        { id: 'A6', marks: 47 },
        { id: 'A7', marks: 60 },
        { id: 'A8', marks: 48 },
    ]
    return (
        <div className='text-center mx-auto'>
            <AreaChart
                width={500}
                height={300}
                data={marksArray}
            >

                <XAxis dataKey="id" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistics;