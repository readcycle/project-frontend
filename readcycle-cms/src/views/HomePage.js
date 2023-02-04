import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {
  return (
    <>
      <div className="">
        <h1 className="mb-10 text-3xl font-bold">Dashboard</h1>

        <div className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="mt-0.5 text-lg font-medium text-gray-900">Total Users</div>
          <div className="mt-0.5 text-lg font-medium text-gray-900">100</div>
        </div>
        <div className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="mt-0.5 text-lg font-medium text-gray-900">Total Reports</div>
          <div className="mt-0.5 text-lg font-medium text-gray-900">2</div>
        </div>
        <div className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="mt-0.5 text-lg font-medium text-gray-900">Total Books</div>
          <div className="mt-0.5 text-lg font-medium text-gray-900">2</div>
        </div>
        <div className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="mt-0.5 text-lg font-medium text-gray-900">Total Posts</div>
          <div className="mt-0.5 text-lg font-medium text-gray-900">2</div>
        </div>
      </div>
    </>
  );
}
