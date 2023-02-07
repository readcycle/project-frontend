import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { swalConfirmDelete, swalError, swalSuccess } from "../helpers/swal";
import React, { useState } from "react";
import { banUser, fetchUsers } from "../stores/actions/userlist/actionCreator";

export default function TableRowProducts(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBanClick = (id) => {
    dispatch(banUser(id))
      .then(() => {
        return dispatch(fetchUsers());
      })
      .then(() => {
        navigate("/users");
      });
  };

  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.index + 1}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.user.fullname}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.user.email}</td>

        <th className="whitespace-nowrap px-4 py-2 text-gray-700">
          {!props.user.isBanned ? (
            <button
              className="mt-3 p-3 rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm mb-3 text-center"
              onClick={() => handleBanClick(props.user.id)}
            >
              BAN
            </button>
          ) : (
            <button
              className="mt-3 p-3 rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm mb-3 text-center"
              onClick={() => handleBanClick(props.user.id)}
            >
              UNBAN
            </button>
          )}
        </th>
      </tr>
    </>
  );
}
