import TableRowReports from "./TableRowReports";

export default function TableReports(props) {
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
                <div className="flex items-center gap-2">Title</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Description</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {props.reports.map((report, index) => {
              return <TableRowReports key={index} index={index} report={report} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
