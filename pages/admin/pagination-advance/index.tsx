import React, { useState } from "react";


// layout for page

import Admin from "../../../layouts/Admin.js";
import useTrans from "../../hooks/useTrans"
import Image from "next/image"
import axios from "axios"
import useSWR from "swr"
import VPagination2 from "../../../components/VPagination2"

// https://swr.vercel.app/examples/ssr SSR SWR
  
export default function GithubAdvance( ) {
  
  const { language } = useTrans()  
  
  const [ page, setPage ] = useState(1)
  const LIMIT: number = 15
  
    const fetcher = async (endpoint: string) => {     
        const res = await axios.get(endpoint)    
        return res.data.params
    } 

    const { data, error  } = useSWR(`http://localhost:3333/githubs?limit=${LIMIT}&page=${page}`, fetcher)
 

    if (!data) {
        return null;
    }
    
    return (  
        <>
            <div className="mt-40 mb-4">
                <h2 className="uppercase font-bold text-theme"> Demo (Pagination Advance) </h2>  
            </div>
 
            <VPagination2 
                page={ page }  
                setPage={ setPage }  
                total={ data ? data.count : 0 }  
                list={ data ? data.list : null }
                limit={ LIMIT }  
            />  

            <div className="flex flex-wrap mt-2 ">
                <div className="w-full mb-12 px-4 border shadow rounded p-4">
                    
                    <div className="grid lg:grid-cols-8 gap-4 sm:grid-cols-4 xs:grid-cols-2">          
                        {
                            !!data.list?.length  && data.list?.map((value: any, index: number) => {
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

                </div>
            </div>   
        </>
    );
}

GithubAdvance.layout = Admin; // left sidebar 