import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Dashboard = () => {
    const [charts, setCharts] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setCharts(data));
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 mx-4 md:mx-16 px-5 py-5 max-w-screen-xl ">
            <div>
                <h1 className="my-10 font-bold text-xl">Month wise Sell</h1>
                <LineChart
                    width={500} height={300} data={charts} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month"} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={"sell"} stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            <div>
                <h1 className="my-10 font-bold text-xl">Invesment vs Revenue</h1>
                <AreaChart width={500} height={400} data={charts}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0, }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month"} />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey={"investment"} stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey={"revenue"} stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>

        </div>
    );
};

export default Dashboard;