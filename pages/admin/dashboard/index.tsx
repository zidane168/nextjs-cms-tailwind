import React from "react";
import Head from 'next/head'

// components
import CardLineChart from "../../../components/cms1/Cards/CardLineChart.js";
import CardBarChart from "../../../components/cms1/Cards/CardBarChart.js";
import CardPageVisits from "../../../components/cms1/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../../components/cms1/Cards/CardSocialTraffic.js";

// layout for page
import Admin from "../../../layouts/Admin.js"; 

export default function Dashboard() {
  return (
    <>  
      <div>
        <Head>
          <title> Dashboard </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> 
    </>
  );
}
Dashboard.layout = Admin;
