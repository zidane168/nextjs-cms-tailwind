import Link from "next/link";

import fetch from 'unfetch'
import React, { useState, useEffect } from "react";


// layout for page

import Admin from "../../../layouts/Admin.js";
import useTrans from "../../hooks/useTrans"
import Image from "next/image"
import axios from "axios"
import useSWR, { SWRConfig } from "swr"

// https://swr.vercel.app/examples/ssr SSR SWR


  // https://api.github.com/users?since=49
//   [
//     {
//     "login": "jwhitmire",
//     "id": 50,
//     "node_id": "MDQ6VXNlcjUw",
//     "avatar_url": "https://avatars.githubusercontent.com/u/50?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/jwhitmire",
//     "html_url": "https://github.com/jwhitmire",
//     "followers_url": "https://api.github.com/users/jwhitmire/followers",
//     "following_url": "https://api.github.com/users/jwhitmire/following{/other_user}",
//     "gists_url": "https://api.github.com/users/jwhitmire/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/jwhitmire/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/jwhitmire/subscriptions",
//     "organizations_url": "https://api.github.com/users/jwhitmire/orgs",
//     "repos_url": "https://api.github.com/users/jwhitmire/repos",
//     "events_url": "https://api.github.com/users/jwhitmire/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/jwhitmire/received_events",
//     "type": "User",
//     "site_admin": false
//     },
//  ]

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const endpoint = `https://api.github.com/users`
//     // const res = await fetch(endpoint)
//     const res = await axios.get(endpoint)
//     const fetcher = await res.data

  
//     // Pass data to the page via props
//     return { props: { endpoint, fetcher } }
// } 

  
const fetcher = async() => {
    const endpoint = `https://api.github.com/users`
    const res = await axios.get(endpoint) 
    // console.log(res)
    return await res.data
}
 
export default function Githubs(   ) {
 
  
  const { language } = useTrans()
  const { data,  isValidating  } = useSWR(`https://api.github.com/users`, fetcher)

  console.log(data,  isValidating )

 
// use axios
//    const [ datas, setDatas ] = useState([])
//    const fetchAPI = async() => {
//     //const rel = await axios.get(endpoint)
//     const rel = await fetch(endpoint, "GET")
//     console.log(rel.data);
//     // setDatas(rel.data)
//    }   
//    useEffect(() => {
//     fetchAPI() 
// }, [])
    
  return (  
    <>
        <div className="flex flex-wrap mt-40 mb-4">
            {  isValidating ? "Loading failed " : (!data ? "Loading ..." : "") } 
        </div> 

        <div className="flex flex-wrap mt-40 mb-4">
            <h2 className="uppercase font-bold text-theme"> Github Users </h2>
        </div>

        <div className="flex flex-wrap mt-2 ">
            <div className="w-full mb-12 px-4 border shadow rounded p-4">
                
                <div className="grid lg:grid-cols-8 gap-4 sm:grid-cols-4 xs:grid-cols-2">          
                    {
                        data && data.map((value, index) => {
                            return (
                                <div className="p-2 bg-white shadow-lg rounded " key={ value.id }> 
                                <div className="w-50 h-50">
                                    <Image src={ value.avatar_url } width={'100%'} height={'100%'} alt={ value.login } /> 
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

                <div className="mt-4 text-center" > 
                    <button className=" rounded px-6 py-2 bg-theme text-white uppercase"> Load more ... </button>
                </div>
            </div>
        </div>  
    </>
  );
}

Githubs.layout = Admin; // left sidebar