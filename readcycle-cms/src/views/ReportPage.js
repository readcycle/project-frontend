import TableReports from "../components/TableReports";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchReports } from "../stores/actions/report/actionCreator";
import { swalError } from "../helpers/swal";
import { LOADING_SETLOADER, LOADING_UNSETLOADER } from "../stores/actions/loading/actionTypes";

export default function ReportsPage() {
  const { reports } = useSelector((state) => state.report);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOADING_SETLOADER,
    });

    dispatch(fetchReports())
      .catch((err) => {
        swalError(err.message);
      })
      .finally(() => {
        dispatch({
          type: LOADING_UNSETLOADER,
        });
      });
  }, []);

  return (
    <>
      <div className="">
        <h1 className="mb-10 text-3xl font-bold">Reports</h1>
      </div>

      <TableReports reports={reports} />
    </>
  );
}
