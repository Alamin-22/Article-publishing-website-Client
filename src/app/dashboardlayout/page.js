// "use client";
// import Chart from "@/Components/DashboardComponents/Chart";
// import BarChart from "@/Components/DashboardComponents/BarChart";
// import PieChart from "@/Components/DashboardComponents/PieChart";
// import React from "react";

// const dashboard = () => {
//   return (
//     <div className=" bg-slate-50 ">
//       <Chart></Chart>
//       <div className="flex flex-col lg:flex-row items-center">
//         <PieChart></PieChart>
//         <BarChart></BarChart>
//       </div>
//     </div>
//   );
// };

// export default dashboard;
"use client";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a placeholder or loading indicator during server-side rendering
    return <div>Loading...</div>;
  }

  // Render the dashboard components only on the client-side
  const Chart = require("@/Components/DashboardComponents/Chart").default;
  const BarChart = require("@/Components/DashboardComponents/BarChart").default;
  const PieChart = require("@/Components/DashboardComponents/PieChart").default;

  return (
    <div className=" bg-slate-50 ">
      <Chart></Chart>
      <div className="flex flex-col lg:flex-row items-center">
        <PieChart></PieChart>
        <BarChart></BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
