import { useNavigate } from "react-router-dom";
import TableUsers from "../components/TableUsers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function ProductsPage() {
  return (
    <>
      <div className="overflow-x-auto">
        <h1 className="mb-10 text-3xl font-bold">Users</h1>
      </div>

      <TableUsers />
    </>
  );
}
