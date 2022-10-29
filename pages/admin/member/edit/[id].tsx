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
  const [ checkedUncheckedAll, setCheckedUncheckedAll ] = useState(true); /// show checked all button

  const [ dropDownWithCheckBox2, setDropDownWithCheckBox2 ] = useState(false);
  const [ dropDownWithCheckBox2ArrayText, setDropDownWithCheckBox2ArrayText ] = useState([]); 
  const [ childArrow1, setChildArrow1 ] = useState(false);

  // search
  const [ showPrefixSearch, setShowPrefixSearch ] = useState(false)
  const [ chooseImage, setChooseImage ] = useState('monkey.png')

  const { language, router } = useTrans();
  const { id } = router.query; 

  // get all cbHR input

  // -------------- checkbox 1 cbHR ---------------
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

  const onHandleCheckedUnCheckedAll = () => {
    
    let array = [];      
    let cbHR = document.querySelectorAll('#cbHR input')

    if (checkedUncheckedAll) { 
      cbHR.forEach((v, index) => {
        v.checked = true;   // checked all      

        // add all
        array.push(v.value)
        setDropDownWithCheckBoxArrayText(array)
      })  

    } else {
      cbHR.forEach((v, index) => {
        v.checked = false;   // unchecked all      
      })  

      setDropDownWithCheckBoxArrayText(array)
    }
    
    setCheckedUncheckedAll( !checkedUncheckedAll )
  }

  // ------------- checkbox cbHR2 -------------- 

  const onClickChildArrow1 = (e: Event) => { 
    e.preventDefault(); 
    setChildArrow1(!childArrow1) 
  }

  const onHandleChange2 = (e) => {
    let isChecked = e.target.checked;
    let value = e.target.value

    if (isChecked) {
      setDropDownWithCheckBox2ArrayText(dropDownWithCheckBox2ArrayText.concat(value))

    } else {
      
      let deleteArray = [ ...dropDownWithCheckBox2ArrayText ] 
      let deleteIndex = deleteArray.indexOf(value)

      deleteArray.splice(deleteIndex, 1);
      setDropDownWithCheckBox2ArrayText(deleteArray) 
    }


  // cach 2
  //   let cbHR2 = document.querySelectorAll('#cbHR2 input')

  //   let newArray = [];
  //   cbHR2.forEach((v, index) => {

  //     if (v.checked) {
  //       newArray.push(v.value)
  //     }      
  //   })

  //   setDropDownWithCheckBox2ArrayText(newArray)
  }

  const onHandleCDelete2 = (item: String) => {
    let cbHR2 = document.querySelectorAll('#cbHR2 input')

    cbHR2.forEach( (v, index) => {
      if (v.value === item) {
        v.checked = false;

        // remove element on dropDownWithCheckBox2ArrayText
        let newArray = [ ...dropDownWithCheckBox2ArrayText ]
        let index = newArray.indexOf(item)
        newArray.splice(index, 1)
        setDropDownWithCheckBox2ArrayText(newArray)
      }
    })

  }

  /// search button
  const onHandleChooseImage = (url: String) => {

    setChooseImage(url)
    setShowPrefixSearch(false);
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
              Click on me (1){ dropDown ? <Image src={ ArrowDown } width={'30px'} height={'30px'} />: <Image src={ ArrowUp } width={'30px'} height={'30px'} /> } | You Choose:  { dropDownButtonText } 
            </button>
  
            <ul className={ dropDown ? "  bg-white p-2 m-2 rounded max-w-xs" : "hidden  " } >
              <li className="mt-[10px] px-2">  <a className="dropdownbutton " href="#dropdownbtn" onClick={() => setDropDownButtonText('Action') }>Action</a></li>
              <li className="mt-[15px] px-2">  <a className="dropdownbutton"  href="#dropdownbtn" onClick={() => setDropDownButtonText('Another action') }>Another action</a></li>
              <li className="mt-[15px] px-2">  <a className="dropdownbutton"  href="#dropdownbtn" onClick={() => setDropDownButtonText('Something else here') }>Something else here</a></li> 
              <li className="mt-[15px] px-2">  <a className="dropdownbutton"  href="#dropdownbtn" onClick={() => setDropDownButtonText('Separated link') }>Separated link</a></li>
            </ul>
          </div>
          

          <div className="btn-group mt-10 " id="dropdownbtn">
            <button type="button" className="flex items-center shadow px-4 py-2 bg-white text-sky-500 rounded-full" data-bs-toggle="dropdown" aria-expanded="false" onClick={ () => setDropDownWithCheckBox(!dropDownWithCheckBox) } >
              Click on me checkbox (1) { dropDownWithCheckBox ? <Image src={ ArrowDown } width={'30px'} height={'30px'} /> : <Image src={ ArrowUp } width={'30px'} height={'30px'} /> } 
            </button>
   
            <div className={ dropDownWithCheckBox ? " shadow bg-white p-4 rounded mt-2" : "hidden " } >
              <div className="p-2 grid gap-2 md:grid-cols-4  sm:grid-cols-3 xs:grid-cols-2  ">

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

              <div className="flex m-2"> 
                <button className="p-2 bg-theme hover:bg-sky-600 text-white rounded" onClick={ onHandleCheckedUnCheckedAll} >
                    { checkedUncheckedAll ? "Checked All " : "UnChecked All"}
                </button>
              </div>

              <ul className="" id="cbHR">
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> 
                  <input type="checkbox" name="action1" onChange={ (e) => onHandleChange(e)}  value="人力資源管理" />    <span> 人力資源管理 </span>  </div> 
                </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action2" onChange={ (e) => onHandleChange(e)}  value="住宿" />    <span> 住宿 </span>  </div> </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action3" onChange={ (e) => onHandleChange(e)}  value="保健/美容/健身" />    <span> 保健/美容/健身 </span>  </div> </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action4" onChange={ (e) => onHandleChange(e)}  value="保險" />    <span> 保險 </span>  </div> </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action3" onChange={ (e) => onHandleChange(e)}  value="买卖" />    <span> 买卖 </span>  </div> </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action4" onChange={ (e) => onHandleChange(e)}  value="管理" />    <span> 管理 </span>  </div> </li>
              </ul>
            </div>
          </div>


          <div className="btn-group mt-10 " id="dropdownbtn2">
            <button type="button" className="flex items-center shadow px-4 py-2 bg-white text-sky-500 rounded-full" data-bs-toggle="dropdown" aria-expanded="false" onClick={ () => setDropDownWithCheckBox2(!dropDownWithCheckBox2) } >
              Click on me checkbox 2 { dropDownWithCheckBox2 ? <Image src={ ArrowDown } width={'30px'} height={'30px'} /> : <Image src={ ArrowUp } width={'30px'} height={'30px'} /> } 
            </button>
   
            <div className={ dropDownWithCheckBox2 ? " shadow bg-white p-4 rounded mt-2" : "hidden " } >
              <div className="p-2 grid gap-2 md:grid-cols-4  sm:grid-cols-3 xs:grid-cols-2  ">

                { 
                  dropDownWithCheckBox2ArrayText?.map( (item, index) => {
                    return (
                      <div className="p-2 bg-slate-200 text-zinc-500 rounded-lg">
                        <span className="" key={ index }> { item }  </span>
                        <span className="float-right hover:cursor-pointer" onClick={ () => onHandleCDelete2(item) } > x </span>
                      </div>
                    )
                  } ) 
                }
              </div> 

              <ul className="" id="cbHR2">
                <li className="mt-[10px] px-2">  
                  <div className="flex space-x-2 items-center"> 
                    <input type="checkbox" name="action1"  value="人力資源管理" onChange={ (e) => onHandleChange2(e) } />     
                    <span> 人力資源管理 </span>  
                    <a href="#cbHR2" onClick={ (e) => onClickChildArrow1(e) }>
                      <Image src={ ArrowDown } width={'30px'} height={'30px'}  /> 
                    </a>
                  </div>  
                  <div className={(!childArrow1) ? " ml-8 hidden" : " ml-8 " }>
                    <ul>
                      <li> <input type="checkbox" name="action11"  value="人力1" onChange={ (e) => onHandleChange2(e) } />    <span> 人力1 </span>   </li>
                      <li> <input type="checkbox" name="action12"  value="人力2" onChange={ (e) => onHandleChange2(e) } />    <span> 人力2 </span>   </li>
                      <li> <input type="checkbox" name="action13"  value="人力3" onChange={ (e) => onHandleChange2(e) }/>    <span> 人力3 </span>   </li>
                    </ul>
                  </div> 
                </li>

                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action2" onChange={ (e) => onHandleChange2(e) } value="住宿" />    <span> 住宿 </span>  </div> </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action3" onChange={ (e) => onHandleChange2(e) } value="保健/美容/健身" />    <span> 保健/美容/健身 </span>  </div> </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action4" onChange={ (e) => onHandleChange2(e) } value="保險" />    <span> 保險 </span>  </div> </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action3" onChange={ (e) => onHandleChange2(e) } value="买卖" />    <span> 买卖 </span>  </div> </li>
                <li className="mt-[10px] px-2">  <div className="flex space-x-2 items-center"> <input type="checkbox" name="action4" onChange={ (e) => onHandleChange2(e) } value="管理" />    <span> 管理 </span>  </div> </li>
              </ul>
            </div>
          </div> {/* checkbox 2 */}


          <div className="mt-4 relative">
            <input className="px-12 rounded-full w-full " type="text" placeholder="Input Search Text Here" /> 
            <div className="absolute top-1 left-3 rounded-full hover:cursor-pointer" >

              <Image src={"/images/" + chooseImage} alt="monkey" width={'30px'} height={'30px'} alt="monkey" onClick={ () => setShowPrefixSearch(!showPrefixSearch) } />

              <div className={ showPrefixSearch ? "mt-2 -ml-2 p-2 bg-white rounded w-15 flex flex-col space-y-2" : "hidden"}>
                <div className="hover:ring-2" onClick={ () => onHandleChooseImage('monkey.png') }>
                  <Image src="/images/monkey.png" alt="monkey" width={'30px'} height={'30px'} alt="monkey" />
                </div>
                <div className="hover:ring-2" onClick={ () => onHandleChooseImage('baby.png') }>
                  <Image src="/images/baby.png" alt="monkey" width={'30px'} height={'30px'} alt="monkey" />
                </div>
              </div>
            </div>

            <button className="absolute right-2 top-1.5 px-3 py-1 bg-amber-400 rounded-full text-white"> Search </button>
          </div>


        </div>
      </div>
    </>
  );
}

MembersView.layout = Admin; // left sidebar
