
import React from "react";
import DashboardCharts from "./DashboardCharts";

const Insights = () => {
  return (
    <>
      <div className="border border-gray-200 p-[32px] rounded-md bg-gradient-to-r from-blue-100 to-blue-300 mt-6">
        <h2 className="mb-2 font-light text-gray-600 ">Gross sales</h2>
        <h1 className="text-gray-800 text-3xl font-bold">$65,254</h1>
      </div>

      <DashboardCharts/>
    </>
  );
};

export default Insights;
