/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

const buttons = [
  {
    title: 1,
    id: 1,
  },
  {
    title: 2,
    id: 2,
  },
  {
    title: 3,
    id: 3,
  },
  {
    title: 4,
    id: 4,
  },
  {
    title: 5,
    id: 5,
  },
];

export const InteractiveRating = () => {
  const [select, setSelect] = useState(0);
  const [view, setView] = useState(false);
  return (
    <div className="h-screen bg-Black-Blue">
      {!view ? (
        <div className="sm:p-8 p-6 sm:rounded-3xl rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-Dark-Blue absolute sm:w-[400px] w-[324px]">
          <div
            id="star"
            className="rounded-full sm:p-4 p-3 bg-Round-Back sm:w-[50px] w-10 sm:h-[50px] h-10 flex items-center justify-center"
          >
            <img src="/image/icon.svg" alt="Star" />
          </div>
          <div id="text" className="sm:my-8 my-4 font-Overpass">
            <h1 id="title" className="text-white font-bold text-[22px] mb-4">
              How did we do?
            </h1>
            <h2
              id="description"
              className="font-normal text-Medium-Grey text-base -tracking-[0.1px] sm:leading-7 leading-5 sm:mb-0 mb-6"
            >
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </h2>
          </div>
          <div
            id="buttons"
            className="grid grid-rows-2 sm:gap-8 gap-6 sm:my-0 my-2"
          >
            <div className="grid grid-cols-5 sm:gap-6 gap-4">
              <>
                {buttons.map((button) => (
                  <>
                    {select === button.id ? (
                      <div className="sm:p-4 p-3 rounded-full cursor-pointer bg-Orange sm:w-[50px] w-[42px] sm:h-[50px] h-[42px] flex items-center justify-center text-white">
                        <p className="text-base">{button.title}</p>
                      </div>
                    ) : (
                      <div
                        className="sm:p-4 p-3 bg-Round-Back rounded-full cursor-pointer hover:bg-Light-Grey active:bg-Orange sm:w-[50px] w-[42px] sm:h-[50px] h-[42px] flex items-center justify-center hover:text-white active:text-white text-Medium-Grey"
                        onClick={() => setSelect(button.id)}
                      >
                        <p className="text-base">{button.title}</p>
                      </div>
                    )}
                  </>
                ))}
              </>
            </div>
            <button
              className="bg-Orange hover:bg-Light-Grey rounded-3xl active:bg-white text-white hover:text-Orange active:text-Orange"
              onClick={() => setView(!view)}
            >
              <h3 className="text-base font-Overpass tracking-[5px]">SUBMIT</h3>
            </button>
          </div>
        </div>
      ) : (
        <div className="p-8 rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[418px] h-[418px] bg-Dark-Blue">
          <div className="mx-20 grid grid-rowx-3 gap-4 my-4">
            <img src="/image/thank-you.svg" alt="" />
            <div className="px-4 py-2 rounded-3xl bg-Round-Back text-Orange">
              <h3 className="text-base">You selected {select} out of 5</h3>
            </div>
            <h1 className="text-white font-bold text-[28px] text-center">
              Thank you!
            </h1>
          </div>
          <h2
            id="description"
            className="text-Medium-Grey tracking-[0.5px] font-Overpass text-center"
          >
            We appreciate you taking the time to give a rating. If you ever need
            more support, don&apos;t hesitate to get in touch!
          </h2>
        </div>
      )}
    </div>
  );
};
