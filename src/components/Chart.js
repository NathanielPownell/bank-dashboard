import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Label, Sector, Cell, ResponsiveContainer } from 'recharts';

// const data = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
// ];

const COLORS = ['#22577a', '#38a3a5', '#80ed99', '#57cc99'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Chart = (props) => {
    const data = props.recentTransactions
    // .map((entry, key) => {
    //     console.log(entry)
    //     if (entry.isNegative) {
    //         return
    //     } else {
    //         // entry.amount = 0
    //         console.log(entry.title)
    //     }
    // })



    return (
        <ResponsiveContainer width="100%" height="100%">

            <PieChart width="100%" height="900px">
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="amount"
                    nameKey="category"
                    label={renderCustomizedLabel}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <Label position="center" />

                </Pie>
                <Legend />
            </PieChart>
        </ResponsiveContainer>

    );
}

export default Chart
