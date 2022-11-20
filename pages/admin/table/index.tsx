import React from "react";
import Head from 'next/head'

// components
import CardTable from "../../../components/cms1/Cards/CardTable.js";

// layout for page
import Admin from "../../../layouts/Admin.js";

export default function Tables() {
  return (
    <>
      <div>
        <Head>
          <title> Table </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin; // left sidebar