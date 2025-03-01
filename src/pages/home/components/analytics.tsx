import React from "react";
import { LuChartLine } from "react-icons/lu";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { label: "", visitors: 700, conversions: 500 },
  { label: "", visitors: 1200, conversions: 700 },
  { label: "", visitors: 1400, conversions: 1000 },
  { label: "", visitors: 1000, conversions: 1400 },
  { label: "", visitors: 1500, conversions: 1600 },
  { label: "", visitors: 2800, conversions: 2000 },
  { label: "", visitors: 2900, conversions: 2200 },
  { label: "", visitors: 3000, conversions: 2400 },
];

const AnalyticsSection: React.FC = () => {
  return (
    <div className="relative w-full bg-[#111111] text-white py-14 ">
      {/* Title and Subheading */}
      <div className="absolute bg-[#111111]  z-20 left-10 top-10 w-fit  mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LuChartLine
            className="text-[rgb(169,169,169)] size-5 "
            aria-hidden="true"
          />
          <h3 className="font-light text-base  text-[rgb(169,169,169)]">
            Frontend Observability
          </h3>
        </div>

        <h2 className=" font-medium text-2xl text-[rgb(237,237,237)] ">
          Privacy-friendly, lightweight Analytics.
        </h2>
        <p className="font-medium text-2xl text-[rgb(169,169,169)] mb-2">
          Upgrade your post-launch workflow with actionable,<br /> real-time
          insights.
        </p>
      </div>

      <div className="absolute z-10 inset-y-2 left-20 w-44 pointer-events-none bg-gradient-to-r from-[#111] to-transparent" />

      {/* Chart Container */}
      <div className="w-full bg-[#111111] p-4 rounded-lg">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data}>
            {/* Optional Grid */}
            <CartesianGrid
              stroke="#374151" // a dark gray color
              strokeDasharray="3 3"
              vertical={false}
              horizontal={false}
            />
            {/* X Axis */}
            <XAxis
              dataKey="label"
              stroke="#a3a3a3"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            {/* Y Axis */}
            <YAxis
              stroke="#a3a3a3"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            {/* Tooltip */}
            <Tooltip
              contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
              labelStyle={{ color: "#9ca3af" }}
              itemStyle={{ color: "#fff" }}
            />
            {/* Legend */}
            {/* <Legend wrapperStyle={{ color: "#fff" }} /> */}
            {/* Lines */}
            <Line
              type="monotone"
              dataKey="visitors"
              name="Views"
              stroke="#14b8a6" // teal-500
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="conversions"
              name="Clicks"
              stroke="#0ea5e9" // sky-500
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsSection;
