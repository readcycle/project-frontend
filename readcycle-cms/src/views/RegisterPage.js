import { useState } from "react";
import { useDispatch } from "react-redux";

export default function RegisterPage() {
  return (
    <>
      <div className="">
        <h1 className="mb-4 text-2xl font-bold text-center">Register Admin</h1>

        <form className="flex flex-col">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input
            name="email"
            // value={formUser.email}
            // onChange={handleChangeInput}
            type="email"
            placeholder="user@mail.com"
            className="mt-1 w-full p-2.5 rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm mb-7"
          />

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            name="password"
            // value={formUser.password}
            // onChange={handleChangeInput}
            type="password"
            placeholder="password"
            className="mt-1 w-full p-2.5 rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm mb-7"
          />

          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="inline-block shrink-0 rounded-md border border-[#1d3557] bg-[#1d3557] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#1d3557] focus:outline-none focus:ring active:text-red-400 dark:hover:bg-red-600 dark:hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
