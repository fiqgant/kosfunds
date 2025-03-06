import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function BarChartDashboard({ budgetList }) {
  return (
    <div className="border rounded-2xl p-5 overflow-hidden">
  <h2 className="font-bold text-lg">Activity</h2>
  <ResponsiveContainer width="100%" height={250}>
    <BarChart
      data={budgetList}
      margin={{
        top: 7,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend layout="horizontal" verticalAlign="top" align="center" />
      <Bar dataKey="totalSpend" stackId="a" fill="#4845d2" />
      <Bar dataKey="amount" stackId="a" fill="#C3C2FF" />
    </BarChart>
  </ResponsiveContainer>
</div>
  );
}

export default BarChartDashboard;
