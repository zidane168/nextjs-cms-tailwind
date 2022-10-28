import Link from "next/link";
import React from "react";

// layout for page

import Admin from "../../../layouts/Admin.js";
import useTrans from "../../hooks/useTrans"

export default function Members( ) {

  const { language } = useTrans()
  return (
    <>
      <div className="flex flex-wrap mt-40">
        <div className="w-full mb-12 px-4"> 

        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr >
                <th  className="header" >
                  Project
                </th>
                <th  className="header" >
                  Budget
                </th>
                <th  className="header" >
                  Status
                </th>
                <th  className="header" >
                  Users
                </th>
                <th  className="header" >
                  Completion
                </th>
                <th  className="header" > { language.operation } </th> 
              </tr>
            </thead>
            <tbody>
             
              <tr >
                <th className=" px-6 align-middle text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/cms1/sketch.jpg"
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span  className="ml-3 font-bold  text-blueGray-600"   >
                    Black Dashboard Sketch
                  </span>
                </th>
                <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                  $3,150 USD
                </td>
                <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-red-500 mr-2"></i> delayed
                </td>
                <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src="/img/cms1/team-1-800x800.jpg"
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src="/img/cms1/team-2-800x800.jpg"
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/cms1/team-3-800x800.jpg"
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/cms1/team-4-470x470.png"
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">73%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: "73%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="  align-middle text-xs whitespace-nowrap p-4 space-x-1"> 
                    <a className="bg-sky-500 text-white p-2 rounded hover:bg-sky-700" href='/admin/member/edit/:slug' > 
                      <i className="fa-regular fa-eye"></i>  
                    </a> 
                  <a className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"> <i className="fa-solid fa-pen-to-square"></i> </a>
                  <a className="bg-red-500  text-white p-2 rounded hover:bg-red-700"> <i className="fa-solid fa-trash"></i> </a>
                </td>
              </tr>
              <tr>
                <th className=" px-6 align-middle text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/cms1/react.jpg"
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span className="ml-3 font-bold text-blueGray-600" >
                    React Material Dashboard
                  </span>
                </th>
                <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                  $4,400 USD
                </td>
                <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-teal-500 mr-2"></i> on
                  schedule
                </td>
                <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src="/img/cms1/team-1-800x800.jpg"
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src="/img/cms1/team-2-800x800.jpg"
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/cms1/team-3-800x800.jpg"
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/cms1/team-4-470x470.png"
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">90%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                        <div
                          style={{ width: "90%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td> 
              </tr>
              <tr>
                <th className=" px-6 align-middle text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/cms1/vue.jpg"
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span className="ml-3 font-bold text-blueGray-600">
                    React Material Dashboard
                  </span>
                </th>
                <td className="  px-6 align-middle text-xs whitespace-nowrap p-4">
                  $2,200 USD
                </td>
                <td className="  px-6 align-middle text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  completed
                </td>
                <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src="/img/cms1/team-1-800x800.jpg"
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src="/img/cms1/team-2-800x800.jpg"
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/cms1/team-3-800x800.jpg"
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/cms1/team-4-470x470.png"
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">100%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                        <div
                          style={{ width: "100%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div> 
      </div>
    </>
  );
}

Members.layout = Admin; // left sidebar