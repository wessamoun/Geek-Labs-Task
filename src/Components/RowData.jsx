import React from "react";

function RowData({ data2 }) {
  return (
    <div>
      <div
        className="flex lg:w-[846px] pxs-[40px] py-[14px] bg-bGray3 rounded-[7.7px] items-center cursor-pointer"
        onClick={(e) => {
          e.currentTarget.nextSibling.classList.toggle("hidden");
          e.currentTarget.classList.toggle("!bg-accentColor");
          e.currentTarget.classList.toggle("!font-semibold");
          e.currentTarget.childNodes.forEach((node) => {
            node.classList.toggle("!border-r-white");
          });
        }}
      >
        <div className="title text-white w-[80px] lg:w-[228px] flex justify-evenly items-center border-r-bGray4 border-r">
          <img src="./assets/card.svg" alt="card" />
          <p className="text-[15px]">{data2.title}</p>
        </div>
        <div className="quantity text-white w-[80px] lg:w-[228px] flex justify-evenly items-center border-r-bGray4 border-r ">
          <img src="./assets/paper.svg" alt="card" />
          <p className="text-[15px]">{data2.quantity}</p>
        </div>
        <div
          className={`ana text-${data2.color} w-[80px] lg:w-[228px] flex justify-evenly items-center border-r-bGray4 border-r `}
        >
          <img src="./assets/ana.svg" alt="card" />
          <p className="text-[15px]">{data2.ana}</p>
        </div>
        <div className="risk text-white w-[80px] lg:w-[228px] flex justify-evenly items-center ">
          <img
            src={`./assets/${
              data2.risk === "Low Risk" ? "money.svg" : "mMoney.svg"
            }`}
            alt="card"
          />
          <p className="text-[15px]">{data2.risk}</p>
        </div>
      </div>
      <div className="bg-bGray1 text-white lg:w-[846px] px-[40px] py-[30px] rounded-r-md rounded-b-md hidden">
        <p className="mb-[20px]">
          <span className="font-bold">${data2.title}</span> just announced an
          acquisition of <span className="font-bold">$NFLX</span> at{" "}
          <span className="font-bold">$200 B</span>.
        </p>
        <p className="text-[15.5px]">
          This is an{" "}
          <span className="underline text-accentColor">
            arbitrage opportunity
          </span>
          , with the max gain being %X if the deal closes, but the possible risk
          is %Y if the deal fails, If the deal success is % and therefore the
          recommended play is{" "}
          <span className="underline text-accentColor">long/short</span> $ABC
        </p>
      </div>
    </div>
  );
}

export default RowData;
