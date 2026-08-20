import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../services/employeeList";
export default function EmployeeTable() {
  const { data, isPending, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
    staleTime: 10_000,
    gcTime: 30_000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });
  if (isPending)
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        Loading employees...
      </div>
    );
  if (isError)
    return (
      <div className="rounded-xl bg-white p-10 text-center text-red-600 shadow">
        Error: {error.message}
      </div>
    );
  return (
    <section className="rounded-xl bg-white p-6 shadow">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Employees</h2>
          <p className="text-sm text-gray-500">
            {data.length} employee records
          </p>
        </div>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {isFetching ? "Refreshing..." : "Refresh"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px]">
          <thead>
            <tr className="bg-gray-50">
              {[
                "Employee ID",
                "Name",
                "Email",
                "Department",
                "Designation",
                "Status",
              ].map((h) => (
                <th
                  key={h}
                  className="border-b p-3 text-left text-xs uppercase text-gray-600"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e.employeeId} className="hover:bg-gray-50">
                <td className="border-b p-3">{e.employeeId}</td>
                <td className="border-b p-3 font-semibold">{e.name}</td>
                <td className="border-b p-3">{e.email}</td>
                <td className="border-b p-3">{e.department}</td>
                <td className="border-b p-3">{e.designation}</td>
                <td className="border-b p-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${e.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                  >
                    {e.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
