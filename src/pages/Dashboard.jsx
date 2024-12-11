import React from "react";
import Card from "../components/Card/Card";
import BarsChart from "../components/Chart/BarsChart";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col px-8 py-4">
      <div className="flex gap-x-2">
        <Card text={"No. Customers"} value="20" />
        <Card text={"No. Items"} value="200" />
        <Card text={"Monthly Sales"} value="120,000" />
        <Card text={"Total Sold Items"} value="2000" />
        <Card text={"Total Sold Qty"} value="20000" />
      </div>
      <div className="flex justify-center items-center">
        <BarsChart />
      </div>
    </div>
  );
};

export default Dashboard;
