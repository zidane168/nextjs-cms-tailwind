
import React from "react";
import Head from 'next/head'

// layout for page

import Admin from "../../../layouts/Admin.js";
import useTrans from "../../../hooks/useTrans";
import Image from "next/image";
import axios from "axios";
import useSWRInfinite from "swr/infinite";

// https://swr.vercel.app/examples/ssr SSR SWR

// A function to get the SWR key of each page,
// its return value will be accepted by `fetcher`.
// If `null` is returned, the request of that page won't start.

export default function Github2() {
  const { language } = useTrans();  

  const LIMIT: number = 10

  const fetcher = async (url: string) => {  
    const res = await axios.get(url);  
     return res.data.params.list   
  };

  const onHandleClickAddMore = () => {
    setSize( size + 1 )
  }
  
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `http://localhost:3333/githubs?limit=${LIMIT}&page=${index + 1}`,
    fetcher
  );   
 
  const datas = data ? [].concat(...data) : []    
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < LIMIT);
 
  const isLoadingInitialData = !data
  //const isRefreshing = isValidating && data && data.length === size;

  return (
    <>
      <div>
        <Head>
          <title> Github2 </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
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
                !!datas?.length  && datas?.map((value: any, index: number) => {
                
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

          { 
            !isReachingEnd ?  
              <div className="mt-4 text-center">
                <button
                  className=" rounded px-6 py-2 bg-theme text-white uppercase"
                  onClick={ onHandleClickAddMore }
                > 
                  Load more ... 
                </button>
              </div>   : ' '
          }
        </div>
      </div>
    </>
  );
}

Github2.layout = Admin; // left sidebar
