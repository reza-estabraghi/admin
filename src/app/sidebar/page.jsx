"use client"
import Image from 'next/image'
import logo from './../../../public/img/logo.png'
import { BsCalendar, BsCardImage, BsChevronRight,  BsGear, BsGrid, BsPersonCircle,  BsStars, BsVr } from "react-icons/bs";
import Link from 'next/link';

export default function Sidebar() {

    return (
        <aside className='hidden md:flex flex-wrap w-full '>
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
    )
}
