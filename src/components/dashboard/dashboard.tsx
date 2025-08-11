import React, { useState } from "react";
import Header from "../header";


const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="">
      <Header/>
      <main className="overflow-x-hidden container mx-auto items-center justify-between px-4">{children}</main>
    </div>
  );
};

export default Dashboard;
