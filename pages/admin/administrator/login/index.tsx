import Image from "next/image";
import Head from "next/head";

import React from "react";

// layout for page

export default function Login() {
  return (
    <>
      <div>
        <Head>
          <title> Member </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <form action="http://localhost:3000/login">
        
      <div className="flex  mt-10 justify-center items-center h-screen">
        <div className=" rounded-xl w-2/5 mx-auto border-black m12 p-4 shadow w-xs ">
          <div className="h-40 mb-4 bg-theme text-center flex rounded-lg items-center space-x-2 justify-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-lg border-black relative">
              <Image src="/images/dragon.jpeg" width="100%" height="100%" />
            </div>
            <div className=" text-white uppercase font-bold font-lg text-2xl">
              Welcome to CMS
            </div>
          </div>

          <div className="mt-2">
            <label> Username: </label>
            <input
              className="px-2 rounded w-full"
              type="text"
              name="username"
            />
          </div>

          <div className="mt-4">
            <label> Password: </label>
            <input
              className="px-2 rounded w-full"
              type="password"
              name="password"
            />
          </div>

          <div className="mt-2 text-center">
            <button type="submit" className="rounded bg-theme text-white p-2 px-6">
              
              Login
            </button>
          </div>
        </div>
      </div>


      </form>
    </>
  );
}
