"use client"


import { useRef } from "react"
import { BsCalendar, BsSearch } from "react-icons/bs"


export default function Adminlist() {
  const div = useRef()
  let i = 0
    const mock = ()=>{
      fetch('https://653fcf0845bedb25bfc14550.mockapi.io/rezamr8/users', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }).then(res => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      }).then(tasks => {
        tasks.map((val)=>{
            div.current.innerHTML+=`
            <div  class="w-full h-[70px] md:h-[50px] flex justify-between items-center border-b border-black">
                <div class='w-[10%] h-[90%] mx-2 flex items-center justify-center text-[10px] md:text-[18px]'>${val.id}</div>
                <div class='w-[20%] h-[90%] mx-2 flex items-center justify-center text-[10px] md:text-[18px]'>${val.username}</div>
                <div class='w-[20%] h-[90%] mx-2 flex items-center justify-center text-[10px] md:text-[18px]'>${val.email}</div>
                <div class='w-[15%] h-[90%] mx-2 text-[#0D6EFD] cursor-pointer text-[10px] md:text-[18px] flex items-center justify-center'>Admin</div>
                <div class='w-[15%] h-[90%] mx-2 flex items-center justify-center text-[10px] md:text-[18px]'><button class='w-[70%] md:w-[50%] h-[40%] text-white bg-[#05D34E] text-[10px] md:text-[14px] rounded-lg flex justify-center items-center'>Active</button></div>
                <div class='w-[0%] md:w-[15%] h-[90%] mx-2 flex justify-around text-[10px] md:text-[18px]'></div>
            </div>
            `
        })
      }).catch(error => {
        // handle error
      })
    }

 
  return (
    <section className="w-full h-full flex flex-wrap p-7">
      <div className="w-full h-[50px] flex justify-between items-center">
        <h2 className="text-3xl font-bold">Admin List</h2>
        <div className="w-[250px] flex justify-between items-center text-sm cursor-pointer"><BsCalendar /><p className="text-gray-400">August 1, 2020 - August 31, 2020</p></div>
      </div>
      <div className="w-full h-[calc(100%-50px)] flex items-center">
        <div className="w-[100%] h-[95%] flex flex-wrap bg-white rounded-lg overflow-hidden p-5">
          <div className="w-full h-[50px] flex justify-between items-center">
            <h2 className="text-lg md:text-xl ">Admin List</h2>
            <div className="w-[250px] md:w-[400px] h-full flex justify-between items-center p-2">
              <div className="w-[70%] h-[90%] flex border border-black justify-between items-center rounded-md">
                <span className="w-[15%] h-full flex justify-center items-center text-lg"><BsSearch /></span>
                <input variant='plain' type="text" className="w-[85%] h-[70%] px-2 outline-none border-l border-black " placeholder="Search content here" />
              </div>
              <button className="w-[25%] h-[90%] bg-[#8950FC] text-white text-sm rounded-md flex justify-center items-center">Search</button>
            </div>
          </div>
          <div ref={div} onClick={mock()} className="w-full h-[calc(100%-100px)] flex flex-wrap overflow-y-scroll overflow-x-hidden">
              
          </div>
        </div>
      </div>
    </section>
  )
}
