"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import NavbarAdmin from "../NavbarAdmin";

export default function PostsChartPage() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      const res = await fetch("/api/posts-by-date");
      const data = await res.json();
      setChartData(data);
    };
    fetchChartData();
  }, []);

  return (
    <main>

    <NavbarAdmin/>
    <div className="max-w-3xl mx-auto   p-4 ml-40">
      <h1 className="text-2xl font-bold mb-4 text-center">Posts Per Day</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </main>
  );
}
