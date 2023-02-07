import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { swalConfirmDelete, swalError, swalSuccess } from "../helpers/swal";
import React, { useState } from "react";
// import { fetchReports } from "../stores/actions/report/actionCreator";
// import { LOADING_SETLOADER, LOADING_UNSETLOADER } from "../stores/actions/loading/actionTypes";
import { solveReports, fetchReports } from "../stores/actions/report/actionCreator";

export default function TableRowCategories(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [status, setStatus] = useState("NotSolved");

  const handleClick = (id) => {
    dispatch(solveReports(id))
      .then(() => {
        return dispatch(fetchReports());
      })
      .then(() => {
        navigate("/reports");
      });
  };

  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          <div>{props.index + 1}</div>
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          <div>{props.report.title}</div>
        </td>
        <td className="whitespace-pre-wrap px-4 py-2 text-gray-700">
          <div>{props.report.content}</div>
        </td>
        <th className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
          {!props.report.isSolved ? (
            <button
              onClick={() => handleClick(props.report.id)}
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
