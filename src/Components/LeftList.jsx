import React from "react";

function LeftList() {
  return (
    <div className="lg:absolute z-50 w-full bg-bGray1 lg:h-[835px] lg:ml-[7px] pt-[29px] flex flex-col justify-between myShadow group/list lg:w-[74px] lg:hover:w-[180px] transition-all">
      <div className=" flex items-center flex-col justify-center">
        <img
          src="./assets/logo.svg"
          alt="logo"
          className="lg:w-[50px] h-[54px] mx-[28px] group-hover/list:w-[124px] transition-all"
        />
        <ul className="nav px-[19px] w-full mt-[46px] flex lg:flex-col transition-all justify-between">
          <li className="lg:w-full flex mb-[15px] gap-[10px] group/li items-center transition-all">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover/li:fill-accentColor fill-white transition-all "
            >
              <path d="M15.0304 10.8595L13.8484 9.67748C13.5769 9.38519 13.4196 9.005 13.4052 8.60632V6.27932C13.4052 3.28745 11.4106 0.738831 7.86472 0.738831C4.31881 0.738831 2.32423 3.21358 2.32423 6.27932V8.86488C2.31739 9.09869 2.22546 9.32197 2.06567 9.4928L0.699021 10.8595C0.559834 10.9958 0.480177 11.1817 0.477402 11.3766V14.036C0.477402 14.2319 0.555232 14.4198 0.693771 14.5584C0.83231 14.6969 1.02021 14.7747 1.21613 14.7747H5.31609C5.41887 15.3762 5.73109 15.922 6.19751 16.3155C6.66393 16.709 7.25449 16.9248 7.86472 16.9248C8.47495 16.9248 9.06551 16.709 9.53193 16.3155C9.99835 15.922 10.3106 15.3762 10.4133 14.7747H14.5133C14.7092 14.7747 14.8971 14.6969 15.0357 14.5584C15.1742 14.4198 15.252 14.2319 15.252 14.036V11.3766C15.2493 11.1817 15.1696 10.9958 15.0304 10.8595Z" />
            </svg>
            <p className="hidden lg:block capitalize w-0 group-hover/list:w-fit text-[19px] font-semibold text-white group-hover/li:text-accentColor opacity-0 group-hover/list:opacity-100 transition-all">
              alerts
            </p>
          </li>
          <li className="lg:w-full flex mb-[15px] gap-[10px] items-center group/li">
            <svg
              width="21"
              height="14"
              viewBox="0 0 21 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover/li:fill-accentColor fill-white transition-all"
            >
              <path d="M10.3592 9.44643C9.93145 9.44643 9.51283 9.36657 9.11504 9.209L3.91813 7.14876C3.91813 8.29656 3.91813 10.0131 3.91813 10.4705C3.91813 12.0826 6.80172 13.3892 10.3593 13.3892C13.9169 13.3892 16.8008 12.0826 16.8008 10.4705V7.14865L11.6033 9.209C11.2055 9.36657 10.7869 9.44643 10.3592 9.44643Z" />
              <path d="M20.3654 3.78324L11.2504 0.17015C10.678 -0.0567168 10.0404 -0.0567168 9.46782 0.17015L0.352937 3.78324C0.139848 3.86767 0 4.07372 0 4.30286C0 4.53211 0.139951 4.73805 0.352937 4.82258L1.62888 5.32832V8.94628C1.34546 9.13948 1.15931 9.46497 1.15931 9.83386C1.15931 10.1718 1.31551 10.4731 1.55947 10.67L1.1709 12.5353C1.11879 12.7856 1.18209 13.0462 1.34349 13.2444C1.50478 13.4428 1.74687 13.5579 2.00243 13.5579H2.46333C2.71899 13.5579 2.96098 13.4428 3.12227 13.2444C3.28357 13.0462 3.34686 12.7856 3.29486 12.5353L2.90617 10.67C3.15024 10.4731 3.30645 10.1717 3.30645 9.83386C3.30645 9.46486 3.1203 9.13948 2.83688 8.94628V5.80713L9.43871 8.42428C10.03 8.65871 10.6883 8.65871 11.2796 8.42428L20.3656 4.82258C20.5787 4.73816 20.7186 4.53211 20.7186 4.30286C20.7185 4.07372 20.5785 3.86767 20.3654 3.78324Z" />
            </svg>
            <p className="hidden lg:block capitalize w-0 group-hover/list:w-fit text-[19px] group-hover/li:text-accentColor opacity-0 group-hover/list:opacity-100 transition text-white">
              training
            </p>
          </li>
          <div className="relative group/li mb-[15px]">
            <li className="w-full flex  gap-[10px] group-hover/li:bg-accentColor group-hover/li:blur-md transition">
              <img src="./assets/auto.svg" alt="bell" />
              <p className="hidden lg:block capitalize text-[19px] text-text2 w-0 group-hover/list:w-fit opacity-0 group-hover/list:opacity-100">
                automation
              </p>
            </li>
            <div className="absolute w-full h-full flex justify-center items-center text-white top-0 opacity-0 hover:opacity-100 transition text-[14px] font-semibold">
              Coming Soon
            </div>
          </div>
          <div className="relative group/li mb-[15px]">
            <li className="w-full flex  gap-[10px] group-hover/li:bg-accentColor group-hover/li:blur-md transition">
              <img src="./assets/portfolio.svg" alt="bell" />
              <p className="hidden lg:block capitalize text-[19px] text-text2 w-0 group-hover/list:w-fit opacity-0 group-hover/list:opacity-100">
                Portfolio
              </p>
            </li>
            <div className="absolute w-full h-full flex justify-center items-center text-white top-0 opacity-0 hover:opacity-100 transition text-[14px] font-semibold">
              Coming Soon
            </div>
          </div>
          <div className="relative group/li mb-[15px]">
            <li className="w-full flex  gap-[10px] group-hover/li:bg-accentColor group-hover/li:blur-md transition">
              <img src="./assets/trading.svg" alt="bell" />
              <p className="hidden lg:block capitalize text-[19px] text-text2 w-0 group-hover/list:w-fit transition-all opacity-0 group-hover/list:opacity-100">
                Trading
              </p>
            </li>
            <div className="absolute w-full h-full flex justify-center items-center text-white top-0 opacity-0 hover:opacity-100 transition text-[14px] font-semibold">
              Coming Soon
            </div>
          </div>
        </ul>
      </div>
      <div className=" flex items-center flex-col">
        <div className="info flex justify-center items-center w-full gap-[14px] mb-[24.5px]">
          <img src="./assets/avatar.svg" alt="avatar" className="w-[38px]" />
          <div className="text  flex-col lg:hidden group-hover/list:flex transition-all">
            <div className="name text-[15px] font-bold text-white ">
              Moni Roy
            </div>
            <div className="rate text-[13px] font-semibold text-[#979797]">
              Beginner
            </div>
          </div>
        </div>
        <div className="rate text-[14px] text-[#424242] w-[120px] mb-[26px] lg:hidden group-hover/list:flex">
          Street Suite. 2.0
        </div>
      </div>
    </div>
  );
}

export default LeftList;
