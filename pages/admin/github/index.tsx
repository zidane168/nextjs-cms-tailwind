import Link from "next/link";

import React, { useState, useEffect } from "react";

// layout for page

import Admin from "../../../layouts/Admin.js";
import useTrans from "../../hooks/useTrans"
import Image from "next/image"
import axios from "axios"
import useSWR, { SWRConfig } from "swr"

// https://swr.vercel.app/examples/ssr SSR SWR

const API = `https://api.github.com/users`

// use SWR
const fetcher = async(url: String) => {
    const rel = await axios.get(url)
    return rel.data

    // const fetcher = (...args) => fetch(...args).then((res) => res.data)
}


export async function getServerSideProps() {
    const repoInfo = await fetcher(API);
    return {
      props: {
        fallback: {
          [API]: repoInfo
        }
      }
    };
  }
  

   

export default function Githubs( { fallback } ) {

  const { language } = useTrans()

   
   // use axios
//    const [ datas, setDatas ] = useState([])
//    const fetchAPI = async() => {
//     const rel = await axios.get(address)
//     setDatas(rel.data)
//    }   
//    useEffect(() => {
//     fetchAPI() 
// }, [])


   
   const { users, error } = useSWR(API)
   



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

  return ( 
        <SWRConfig value={{ fallback }}>
            <div className="flex flex-wrap mt-40 mb-4">
                {  error ? "Loading failed " : (!users ? "Loading ..." : "") } 
            </div> 

            <div className="flex flex-wrap mt-40 mb-4">
                <h2 className="uppercase font-bold text-theme"> Github Users </h2>
            </div>

            <div className="flex flex-wrap mt-2 ">
                <div className="w-full mb-12 px-4 border shadow rounded p-4">
                    
                    <div className="grid grid-cols-8 gap-4">          
                        {
                            users && users.map((value, index) => {
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
                                    <div> Node: { value.node_id }   </div>
                                </div>
                                )
                                
                            })
                        }
                
                    </div>
                </div>
            </div>
        </SWRConfig> 
  );
}

Githubs.layout = Admin; // left sidebar