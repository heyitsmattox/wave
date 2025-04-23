import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
  {name: '1D', uv: 100, pv: 2400, amt: 2400},
  {name: '7D', uv: 150, pv: 2400, amt: 2400},
  {name: '1M', uv: 160, pv: 2400, amt: 2400},
  {name: '3M', uv: 220, pv: 2400, amt: 2400},
  {name: '6M', uv: 350, pv: 2400, amt: 2400},

];

const Chart =() => {
return (
    <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);
}

export default Chart;
