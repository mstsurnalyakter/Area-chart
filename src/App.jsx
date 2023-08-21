import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';


const App = () => {

// Sample data
const data = [
{name: 'Geeksforgeeks', students: 400},
{name: 'Technical scripter', students: 700},
{name: 'Geek-i-knack', students: 200},
{name: 'Geek-o-mania', students: 1000}
];


return (
  <>
  <h1>Create an Area chart using Recharts in ReactJS</h1>
<AreaChart width={600} height={600} data={data}>
	<Area dataKey="students" fill="green" stroke="green" />
	<CartesianGrid stroke="#ccc" />
	<XAxis dataKey="name" />
	<YAxis />
</AreaChart>
</>
);
}

export default App;
