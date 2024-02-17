import React from "react";

function Filters() {
  return (
    <div className="filters bg-bGray1 rounded-[8px] p-[22px] lg:w-[425px] h-[783px]">
      <div className="flex flex-col items-center lg:flex-1">
        <header className="capitalize text-[24px] font-semibold mb-[7px]">
          filters
        </header>
        <div className="flex justify-between lg:w-full">
          <p className="text-[14px] text-text3">Filters Applied</p>
          <p className="text-[14px] text-white">Clear All</p>
        </div>
        <div className="flex h-[51px] rounded-[7px] w-full bg-bGray2 items-start px-[7px] py-[9px] mb-[14px]">
          <div className="flex gap-1 text-bGray2 px-[3px] items-center rounded-[4px] bg-accentColor">
            <p className="text-[11px] capitalize">Real estate</p>
            <img src="./assets/X.svg" alt="X" className="w-2 h-2" />
          </div>
        </div>
        <div className="flex flex-col h-[555px] rounded-[7px] lg:w-full bg-bGray2 items-start px-[15px] py-[15px] mb-[14px]">
          <div className="capitalize font-bold text-[15px] w-full mb-1">
            stock
          </div>
          <div className="search relative lg:w-full flex items-center justify-center mb-[14px]">
            <input
              type="text"
              placeholder="$ TICKER"
              className="bg-bGray3 text-white pl-[17px] py-[7.5px] text-[13px] placeholder-text4 rounded-[5px] lg:w-[324px] h-[27px]"
            />
            <img
              src="./assets/search2.svg"
              alt="Search"
              className="absolute right-[22px] top-[8px] w-[13px] h-[13px]"
            />
          </div>
          <div className="flex gap-1.5 ml-4">
            <img src="./assets/arrow.svg" alt="arrow" />
            <p className="text-[15px] font-bold">Industry</p>
          </div>
          <div className="ml-7 flex w-full pr-5 mb-6">
            <div className="p-[8px] border-l flex flex-col gap-2 flex-1">
              <div className="flex gap-1.5 hover:bg-accentColor rounded-[6px] w-fit px-1 py-0.5 group">
                <img
                  src="./assets/health.svg"
                  alt="health"
                  className="w-fit group-hover:brightness-0 transition-all"
                />
                <p className="text-xs w-full flex-1 group-hover:text-bGray2 transition-all">
                  Health care
                </p>
              </div>
              <div className="flex gap-1.5 hover:bg-accentColor rounded-[6px] w-fit px-1 py-0.5 group">
                <img
                  src="./assets/Materials.svg"
                  alt="Materials"
                  className="w-fit group-hover:brightness-0 transition-all"
                />
                <p className="text-xs w-full flex-1 group-hover:text-bGray2 transition-all">
                  Materials
                </p>
              </div>
              <div className="flex gap-1.5 hover:bg-accentColor rounded-[6px] w-fit px-1 py-0.5 group">
                <img
                  src="./assets/Energy.svg"
                  alt="Energy"
                  className="w-fit group-hover:brightness-0 transition-all"
                />
                <p className="text-xs w-full flex-1 group-hover:text-bGray2 transition-all">
                  Energy
                </p>
              </div>
              <div className="flex gap-1.5 hover:bg-accentColor rounded-[6px] w-fit px-1 py-0.5 group items-center">
                <img
                  src="./assets/visa.svg"
                  alt="visa"
                  className="w-fit group-hover:brightness-0 transition-all"
                />
                <p className="text-[11px] w-full flex-1 group-hover:text-bGray2 transition-all">
                  Consumer discretionary
                </p>
              </div>
              <div className="flex gap-1.5 hover:bg-accentColor rounded-[6px] w-fit px-1 py-0.5 group">
                <img
                  src="./assets/cart.svg"
                  alt="cart"
                  className="w-fit group-hover:brightness-0 transition-all"
                />
                <p className="text-xs w-full flex-1 group-hover:text-bGray2 transition-all">
                  Consumer staples
                </p>
              </div>
              <div className="flex gap-1.5 hover:bg-accentColor rounded-[6px] w-fit px-1 py-0.5 group">
                <img
                  src="./assets/state.svg"
                  alt="state"
                  className="w-fit group-hover:brightness-0 transition-all"
                />
                <p className="text-xs w-full flex-1 group-hover:text-bGray2 transition-all">
                  Real estate
                </p>
              </div>
            </div>
            <div className="p-[8px] border-l flex flex-col gap-2 h-fit">
              <div className="flex gap-1.5 hover:bg-accentColor rounded-[6px] w-fit px-1 py-0.5 group">
                <img
                  src="./assets/it.svg"
                  alt="it"
                  className="w-fit group-hover:brightness-0 transition-all"
                />
                <p className="text-xs w-full flex-1 group-hover:text-bGray2 transition-all">
                  IT
                </p>
              </div>
              <div className="flex gap-1.5 hover:bg-accentColor rounded-[6px] w-fit px-1 py-0.5 group">
                <img
                  src="./assets/comment.svg"
                  alt="comment"
                  className="w-fit group-hover:brightness-0 transition-all"
                />
                <p className="text-xs w-full flex-1 group-hover:text-bGray2 transition-all">
                  Communication
                </p>
              </div>
              <div className="flex gap-1.5 hover:bg-accentColor rounded-[6px] w-fit px-1 py-0.5 group">
                <img
                  src="./assets/indust.svg"
                  alt="Industrials"
                  className="w-fit group-hover:brightness-0 transition-all"
                />
                <p className="text-xs w-full flex-1 group-hover:text-bGray2 transition-all">
                  Industrials
                </p>
              </div>
              <div className="flex gap-1.5 hover:bg-accentColor rounded-[6px] w-fit px-1 py-0.5 group">
                <img
                  src="./assets/Utilities.svg"
                  alt="Utilities"
                  className="w-fit group-hover:brightness-0 transition-all"
                />
                <p className="text-xs w-full flex-1 group-hover:text-bGray2 transition-all">
                  Utilities
                </p>
              </div>
              <div className="flex gap-1.5 hover:bg-accentColor rounded-[6px] w-fit px-1 py-0.5 group">
                <img
                  src="./assets/Financials.svg"
                  alt="Financials"
                  className="w-fit group-hover:brightness-0 transition-all"
                />
                <p className="text-xs w-full flex-1 group-hover:text-bGray2 transition-all">
                  Financials
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between flex-row-reverse">
            <div className="pr-12">
              <div className="flex gap-1.5 ml-4">
                <img src="./assets/arrow.svg" alt="arrow" />
                <p className="text-[15px] font-bold capitalize">Risk Level</p>
              </div>
              <form className="flex gap-1.5 ml-7 mt-3 flex-col">
                <div>
                  <input
                    defaultChecked
                    type="radio"
                    id="option12"
                    name="options"
                    value="option1"
                    className="hidden relative w-4 h-4 rounded-full bg-bGray3"
                  />
                  <label htmlFor="option12" className="text-[13px]">
                    Low Risk
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="option22"
                    name="options"
                    value="option2"
                  />
                  <label htmlFor="option22" className="text-[13px]">
                    Mid Risk
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="option32"
                    name="options"
                    value="option3"
                  />
                  <label htmlFor="option32" className="text-[13px]">
                    High Risk
                  </label>
                </div>
              </form>
            </div>
            <div>
              <div className="flex gap-1.5 ml-4">
                <img src="./assets/arrow.svg" alt="arrow" />
                <p className="text-[15px] font-bold capitalize">market cap</p>
              </div>
              <form className="flex gap-1.5 ml-7 mt-3 flex-col">
                <div>
                  <input
                    defaultChecked
                    type="radio"
                    id="option1"
                    name="options"
                    value="option1"
                    className="hidden relative w-4 h-4 rounded-full bg-bGray3"
                  />
                  <label htmlFor="option1" className="text-[13px]">
                    Micro
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    value="option2"
                  />
                  <label htmlFor="option2" className="text-[13px]">
                    Small
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="option3"
                    name="options"
                    value="option3"
                  />
                  <label htmlFor="option3" className="text-[13px]">
                    Large
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full flex justify-between flex-row-reverse mt-3">
            <div className="pr-12">
              <div className="flex gap-1.5 ml-3">
                <p className="text-[15px] font-bold capitalize">asset</p>
              </div>
              <div className="flex flex-col items-center gap-1 mt-2">
                <div className="text-[13px] bg-clip-text text-transparent bg-gradient-to-t from-white to-bGray1">
                  Stocks
                </div>
                <div className="text-[13px] bg-accentColor py-0.5 px-2 rounded">
                  Options
                </div>
                <div className="text-[13px] bg-clip-text text-transparent bg-gradient-to-b from-white to-bGray1">
                  Futures
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-1.5 ml-8">
                <p className="text-[15px] font-bold capitalize">strategy</p>
              </div>
              <div className="flex flex-col items-center gap-1 ml-1 mt-2">
                <div className="text-[13px] bg-clip-text text-transparent bg-gradient-to-t from-white to-bGray1">
                  Big Option Buys
                </div>
                <div className="text-[13px] bg-accentColor py-0.5 px-2 rounded">
                  Merger Arbitrage
                </div>
                <div className="text-[13px] bg-clip-text text-transparent bg-gradient-to-b from-white to-bGray1">
                  Short Reports
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[20px] w-[161px] h-[43px] bg-accentColor flex justify-center items-center rounded-md font-semibold">
          Apply
        </div>
      </div>
    </div>
  );
}

export default Filters;
