import {
  AreaChart,
  Tooltip,
  CartesianGrid,
  Area,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "1D", uv: 550, pv: 2400, amt: 2400 },
    { name: "7D", uv: 1030, pv: 2400, amt: 2400 },
    { name: "1M", uv: 700, pv: 2400, amt: 2400 },
    { name: "3M", uv: 1730, pv: 2400, amt: 2400 },
    { name: "6M", uv: 1520, pv: 2400, amt: 2400 },
  ];

  return (
<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
    <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
  </linearGradient>
  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
  </linearGradient>
</defs>
<XAxis dataKey="name" />
<YAxis />
<CartesianGrid strokeDasharray="3 3" />
<Tooltip />
<Area type="monotone" dataKey="uv" stroke="#4CAF50" fillOpacity={1} fill="url(#colorUv)" />
<Area type="monotone" dataKey="pv" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
  );
};

export default Chart;
