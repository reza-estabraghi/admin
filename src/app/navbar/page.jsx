"use client"
import Image from "next/image";
import { BsBellFill, BsEmojiSmile, BsFillChatLeftTextFill, BsList, BsPersonCircle, BsPlus, BsSearch, BsXLg } from "react-icons/bs";
import logo from './../../../public/img/logo.png'
import { BsCalendar, BsCardImage, BsChevronRight, BsGear, BsGrid, BsStars, BsVr } from "react-icons/bs";
import img from "./../../../public/img/4.png"
import timg from "./../../../public/img/2.png"
import himg from "./../../../public/img/3.png"
import simg from "./../../../public/img/5.png"
import fimg from "./../../../public/img/1.png"
import { useRef, useState } from "react";
import Link from "next/link";


export default function Navbar() {
    const [side, setSide] = useState(false)
    let flag = 0
    let solat = 0
    const chat = useRef()
    const person = useRef()
    const aside = useRef()
    return (
        <div className='w-full h-[70px] border-b border-[#E8E8E8]'>
            <nav className='relative w-full h-full flex justify-between items-center px-5'>
                <div className='w-[400px] h-full flex justify-between items-center'>
                    <span onClick={() => {
                        if (side == false) {
                            aside.current.style.width = '50%'
                            setSide(!side)
                        } else {
                            aside.current.style.width = '0'
                            setSide(!side)
                        }
                    }}><BsList className='text-3xl cursor-pointer' /></span>
                    <div className='w-[300px] h-full flex items-center justify-center relative'><input type="text" className='outline-none w-[200px] h-[30px] rounded-md' /><span className='w-[30px] h-[30px] bg-[#F45B0F] rounded-md flex justify-center items-center absolute top-5 right-10'><BsSearch className='text-sm  text-white' /></span></div>
                </div>
                <div className='w-[200px] h-full flex justify-around items-center'>
                    <button onClick={() => {
                        if (flag == 0) {
                            chat.current.style.height = '300px'
                            flag++
                        } else {
                            chat.current.style.height = '0px'
                            flag--
                        }

                    }} className='group relative'><BsBellFill />
                        <div ref={chat} className='w-[300px] h-[0px] z-[99] bg-[#f6f7fb] rounded-lg shadow-lg overflow-hidden absolute top-[40px] right-[40px] [transition:1s]'>
                            <div className="w-full h-[15%] flex items-center bg-[#8950FC] text-white px-5">
                                <h2>Notification</h2>
                            </div>
                            <div className="w-full h-[70%] px-5 bg-white overflow-y-scroll overflow-x-hidden">
                                <figure className="w-full h-[22%] m-2 flex">
                                    <Image className="w-[30%] h-[70%] object-contain" src={fimg} alt="img1" />
                                    <figcaption className="w-[65%] flex flex-wrap px-2">
                                        <h2 className="text-sm font-bold">Cool Marketing</h2>
                                        <p className="text-[10px] text-gray-400">Lorem ipsum dolor sit amet</p>
                                    </figcaption>
                                </figure>
                                <figure className="w-full h-[22%] m-2 flex">
                                    <Image className="w-[30%] h-[70%] object-contain" src={himg} alt="img1" />
                                    <figcaption className="w-[65%] flex flex-wrap px-2">
                                        <h2 className="text-sm font-bold">Awesome packages</h2>
                                        <p className="text-[10px] text-gray-400">Lorem ipsum dolor sit amet</p>
                                    </figcaption>
                                </figure>
                                <figure className="w-full h-[22%] m-2 flex">
                                    <Image className="w-[30%] h-[70%] object-contain" src={fimg} alt="img1" />
                                    <figcaption className="w-[65%] flex flex-wrap px-2">
                                        <h2 className="text-sm font-bold">what a packages</h2>
                                        <p className="text-[10px] text-gray-400">Lorem ipsum dolor sit amet</p>
                                    </figcaption>
                                </figure>
                                <figure className="w-full h-[22%] m-2 flex">
                                    <Image className="w-[30%] h-[70%] object-contain" src={fimg} alt="img1" />
                                    <figcaption className="w-[65%] flex flex-wrap px-2">
                                        <h2 className="text-sm font-bold">Cool Marketing</h2>
                                        <p className="text-[10px] text-gray-400">Lorem ipsum dolor sit amet</p>
                                    </figcaption>
                                </figure>
                                <figure className="w-full h-[22%] m-2 flex">
                                    <Image className="w-[30%] h-[70%] object-contain" src={fimg} alt="img1" />
                                    <figcaption className="w-[65%] flex flex-wrap px-2">
                                        <h2 className="text-sm font-bold">Awesome packages</h2>
                                        <p className="text-[10px] text-gray-400">Lorem ipsum dolor sit amet</p>
                                    </figcaption>
                                </figure>
                                <figure className="w-full h-[22%] m-2 flex">
                                    <Image className="w-[30%] h-[70%] object-contain" src={fimg} alt="img1" />
                                    <figcaption className="w-[65%] flex flex-wrap px-2">
                                        <h2 className="text-sm font-bold">what a packages</h2>
                                        <p className="text-[10px] text-gray-400">Lorem ipsum dolor sit amet</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="w-full h-[15%] flex justify-center items-center">
                                <span className="w-[30%] h-[50%] text-[10px] rounded-md flex justify-center items-center text-white bg-[#884FFB]">See more</span>
                            </div>
                        </div>
                    </button>
                    <button onClick={() => {
                        if (solat == 0) {
                            person.current.classList.remove('right-[-500px]')
                            person.current.classList.add('right-[-70px]')
                            solat++
                        } else {
                            person.current.classList.remove('right-[-70px]')
                            person.current.classList.add('right-[-500px]')
                            solat--
                        }

                    }} className='group relative'><BsFillChatLeftTextFill />
                        <div onClick={(e) => {
                            e.stopPropagation()
                        }} ref={person} className='w-[300px] h-[400px] shadow-md rounded-lg overflow-hidden bg-[#f6f7fb] absolute top-[250px] right-[-500px] [transition:1s]'>
                            <div className="w-full h-[20%] flex flex-wrap items-center bg-[#8950FC] text-white px-5 z-[99]">
                                <h5 className="w-full text-left text-sm text-white">Chat with us </h5>
                                <div className="w-[60%] h-[50%] flex justify-evenly">
                                    <Image className="w-[15%] h-[50%] rounded-full overflow-hidden" src={fimg} />
                                    <Image className="w-[15%] h-[50%] rounded-full overflow-hidden" src={simg} />
                                    <Image className="w-[15%] h-[50%] rounded-full overflow-hidden" src={himg} />
                                    <Image className="w-[15%] h-[50%] rounded-full overflow-hidden" src={img} />
                                    <Image className="w-[15%] h-[50%] rounded-full overflow-hidden" src={timg} />
                                </div>
                            </div>
                            <div className="w-full h-[70%] bg-white flex flex-wrap">
                                <figure className="w-full h-[22%] m-2 flex">
                                    <span className="flex items-end w-[30%] h-full justify-center"><Image className="w-1/2 h-2/3" src={fimg} alt="img1" /></span>
                                    <figcaption className="w-[65%] bg-blue-700 rounded-md h-full flex flex-wrap p-2">
                                        <p className="text-[12px]  text-white">Hi! Welcome . How can I help you?</p>
                                    </figcaption>
                                </figure>
                                <figure className="w-full h-[22%] m-2 flex [direction:rtl]">
                                    <span className="flex items-end w-[30%] h-full justify-center"><Image className="w-1/2 h-2/3" src={img} alt="img1" /></span>
                                    <figcaption className="w-[65%] bg-blue-700  rounded-md h-full flex flex-wrap p-3">
                                        <p className="text-[14px]  text-white">Hello</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="w-full h-[10%] flex px-3 items-center justify-evenly">
                                <input type="text" className="w-[80%] h-[80%] bg-inherit p-2 outline-none text-sm" placeholder="write a message ..." />
                                <span><BsEmojiSmile /></span>
                                <span><BsPlus /></span>
                            </div>
                        </div>
                    </button>
                    <figure className='w-[20%] h-1/2'>
                        <Image src={img} alt="image" />
                    </figure>
                </div>
                <div ref={aside} className="absolute top-0 left-0 md:hidden w-[0] bg-white h-[100vh] [transition:1s] z-[99]">
                    <aside className='relative w-full overflow-hidden '>
                        <button onClick={() => {
                            if (side == true) {
                                aside.current.style.width = '0%'
                                setSide(!side)
                            } else {
                                aside.current.style.width = '50%'
                                setSide(!side)
                            }
                        }} className="absolute cursor-pointer top-3 right-3 w-[50px] h-[50px] flex justify-center items-center"><BsXLg /></button>
                        <figure className='w-full h-[70px] flex px-3 items-center border-b border-[#F3F6F9] bg-[#F3F6F9]'>
                            <Image src={logo} alt='logo' className='w-2/3 h-1/2 ' />
                        </figure>
                        <ul className='w-full flex flex-wrap justify-center text-lg capitalize mt-4'>
                            <li className='w-full h-[50px] flex justify-between items-center px-3 my-3 hover:bg-[#f6f7fb] rounded-xl'><Link className='flex items-center justify-evenly hover:text-[#f65365]' href='./dashboard'><BsGrid className='mx-2 text-[#65faf2b4] ' />dashborad</Link><BsChevronRight className='text-gray-400' /></li>
                            <li className='w-full h-[50px] flex justify-between items-center px-3 my-3 hover:bg-[#f6f7fb] rounded-xl'><Link className='flex items-center justify-evenly hover:text-[#f65365]' href='./adminlist'><BsPersonCircle className='mx-2 text-[#65faf2b4] ' />adminlist</Link><BsChevronRight className='text-gray-400' /></li>
                            <li className='w-full h-[50px] flex justify-between items-center px-3 my-3 hover:bg-[#f6f7fb] rounded-xl'><Link className='flex items-center justify-evenly hover:text-[#f65365]' href='./invoice'><BsVr className='mx-2 text-[#65faf2b4] ' />invoice</Link><BsChevronRight className='text-gray-400' /></li>
                            <li className='w-full h-[50px] flex justify-between items-center px-3 my-3 hover:bg-[#f6f7fb] rounded-xl'><Link className='flex items-center justify-evenly hover:text-[#f65365]' href='./calender'><BsCalendar className='mx-2 text-[#65faf2b4] ' />calender</Link><BsChevronRight className='text-gray-400' /></li>
                            <li className='w-full h-[50px] flex justify-between items-center px-3 my-3 hover:bg-[#f6f7fb] rounded-xl'><Link className='flex items-center justify-evenly hover:text-[#f65365]' href='./generals'><BsStars className='mx-2 text-[#65faf2b4] ' />generals</Link><BsChevronRight className='text-gray-400' /></li>
                            <li className='w-full h-[50px] flex justify-between items-center px-3 my-3 hover:bg-[#f6f7fb] rounded-xl'><Link className='flex items-center justify-evenly hover:text-[#f65365]' href='./gallery'><BsCardImage className='mx-2 text-[#65e9fab4] ' />gallery</Link><BsChevronRight className='text-gray-400' /></li>
                            <li className='w-full h-[50px] flex justify-between items-center px-3 my-3 hover:bg-[#f6f7fb] rounded-xl'><Link className='flex items-center justify-evenly hover:text-[#f65365]' href='./settings'><BsGear className='mx-2 text-[#65e9fab4] ' />settings</Link><BsChevronRight className='text-gray-400' /></li>
                        </ul>
                    </aside>
                </div>
            </nav>
        </div>
    )
}
