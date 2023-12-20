"use client"
import { BsArrowRight, BsAspectRatio, BsBarChart, BsBasket2Fill, BsCalendar, BsDatabaseFill, BsFillLayersFill, BsFillPieChartFill, BsFillTrashFill, BsPen, BsPersonAdd, BsRecycle, BsSearch, BsShop, BsThreeDots } from "react-icons/bs"
import React from "react";
import bg from './../../../public/img/bg.svg'
import Image from "next/image";
import tiny from './../../../public/img/tiny.png'
import { Box, CircularProgress, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Sat',
  'sun',
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
];



export default function Dashboard() {

  return (
    <section className="w-full flex flex-wrap justify-between p-10">
      <div className="w-full h-[50px] flex justify-between items-center">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <div className="w-[175px] md:w-[250px] flex justify-between items-center text-[10px] md:text-sm cursor-pointer"><BsCalendar /><p className="text-gray-400 text-[10px] md:text-sm">August 1, 2020 - August 31, 2020</p></div>
      </div>
      <div className="relative w-[100%] md:w-[60%] h-[300px] md:h-[500px] bg-white rounded-lg p-2 mt-5">
        <h3 className="text-xl font-bold capitalize">stoke details</h3>
        <div className="w-full h-[80%] justify-center items-center">
        <BarChart
          sx={{width:'100%',height:'100%'}}
          series={[
            { data: pData, label: 'pv', id: 'pvId', stack: 'total',color:'purple'},
            { data: uData, label: 'uv', id: 'uvId', stack: 'total'},
          ]}
          xAxis={[{ data: xLabels, scaleType: 'band' }]}
          
        />
        </div>
      </div>
      <div className="w-[100%] md:w-[35%] h-[500px] flex flex-wrap justify-between rounded-lg mt-5">
        <div className="w-[45%] h-[30%] bg-white rounded-lg pl-3 py-3">
          <div className="w-[95%] text-white rounded-lg flex justify-between p-2 bg-[#FF7EA5]">
            <BsPersonAdd />
            <BsThreeDots />
          </div>
          <p className="text-3xl font-bold mt-2 text-center">2455</p>
          <p className="text-[#9B9ABA] text-center text-sm mt-1">User Registrations</p>
        </div>
        <div className="w-[45%] h-[30%] bg-white rounded-lg pl-3 py-3">
          <div className="w-[95%] text-white rounded-lg flex justify-between p-2 bg-[#20DEFF]">
            <BsPersonAdd />
            <BsThreeDots />
          </div>
          <p className="text-3xl font-bold mt-2 text-center">2455</p>
          <p className="text-[#9B9ABA] text-center text-sm mt-1">User Registrations</p>
        </div>
        <div className="w-[45%] h-[30%] bg-white rounded-lg pl-3 py-3">
          <div className="w-[95%] text-white rounded-lg flex justify-between p-2 bg-[#C388F6]">
            <BsBarChart />
            <BsThreeDots />
          </div>
          <p className="text-3xl font-bold mt-2 text-center">2455</p>
          <p className="text-[#9B9ABA] text-center text-sm mt-1">User Registrations</p>
        </div>
        <div className="w-[45%] h-[30%] bg-white rounded-lg pl-3 py-3">
          <div className="w-[95%] text-white rounded-lg flex justify-between p-2 bg-[#F5F5FF]">
            <BsFillPieChartFill />
            <BsThreeDots />
          </div>
          <p className="text-3xl font-bold mt-2 text-center">2455</p>
          <p className="text-[#9B9ABA] text-center text-sm mt-1">User Registrations</p>
        </div>
        <div style={{ backgroundImage: `url(${bg.src})` }} className="w-full h-[33%] bg-no-repeat object-cover p-5 rounded-lg overflow-hidden flex flex-wrap justify-end">
          <div className="w-1/2 h-full flex flex-wrap items-center">
            <p className="text-white font-bold w-full">Create CRM Reports</p>
            <p className="text-[#C8B4DE]">Outlines keep you and honest indulging honest.</p>
            <span className="text-[#EFC343] w-full flex items-center cursor-pointer">read more<BsArrowRight /></span>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[30%] h-[500px] bg-white p-4 mt-5 rounded-lg overflow-hidden">
        <div className="w-full flex justify-between">
          <h3 className="font-bold">New Users</h3>
          <div className="relative w-[40%] h-full rounded-md overflow-hidden">
            <input type="text" className="w-full bg-slate-100 h-[25px] text-sm outline-none" placeholder="search" />
            <span className="w-[20%] h-[100%] flex justify-center items-center text-sm bg-[#F45B0F] text-white absolute top-0 right-0"><BsSearch /></span>
          </div>
        </div>
        <div className="w-full h-[85%] mt-5 flex flex-wrap items-end">
          <div className="w-full h-[40px] bg-[#F5F5FF] hover:bg-[#f5fdff] rounded-md flex items-center justify-between px-2">
            <figure className="w-[40%] h-full flex justify-evenly items-center">
              <Image className="w-1/3 h-full object-contain" src={tiny} />
              <figcaption className="text-[#67349D]">reza est</figcaption>
            </figure>
            <span className="text-[#B5BACD] text-sm">Customer</span>
            <div className="w-[20%] h-full flex items-center justify-between">
              <span className="w-[40%] h-2/3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#67349D] hover:text-white"><BsPen /></span>
              <span className="w-[40%] h-2/3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#67349D] hover:text-white"><BsFillTrashFill /></span>
            </div>
          </div>
          <div className="w-full h-[40px] bg-[#f5fdff] rounded-md flex items-center justify-between px-2">
            <figure className="w-[40%] h-full flex justify-evenly items-center">
              <Image className="w-1/3 h-full object-contain" src={tiny} />
              <figcaption className="text-[#67349D]">reza est</figcaption>
            </figure>
            <span className="text-[#B5BACD] text-sm">Admin</span>
            <div className="w-[20%] h-full flex items-center justify-between">
              <span className="w-[40%] h-2/3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#67349D] hover:text-white"><BsPen /></span>
              <span className="w-[40%] h-2/3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#67349D] hover:text-white"><BsFillTrashFill /></span>
            </div>
          </div>
          <div className="w-full h-[40px] bg-[#F5F5FF] hover:bg-[#f5fdff] rounded-md flex items-center justify-between px-2">
            <figure className="w-[40%] h-full flex justify-evenly items-center">
              <Image className="w-1/3 h-full object-contain" src={tiny} />
              <figcaption className="text-[#67349D]">reza est</figcaption>
            </figure>
            <span className="text-[#B5BACD] text-sm">Customer</span>
            <div className="w-[20%] h-full flex items-center justify-between">
              <span className="w-[40%] h-2/3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#67349D] hover:text-white"><BsPen /></span>
              <span className="w-[40%] h-2/3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#67349D] hover:text-white"><BsFillTrashFill /></span>
            </div>
          </div>
          <div className="w-full h-[40px] bg-[#F5F5FF] hover:bg-[#f5fdff] rounded-md flex items-center justify-between px-2">
            <figure className="w-[40%] h-full flex justify-evenly items-center">
              <Image className="w-1/3 h-full object-contain" src={tiny} />
              <figcaption className="text-[#67349D]">reza est</figcaption>
            </figure>
            <span className="text-[#B5BACD] text-sm">Customer</span>
            <div className="w-[20%] h-full flex items-center justify-between">
              <span className="w-[40%] h-2/3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#67349D] hover:text-white"><BsPen /></span>
              <span className="w-[40%] h-2/3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#67349D] hover:text-white"><BsFillTrashFill /></span>
            </div>
          </div>
          <div className="w-full h-[40px] bg-[#F5F5FF] hover:bg-[#f5fdff] rounded-md flex items-center justify-between px-2">
            <figure className="w-[40%] h-full flex justify-evenly items-center">
              <Image className="w-1/3 h-full object-contain" src={tiny} />
              <figcaption className="text-[#67349D]">reza est</figcaption>
            </figure>
            <span className="text-[#B5BACD] text-sm">Customer</span>
            <div className="w-[20%] h-full flex items-center justify-between">
              <span className="w-[40%] h-2/3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#67349D] hover:text-white"><BsPen /></span>
              <span className="w-[40%] h-2/3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#67349D] hover:text-white"><BsFillTrashFill /></span>
            </div>
          </div>
          <div className="w-full h-[40px] bg-[#F5F5FF] hover:bg-[#f5fdff] rounded-md flex items-center justify-between px-2">
            <figure className="w-[40%] h-full flex justify-evenly items-center">
              <Image className="w-1/3 h-full object-contain" src={tiny} />
              <figcaption className="text-[#67349D]">reza est</figcaption>
            </figure>
            <span className="text-[#B5BACD] text-sm">Customer</span>
            <div className="w-[20%] h-full flex items-center justify-between">
              <span className="w-[40%] h-2/3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#67349D] hover:text-white"><BsPen /></span>
              <span className="w-[40%] h-2/3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#67349D] hover:text-white"><BsFillTrashFill /></span>
            </div>
          </div>
        </div>

      </div>
      <div className="w-[100%] md:w-[30%] h-[500px] bg-white p-4 mt-5 rounded-lg overflow-hidden flex justify-center items-center flex-wrap">
        <div className="w-full h-[50px] flex justify-between">
          <h2 className="font-bold">Sales of the last week</h2>
          <span className="bg-[#F5F5FF] w-[30px] h-[30px] rounded-lg flex justify-center items-center"><BsThreeDots /></span>
        </div>
        <div className="relative w-[80%] h-1/2 flex justify-center items-center mt-5">
          <CircularProgress variant="determinate" value={74} size={200} />
          <Box
            sx={{
              top: '35%',
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption" component="div" sx={{ fontSize: '30px', fontWeight: 'bold', display: 'flex', flexWrap: 'wrap', }} color="text.secondary">
              <span className="w-full text-center">74%</span>
              <span className="w-full text-center text-gray-300 text-sm">Progress</span>
            </Typography>
          </Box>
        </div>
        <div className="w-[80%] h-[30%] flex flex-wrap justify-center items-center mt-3">
          <div className="w-full h-[40px] flex justify-evenly items-center">
            <span className="w-[30px] h-[60%] rounded-full bg-[#F5F5FF] flex justify-center text-gray-300 items-center"><BsBarChart /></span>
            <div className="w-[200px] h-full flex flex-wrap items-center">
              <h4 className="font-bold capitalize">Most Sales</h4>
              <p className="w-full text-[10px] text-[#B5B5C3]">Authors with the best sales</p>
            </div>
          </div>
          <div className="w-full h-[40px] flex justify-evenly items-center">
            <span className="w-[30px] h-[60%] rounded-full bg-[#F5F5FF] flex justify-center text-gray-300 items-center"><BsFillPieChartFill /></span>
            <div className="w-[200px] h-full flex flex-wrap items-center">
              <h4 className="font-bold capitalize">Total sales lead</h4>
              <p className="w-full text-[10px] text-[#B5B5C3]">40% increased on week-to-week reports</p>
            </div>
          </div>
          <div className="w-full h-[40px] flex justify-evenly items-center">
            <span className="w-[30px] h-[60%] rounded-full bg-[#F5F5FF] flex justify-center text-gray-300 items-center"><BsDatabaseFill /></span>
            <div className="w-[200px] h-full flex flex-wrap items-center">
              <h4 className="font-bold capitalize">Average Bestseller</h4>
              <p className="w-full text-[10px] text-[#B5B5C3]">Pitstop Email Marketing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[30%] h-[500px] bg-white p-4 mt-5 rounded-lg overflow-hidden">
        <div className="w-full h-[50px] flex justify-between">
          <h2 className="font-bold">Sales of the last week</h2>
          <span className="bg-[#F5F5FF] w-[30px] h-[30px] rounded-lg flex justify-center items-center"><BsThreeDots /></span>
        </div>
        <div className="w-full h-[30%] flex mt-3 flex-wrap justify-between">
          <div className="w-[45%] h-[48%] flex justify-evenly items-center">
            <span className="w-[50px] h-[40px] text-2xl bg-[#EEE5FF] text-[#67349D] rounded-md flex justify-center items-center"><BsBasket2Fill /></span>
            <div className="w-[45%] h-[40px] flex flex-wrap items-center">
              <h4 className="font-bold">$2,034</h4>
              <p className="w-full text-[10px] text-[#B5B5C3]">Author Sales</p>
            </div>
          </div>
          <div className="w-[45%] h-[48%] flex justify-evenly items-center">
            <span className="w-[50px] h-[40px] text-2xl bg-[#FFE2E5] text-[#c6523b] rounded-md flex justify-center items-center"><BsFillLayersFill /></span>
            <div className="w-[50%] h-40px flex flex-wrap items-center">
              <h4 className="font-bold">$706</h4>
              <p className="w-full text-[10px] text-[#B5B5C3]">Commision</p>
            </div>
          </div>
          <div className="w-[45%] h-[48%] flex justify-evenly items-center">
            <span className="w-[50px] h-[40px] text-2xl bg-[#C9F7F5] text-[#47b736] rounded-md flex justify-center items-center"><BsBasket2Fill /></span>
            <div className="w-[50%] h-[40px] flex flex-wrap items-center">
              <h4 className="font-bold">$49</h4>
              <p className="w-full text-[10px] text-[#B5B5C3]">Average Bid</p>
            </div>
          </div>
          <div className="w-[45%] h-[48%] flex justify-evenly items-center">
            <span className="w-[50px] h-[40px] text-2xl bg-[#D7F9EF] text-[#1d4c16] rounded-md flex justify-center items-center"><BsAspectRatio /></span>
            <div className="w-[50%] h-[40px] flex flex-wrap items-center">
              <h4 className="font-bold">$5.8M</h4>
              <p className="w-full text-[10px] text-[#B5B5C3]">All Time Sales</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[30%] mb-10 flex flex-wrap justify-between">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                area: true,
              },
            ]}
            height={350}
            width={500}
          />
        </div>
      </div>
    </section>
  )
}
