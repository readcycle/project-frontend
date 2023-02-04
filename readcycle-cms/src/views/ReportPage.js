import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TableReports from "../components/TableReports";
import { useEffect } from "react";

export default function CategoriesPage() {
  return (
    <>
      <div className="">
        <h1 className="mb-10 text-3xl font-bold">Reports</h1>
      </div>

      <TableReports />
    </>
  );
}
