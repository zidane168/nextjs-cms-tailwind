import Link from "next/link";
import React from "react";

// layout for page

import Admin from "../../../../layouts/Admin.js";
import useTrans from "../../../hooks/useTrans"
 
export default function MembersView( ) {

  const { language, router } = useTrans()  
  const { id } = router.query 

  return (
    <>
    <h2> Edit </h2> 
      <div className="flex flex-wrap mt-40">
        <div className="w-full mb-12 px-4 border rounded p-4"> 
            <div className="">
                <label className="my-0.5" for="username"> Username: </label> 
                <input id="username" type="text" className="w-full rounded" /> 
            </div>
        </div> 
      </div>
    </>
  );
}

MembersView.layout = Admin; // left sidebar