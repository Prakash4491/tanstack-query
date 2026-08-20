import EmployeeTable from "./components/EmployeeTable";
import AddEmployee from "./components/AddEmployee";
export default function App() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-7">
          <h1 className="mt-2 text-4xl font-bold">Employee Management</h1>
        </header>
        <AddEmployee />
        <EmployeeTable />
      </div>
    </main>
  );
}
