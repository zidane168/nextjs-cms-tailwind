
import { useState } from 'react'
import  Image from 'next/image' 

import Search from "/public/images/search.svg";
import Folder from "/public/images/folder.svg";
import AddNewFile from "/public/images/add-new-file.svg";
import AddNewFolder from "/public/images/add-new-folder.svg";
import HashTag from "/public/images/hashtag.svg";
import Label from "/public/images/label.svg";

export default function MembersUI() {
       
    return (
        <>
            <div className="mt-2 p-6 rounded bg-orange-500 text-white max-w-sm">
                Welcome to Zidane - Learn Tech Tips Channel
            </div>

            <div className="bg-white-100 mt-2 ml-2 p-2 max-w-md border rounded-t-lg"> 
                <div id='search' className="flex items-center ">
                    <div className="w-8"> 
                        <Image src={ Search } width="20px" height="20px" />
                    </div>
                    <input type="text" className='w-full border-none active:border-none focus:border-none' placeholder="Search Projects ..." />
                </div>
            </div>
 
            <div className="bg-white-100 border-t-0 ml-2 p-1 max-w-md border Recent Searches border-b-2">
                <div className="px-2">
                    Recent Searches
                </div>
                <ul className="mb-2">
                    <li className='ml-2 mt-2 flex space-x-2 align-top hover:bg-indigo-600 hover:rounded-lg p-1 hover:text-white'> 
                        <div>
                            <Image src={ Folder } width="20px" height="20px" />
                        </div>
                        <div>
                            Tailwind Labs / Website Redesign
                        </div>
                    </li> 

                    <li className='ml-2 mt-2 flex space-x-2 align-top hover:bg-indigo-600 hover:rounded-lg p-1 hover:text-white'> 
                        <div>
                            <Image src={ Folder } width="20px" height="20px" />
                        </div>
                        <div>
                            Laravel LLC / Conference Branding
                        </div>
                    </li>  
                </ul>
            </div>

            <div className="bg-white-100 border-t-0 ml-2 p-1 max-w-md border rounded-b-lg Recent Searches border-b-2">
                <ul>
                    <li className='ml-2 mt-2 flex space-x-2 align-top hover:bg-indigo-600 hover:rounded-lg p-1 hover:text-white'> 
                        <div>
                            <Image src={ AddNewFile } width="20px" height="20px" />
                        </div>
                        <div>
                            Add new file ...
                        </div>
                    </li> 

                    <li className='ml-2 mt-2 flex space-x-2 align-top hover:bg-indigo-600 hover:rounded-lg p-1 hover:text-white'> 
                        <div>
                            <Image src={ AddNewFolder } width="20px" height="20px" />
                        </div>
                        <div>
                            Add new Folder ...
                        </div>
                    </li> 

                    <li className='ml-2 mt-2 flex space-x-2 align-top hover:bg-indigo-600 hover:rounded-lg p-1 hover:text-white'> 
                        <div>
                            <Image src={ HashTag } width="20px" height="20px" />
                        </div>
                        <div>
                            Add hashtag ...
                        </div>
                    </li> 


                    <li className='ml-2 mt-2 flex space-x-2 align-top hover:bg-indigo-600 hover:rounded-lg p-1 hover:text-white'> 
                        <div>
                            <Image src={ Label } width="20px" height="20px" />
                        </div>
                        <div>
                            Add label ...
                        </div>
                    </li> 
                </ul>
            </div> 

        </>
    ); 
}
 