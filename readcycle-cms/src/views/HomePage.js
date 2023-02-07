import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { swalError } from "../helpers/swal";
import { fetchBooks } from "../stores/actions/book/actionCreator";
import { fetchPosts } from "../stores/actions/post/actionCreator";
import { fetchReports } from "../stores/actions/report/actionCreator";
import { fetchUsers } from "../stores/actions/userlist/actionCreator";
import { LOADING_SETLOADER, LOADING_UNSETLOADER } from "../stores/actions/loading/actionTypes";

export default function HomePage() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);
  const { posts } = useSelector((state) => state.post);
  const { reports } = useSelector((state) => state.report);
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({
      type: LOADING_SETLOADER,
    });
    dispatch(fetchUsers())
      .then(() => {
        dispatch(fetchReports());
      })
      .then(() => {
        dispatch(fetchPosts());
      })
      .then(() => {
        dispatch(fetchBooks());
      })
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
      <div className="w-80">
        <h1 className="mb-10 text-3xl font-bold">Dashboard</h1>

        <div className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="mt-0.5 text-lg font-medium text-gray-900">Total Users</div>
          <div className="mt-0.5 text-lg font-medium text-gray-900">{users.length}</div>
        </div>
        <div className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="mt-0.5 text-lg font-medium text-gray-900">Total Reports</div>
          <div className="mt-0.5 text-lg font-medium text-gray-900">{reports.length}</div>
        </div>
        <div className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="mt-0.5 text-lg font-medium text-gray-900">Total Books</div>
          <div className="mt-0.5 text-lg font-medium text-gray-900">{books.length}</div>
        </div>
        <div className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="mt-0.5 text-lg font-medium text-gray-900">Total Posts</div>
          <div className="mt-0.5 text-lg font-medium text-gray-900">{posts.length}</div>
        </div>
      </div>
    </>
  );
}
