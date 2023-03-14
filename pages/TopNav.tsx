import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const TopNav = () => {
  return (
    <>
      <div
        className={`flex items-center justify-end py-2 w-full border-b-[1px] border-b-blue-100`}
      >
        <nav className="flex items-center justify-end mx-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block outline-none w-60 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 hover:border-blue-500 focus:border-2 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-500"
              placeholder="Enter your video URL..."
              required
            />
          </div>
          <Button className="rounded ml-3">Upgrade</Button>
        </nav>
      </div>
    </>
  );
};

export default TopNav;
