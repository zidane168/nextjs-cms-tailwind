import Link from "next/link";

import fetch from "unfetch";
import React, { useState, useEffect } from "react";

// layout for page

import Admin from "../../../layouts/Admin.js";
import useTrans from "../../hooks/useTrans";
import Image from "next/image";
import axios from "axios";
import useSWR, { SWRConfig } from "swr";
import useSWRInfinite from "swr/infinite";

// https://swr.vercel.app/examples/ssr SSR SWR

// A function to get the SWR key of each page,
// its return value will be accepted by `fetcher`.
// If `null` is returned, the request of that page won't start.

export default function Githubs() {
  const { language } = useTrans(); 

  const fetcher = async (url: String) => {  
    const res = await axios.get(url);  
    return res.data.params.list
  };

  const onHandleClickAddMore = () => {
    setSize( size + 1 )
  }
  
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `http://localhost:3333/githubs?limit=3&page=${index + 1}`,
    fetcher
  ); 
 
  const datas = data ? [].concat(...data) : []
  const isLoadingInitialData = !data
  const isRefreshing = isValidating && data && data.length === size;

  return (
    <>
      <div className="flex flex-wrap mt-40 mb-4">
        {isLoadingInitialData ? "Loading" : ""}
      </div>

      <div className="flex flex-wrap mt-10 mb-4">
        <h2 className="uppercase font-bold text-theme"> Github Users:  </h2>
      </div>

      <div className="flex flex-wrap mt-2 ">
        <div className="w-full mb-12 px-4 border shadow rounded p-4">
          <div className="grid lg:grid-cols-8 gap-4 sm:grid-cols-4 xs:grid-cols-2">
            { 
                !!datas?.length  && datas?.map((value: string, index: number) => {
                  return (
                      <div className="p-2 bg-white shadow-lg rounded " key={ value.id }> 
                      <div className="w-50 h-50">
                          <Image src={ "http://localhost:3333/" + value.githubImages[0].myFiles[0].path } width={'100%'} height={'100%'} alt={ value.login } /> 
                      </div>
                      <div> Login: { value.login }   </div>
                      <div>
                          Url: 
                          {/* <Link href={ value.url } > { value.url } </Link> */}
                      </div>
                      <div> Id: { value.id }   </div>
                      <div>
                          Node:  <span className="text-xs font-bold"> { value.node_id }   </span>
                      </div>
                  </div>
                  ) 
              })
            }
          </div>

          <div className="mt-4 text-center">
            <button
              className=" rounded px-6 py-2 bg-theme text-white uppercase"
              onClick={ onHandleClickAddMore }
            >
              {" "}
              Load more ...{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Githubs.layout = Admin; // left sidebar
