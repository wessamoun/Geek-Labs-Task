import React from "react";
import { data } from "../lib/data";
import RowData from "./RowData";

function AlertStrp() {
  return (
    <div className="">
      <header className="flex flex-col lg:flex-row lg:items-center mb-[34px]">
        <div className="flex flex-row-reverse justify-end lg:justify-start items-center">
          <div className="logo uppercase pl-[14px] text-[48px] font-bold text-white">
            alerts
          </div>
          <div className="sLine w-[5px] h-[48px] bg-accentColor rounded-[5px]"></div>
        </div>
        <div className="search relative lg:ml-[28px] lg:mr-[11px]">
          <input
            type="text"
            placeholder="Search By..."
            className="bg-bGray3 text-white pl-[17px] py-[7.5px] text-[15px] placeholder-white rounded-[5px] lg:w-[611px]"
          />
          <img
            src="./assets/search.svg"
            alt="Search"
            className="absolute right-[560px] lg:right-[16px] top-[8px]"
          />
        </div>
        <div className="bell relative w-[25px] mt-5 lg:mt-0">
          <img src="./assets/bBell.svg" alt="bBell" className="" />
          <div className="absolute text-[12px] font-bold bg-green rounded-full flex justify-center items-center -top-1 -right-1 w-[15px] h-[15px] text-white">
            6
          </div>
        </div>
      </header>
      <div className="rows flex flex-col lg:items-center gap-[16px] overflow-y-auto h-[710px] scrollbar-thin scrollbar-thumb-bGray4 scrollbar-track-bGray2 scrollbar-thumb-rounded">
        {data.map((data, index) => (
          <RowData data2={data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AlertStrp;
