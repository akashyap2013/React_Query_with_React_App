import React from 'react'
import 'boxicons';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getUsers, deleteUser } from './helper';

export default function Users() {

   const { status, data, isFetching }  = useQuery('users', getUsers)

   const queryClient = useQueryClient();
   const deleteMutation = useMutation(deleteUser, {
       onSuccess: () => queryClient.invalidateQueries('users')
   })

    async function handlerClick(e){
       if(e.target.dataset.id){
           await deleteMutation.mutate(e.target.dataset.id);
           console.log("Data Deleted Successfully...!");
       }
    }

  return (
    <div className="users grid grid-cols-3 justify-center gap-20">
      {
          isFetching ? <div>Background Updating...</div> : <></>
      }
      {
          (status == "success") ? data.map( (v, i) => <UserComponent key={i} data={v} handlerClick={handlerClick}></UserComponent>) : <></>
      }
    </div>
  )
}


function UserComponent({ data, handlerClick}){
    if(!data) return <></>;
    let flag = data.status == "active" ? 'bg-green-300' :'bg-gray-300';
    return (
        <div data-id={data.id} onClick={handlerClick} className="relative profile py-10 px-5 flex flex-col justify-center items-center text-center gap-4 ">
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