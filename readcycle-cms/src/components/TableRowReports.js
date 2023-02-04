import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { swalConfirmDelete, swalError, swalSuccess } from "../helpers/swal";
import React, { useState } from "react";

export default function TableRowCategories(props) {
  const [status, setStatus] = useState("NotSolved");

  const handleClick = () => {
    setStatus("Solved");
  };

  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          <div>1</div>
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          <div>Chris Pratt not a trusted user! Please Ban him!</div>
        </td>
        <th className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
          {status === "NotSolved" ? (
            <button
              onClick={handleClick}
              className="mt-3 p-3 rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm mb-3 text-center"
            >
              Mark as Solved
            </button>
          ) : (
            <div className="text-center">Solved</div>
          )}
        </th>
      </tr>
    </>
  );
}
