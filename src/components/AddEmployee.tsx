import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEmployee } from "../services/employeeList";
import type { Employee } from "../types/Employee";

export default function AddEmployee() {
  const [successMessage, setSuccessMessage] = useState("");
  const queryClient = useQueryClient();
  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [status, setStatus] = useState<Employee["status"]>("Active");

  const mutation = useMutation({
    mutationFn: createEmployee,

    onSuccess: async (data) => {
      console.log("Employee created successfully:", data);

      // Clear the form
      setEmployeeId("");
      setName("");
      setEmail("");
      setDepartment("");
      setDesignation("");
      setStatus("Active");
      setSuccessMessage("Employee created successfully.");
      // Refresh employee list
      await queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
      setTimeout(() => {
        setSuccessMessage("");
      }, 1000);
      console.log("Employee query invalidated");
    },

    onError: (error) => {
      console.error("Failed to create employee:", error);
    },

    onSettled: () => {
      console.log("Employee mutation finished");
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const employee: Employee = {
      employeeId,
      name,
      email,
      department,
      designation,
      status,
    };

    mutation.mutate(employee);
  };

  return (
    <section className="mb-6 rounded-xl bg-white p-6 shadow">
      <h2 className="mb-5 text-2xl font-bold">Add Employee</h2>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          required
        />

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          required
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          required
        />

        <input
          type="text"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Employee["status"])}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={mutation.isPending}
            className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {mutation.isPending ? "Creating..." : "Add Employee"}
          </button>
        </div>
      </form>

      {successMessage && (
        <p className="mt-4 rounded-lg bg-green-100 p-3 text-green-700">
          {successMessage}
        </p>
      )}

      {mutation.isError && (
        <p className="mt-4 rounded-lg bg-red-100 p-3 text-red-700">
          Failed to create employee.
        </p>
      )}
    </section>
  );
}
