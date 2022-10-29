import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useState } from "react";

import ArrowDown from "/public/images/arrow-down.svg";
import ArrowUp from "/public/images/arrow-up.svg";

// layout for page
 
import Admin from "../../../../layouts/Admin.js";
import useTrans from "../../../hooks/useTrans";

export default function MembersView() {
  const [ dropDown, setDropDown ] = useState(false);
  const [ dropDownButtonText, setDropDownButtonText] = useState("");

  const [ dropDownWithCheckBox, setDropDownWithCheckBox ] = useState(false);
  const [ dropDownWithCheckBoxArrayText, setDropDownWithCheckBoxArrayText ] = useState([]);

  const { language, router } = useTrans();
  const { id } = router.query; 

  // click on checkbox / unclick checkbox on button checkbox
  const onHandleChange = (e) => {

    let isChecked = e.target.checked
    let value = e.target.value;

    if (isChecked) {
      setDropDownWithCheckBoxArrayText(dropDownWithCheckBoxArrayText.concat(value)) 

    } else {
 

      let array = [ ...dropDownWithCheckBoxArrayText ]
      let index = array.indexOf(value)

      if (index != -1) {
        array.splice(index, 1)
        setDropDownWithCheckBoxArrayText(array) 
      } 
    }    
  }

  //remove item on click
  const onHandleCDelete = (item: String) => {
    let array = [ ...dropDownWithCheckBoxArrayText ]
    let index = array.indexOf(item)

    if (index != -1) {
      array.splice(index, 1)
      setDropDownWithCheckBoxArrayText(array)

      let cbHR = document.querySelectorAll('#cbHR input')
      
      cbHR.forEach( (v, index) => { 
        if (v.value === item) { // get từng giá trị của input so sánh và unchecked nó là xong
          v.checked = false;
        }
      })
    }
  }


  return (
    <>
      <div className="flex flex-wrap mt-40 mb-4">
        <h2 className="uppercase font-bold text-theme"> Members Edit </h2>
      </div>
      <div className="flex flex-wrap mt-2 ">
        <div className="w-full mb-12 px-4 border shadow rounded p-4">
          <div className="">
            <label className="my-0.5" for="username">
              Username:
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="w-full rounded"
            />
          </div>

          <div className="mt-2">
            <label className="my-0.5" for="password">
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="w-full rounded"
            />
          </div>

          <div className="mt-2">
            <label className="my-0.5"> Gender </label>
            <div className="  p-2  columns-2">
              <div className="radiobox  space-x-2">
                <label className=" " for="male">
                  Male:
                </label>
                <input id="male" type="radio" name="gender" value="1" />
              </div>

              <div className="radiobox  space-x-2">
                <label className=" " for="female">
                  Female:
                </label>
                <input id="female" type="radio" name="gender" value="2" />
              </div>
            </div>
          </div>

          <div className="mt-2">
            <label className="my-0.5"> Programming Language </label>
            {/*
              from md (max-width: 768px) trở lên: 4 cột,
              from sm (max-width: 640px;) trở lên: 3 cột,
              form xs (max-width: 320px;) <- new define on tailwind.config.js trở lên: 2 cột
            */}
            <div className="  p-2 mx-auto md:columns-4 sm:columns-3 xs:columns-2 ">
              <div className="checkbox space-x-2">
                <label className=" " for="cakephp">
                  CakePHP
                </label>
                <input
                  id="cakephp"
                  type="checkbox"
                  name="programminglanguage"
                  value="CakePHP"
                />
              </div>

              <div className="checkbox space-x-2">
                <label className="" for="nestjs">
                  NestJS
                </label>
                <input
                  className=""
                  id="nestjs"
                  type="checkbox"
                  name="programminglanguage"
                  value="NestJS"
                />
              </div>

              <div className="checkbox space-x-2">
                <label className="" for="nextjs">
                  NextJS
                </label>
                <input
                  id="nextjs"
                  type="checkbox"
                  name="programminglanguage"
                  value="NextJS"
                />
              </div>

              <div className="checkbox space-x-2">
                <label className="" for="laravel">
                  Laravel
                </label>
                <input
                  id="laravel"
                  type="checkbox"
                  name="programminglanguage"
                  value="Laravel"
                />
              </div>

              <div className="checkbox space-x-2">
                <label className=" " for="vue">
                  Vue
                </label>
                <input
                  id="vue"
                  type="checkbox"
                  name="programminglanguage"
                  value="Vue"
                />
              </div>

              <div className="checkbox space-x-2">
                <label className=" " for="python">
                  Python
                </label>
                <input
                  id="python"
                  type="checkbox"
                  name="programminglanguage"
                  value="Python"
                />
              </div>

              <div className="checkbox space-x-2">
                <label className=" " for="csharp">
                  C#
                </label>
                <input
                  id="csharp"
                  type="checkbox"
                  name="programminglanguage"
                  value="Csharp"
                />
              </div>

              <div className="checkbox space-x-2">
                <label className=" " for="cplus">
                  C++
                </label>
                <input
                  id="cplus"
                  type="checkbox"
                  name="programminglanguage"
                  value="Cplus"
                />
              </div>
            </div>
          </div>
          {/* end checkbox */}

          {/* <label
            for="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select an option
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select> */}

          <div className=" m-2 inline-flex rounded-md shadow-sm">
            <a
              href="#"
              aria-current="page"
              className=" py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Profile
            </a>
            <a
              href="#"
              className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Settings
            </a>
            <a
              href="#"
              className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Messages
            </a>
          </div> {/* group button */}



          <div className="btn-group" id="dropdownbtn">
            <button type="button" className="flex items-center shadow px-4 py-2 bg-white text-sky-500 rounded-full" data-bs-toggle="dropdown" aria-expanded="false" onClick={ () => setDropDown(!dropDown) } >
              Click on me { dropDown ? <Image src={ ArrowDown } width={'30px'} height={'30px'} />: <Image src={ ArrowUp } width={'30px'} height={'30px'} /> } - { dropDownButtonText } 
            </button>
  
            <ul className={ dropDown ? "  " : "hidden  " } >
              <li className="mt-[10px] px-2">  <a className="dropdownbutton " href="#dropdownbtn" onClick={() => setDropDownButtonText('Action') }>Action</a></li>
              <li className="mt-[15px] px-2">  <a className="dropdownbutton"  href="#dropdownbtn" onClick={() => setDropDownButtonText('Another action') }>Another action</a></li>
              <li className="mt-[15px] px-2">  <a className="dropdownbutton"  href="#dropdownbtn" onClick={() => setDropDownButtonText('Something else here') }>Something else here</a></li> 
              <li className="mt-[15px] px-2">  <a className="dropdownbutton"  href="#dropdownbtn" onClick={() => setDropDownButtonText('Separated link') }>Separated link</a></li>
            </ul>
          </div>
          

          <div className="btn-group mt-10 " id="dropdownbtn">
            <button type="button" className="flex items-center shadow px-4 py-2 bg-white text-sky-500 rounded-full" data-bs-toggle="dropdown" aria-expanded="false" onClick={ () => setDropDownWithCheckBox(!dropDownWithCheckBox) } >
              Click on me { dropDownWithCheckBox ? <Image src={ ArrowDown } width={'30px'} height={'30px'} /> : <Image src={ ArrowUp } width={'30px'} height={'30px'} /> } 
            </button>
   
            <div className={ dropDownWithCheckBox ? " shadow bg-white p-4 rounded mt-2" : "hidden " } >
              <div className="p-2 md:columns-4 gap-2 sm:columns-3 xs:columns-2 gap-y-2">

                { 
                  dropDownWithCheckBoxArrayText?.map( (item, index) => {
                    return (
                      <div className="p-2 bg-slate-200 text-zinc-500 rounded-lg">
                        <span className="" key={ index }> { item }  </span>
                        <span className="float-right hover:cursor-pointer" onClick={ () => onHandleCDelete(item) } > x </span>
                      </div>
                    )
                  } ) 
                }
              </div>

              <ul className="" id="cbHR">
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action1" onChange={ (e) => onHandleChange(e)}  value="人力資源管理" />    <span> 人力資源管理 </span>  </div> </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action2" onChange={ (e) => onHandleChange(e)}  value="住宿" />    <span> 住宿 </span>  </div> </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action3" onChange={ (e) => onHandleChange(e)}  value="保健/美容/健身" />    <span> 保健/美容/健身 </span>  </div> </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action4" onChange={ (e) => onHandleChange(e)}  value="保險" />    <span> 保險 </span>  </div> </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action3" onChange={ (e) => onHandleChange(e)}  value="买卖" />    <span> 买卖 </span>  </div> </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action4" onChange={ (e) => onHandleChange(e)}  value="管理" />    <span> 管理 </span>  </div> </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

MembersView.layout = Admin; // left sidebar
