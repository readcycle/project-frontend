import TableRowUsers from "./TableRowUsers";

export default function TableUsers(props) {
  return (
    <>
      <div className="">
        <table className="min-w-full divide-y divide-gray-200 text-sm pt-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">No</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">User</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Email</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {props.users.map((user, index) => {
              return <TableRowUsers key={index} index={index} user={user} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
