import TableUsers from "../components/TableUsers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../stores/actions/userlist/actionCreator";
import { swalError } from "../helpers/swal";
import { LOADING_SETLOADER, LOADING_UNSETLOADER } from "../stores/actions/loading/actionTypes";

export default function UsersPage() {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOADING_SETLOADER,
    });

    dispatch(fetchUsers())
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
      <div className="overflow-x-auto">
        <h1 className="mb-10 text-3xl font-bold">Users</h1>
      </div>

      <TableUsers users={users} />
    </>
  );
}
