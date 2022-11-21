import Link from "next/link";
import React from "react";
import Image from "next/image";

// layout for page

import Admin from "../../../../layouts/Admin.js";
import useTrans from "../../../../hooks/useTrans";
import Head from 'next/head'
export default function MembersView() {
  const { language, router } = useTrans();
  const { id } = router.query;

  return (
    <>
      <div>
        <Head>
          <title> Member UI View </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className="flex flex-wrap mt-40 mb-4">
        <h2 className="uppercase font-bold text-theme"> Members View </h2>
      </div>
      <div className="flex flex-wrap mt-2">
        <div className="w-full mb-12 px-4 border rounded p-4">
          <table>
            <thead>
              <tr>
                <th className="header rounded"> Username </th>
                <td className=" border-2 border-theme-2 w-full rounded px-2">
                  {" "}
                  {"username value here "}{" "}
                </td>
              </tr>
              <tr>
                <th className="header rounded"> Password </th>
                <td className=" border-2 border-theme-2 w-full rounded px-2">
                  {" "}
                  {"xxxxxxx"}{" "}
                </td>
              </tr>
              <tr>
                <th className="header rounded"> Status </th>
                <td className=" border-2 border-theme-2 w-full rounded px-2 space-x-2">
                  <span className="bg-rose-500 p-1 rounded text-white">
                    {" "}
                    {"value here "}{" "}
                  </span>
                  <span className="bg-lime-500 p-1 rounded text-white">
                    {" "}
                    {"value here "}{" "}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="header rounded"> Favour </th>
                <td className=" border-2 border-theme-2 w-full rounded px-2 space-x-2">
                  <ul className="list-disc px-3 py-3">
                    <li> CakePHP </li>
                    <li> NestJS </li>
                    <li> NextJS </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th className="header rounded"> Link </th>
                <td className=" border-2 border-theme-2 w-full rounded px-2 space-x-2">
                  <Link href="/admin/member/">
                    <a
                      href="/admin/member/"
                      className="text-theme hover:underline hover:underline-offset-1 "
                    >
                      {" "}
                      Link to Member{" "}
                    </a>
                  </Link>
                </td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-wrap mb-4">
        <h2 className="uppercase font-bold text-theme"> Members Languages </h2>
      </div>
      <div className="flex flex-wrap mt-2">
        <div className="w-full mb-12 px-4 border rounded p-4">
          <table>
            <thead>
              <tr>
                <th className="header rounded"> English </th>
                <td className=" border-2 border-theme-2 w-full rounded px-2">
                  <ul className="list-disc p-3">
                    <li> Name: </li>
                    <li> Description: </li>
                    <li> Title: </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th className="header rounded"> Chinese </th>
                <td className=" border-2 border-theme-2 w-full rounded px-2">
                  <ul className="list-disc p-3">
                    <li> 名稱: </li>
                    <li> 描述: </li>
                    <li> 主題: </li>
                  </ul>
                </td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <h2 className="uppercase font-bold text-theme"> Members Images </h2>

        <div className="mt-2 flex flex-col space-y-4">
          <div className="flex flex-row items-center space-x-4">
            <div>
              <Image
                src="/images/monkey.png"
                width={"300px"}
                height={"300px"}
                alt="image"
              />
            </div>
            <div className="flex-1 text-justify">
              Text description here, Text description here, Text description
              here, Text description here, Text description here, Text
              description here, Text description here, Text description here,
              Text description here, Text description here, Text description
              here, Text description here, Text description here, Text
              description here, Text description here, Text description here,
              Text description here, Text description here, Text description
              here, Text description here, Text description here, Text
              description here, Text description here, Text description here,
              Text description here, Text description here, Text description
              here, Text description here, Text description here, Text
              description here, Text description here, Text description here,
              Text description here, Text description here, Text description
              here, Text description here, Text description here, Text
              description here, Text description here, Text description here,
              Text description here, Text description here, Text description
              here, Text description here, Text description here, Text
              description here, Text description here, Text description here,
            </div>
          </div>

          <div className="flex flex-row items-center space-x-4">
            <div>
              <Image
                src="/images/monkey.png"
                width={"300px"}
                height={"300px"}
                alt="image"
              />
            </div>
            <div className="flex-1 text-justify">Text description here</div>
          </div>
        </div>
      </div>
    </>
  );
}

MembersView.layout = Admin; // left sidebar
