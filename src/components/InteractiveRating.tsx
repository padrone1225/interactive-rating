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
        <div className="p-8 rounded-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-Dark-Blue absolute w-[400px]">
          <div
            id="star"
            className="rounded-full p-4 bg-Round-Back w-[50px] h-[50px] flex items-center justify-center"
          >
            <img src="/image/icon.svg" alt="Star" />
          </div>
          <div id="text" className="my-8 font-Overpass">
            <h1 id="title" className="text-white font-bold text-[22px] mb-4">
              How did we do?
            </h1>
            <h2
              id="description"
              className="font-normal text-Medium-Grey text-base tracking-wide leading-7"
            >
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </h2>
          </div>
          <div id="buttons" className="grid grid-rows-2 gap-8">
            <div className="grid grid-cols-5 gap-6">
              <>
                {buttons.map((button) => (
                  <>
                    {select === button.id ? (
                      <div className="p-4 rounded-full cursor-pointer bg-Orange w-[50px] h-[50px] flex items-center justify-center text-white">
                        <p className="text-base">{button.title}</p>
                      </div>
                    ) : (
                      <div
                        className="p-4 bg-Round-Back rounded-full cursor-pointer hover:bg-Light-Grey active:bg-Orange w-[50px] h-[50px] flex items-center justify-center hover:text-white active:text-white text-Medium-Grey"
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
