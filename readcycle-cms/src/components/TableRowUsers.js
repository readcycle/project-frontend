import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { swalConfirmDelete, swalError, swalSuccess } from "../helpers/swal";
import React, { useState } from "react";

export default function TableRowProducts(props) {
  const [banStatus, setBanStatus] = useState("not_ban");

  const handleBanClick = (event) => {
    event.preventDefault();
    setBanStatus("ban");
  };

  const handleUnbanClick = (event) => {
    event.preventDefault();
    setBanStatus("not_ban");
  };

  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">1</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Chris Pratt</td>

        <th className="whitespace-nowrap px-4 py-2 text-gray-700">
          {banStatus === "not_ban" ? (
            <button
              className="mt-3 p-3 rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm mb-3 text-center"
              onClick={handleBanClick}
            >
              BAN
            </button>
          ) : (
            <button
              className="mt-3 p-3 rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm mb-3 text-center"
              onClick={handleUnbanClick}
            >
              UNBAN
            </button>
          )}
        </th>
      </tr>
    </>
  );
}
