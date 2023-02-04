import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h2 className="text-center text-2xl font-bold text-grey-600 sm:text-3xl">Sign In</h2>

          <form className="mt-6 mb-0 space-y-5 rounded-lg p-8 shadow-2xl">
            <div>
              <label className="sr-only">Email</label>

              <div className="relative">
                <input
                  name="email"
                  // value={formLogin.email}
                  // onChange={handleChangeInput}
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Password</label>
              <div className="relative">
                <input
                  name="password"
                  // value={formLogin.password}
                  // onChange={handleChangeInput}
                  type="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="text-center flex justify-center pt-4">
              <button
                type="submit"
                className="inline-block shrink-0 rounded-md border border-[#1d3557] bg-[#1d3557] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#1d3557] focus:outline-none focus:ring active:text-red-400 dark:hover:bg-red-600 dark:hover:text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
