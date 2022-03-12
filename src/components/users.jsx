import React from 'react'
import 'boxicons';

export default function Users() {

  return (
    <div className="users grid grid-cols-3 justify-center gap-20">
        <UserComponent />
    </div>
  )
}


function UserComponent({ data}){
    if(!data) return <></>;
    let flag = data.status == "active" ? 'bg-green-300' :'bg-gray-300';
    return (
        <div data-id={data.id} onClick="" className="relative profile py-10 px-5 flex flex-col justify-center items-center text-center gap-4 ">
            <div className="img relative">
                <img src={data.imgUrl} className="w-24" alt="" />   
                <h5 className={`status ${flag}`}></h5>
            </div>
        
            <div className="details text-gray-600">
                <h1 className='text-md'>{data.name}</h1>
                <h5 className='text-xs'>{data.email}</h5>        
            </div>
            {/* <div data-id={data.id} className='w-full h-full absolute'></div> */}
            <button className='delete py-2' ><box-icon data-id={data.id} color="rgb(248 113 113)" name='trash'></box-icon></button>

        </div> 
    )
}