import type { Employee } from "../types/Employee";
const employees: Employee[] = [
  {
    employeeId: "EMP001",
    name: "Praveen",
    email: "praveen@onecloud.com",
    department: "Engineering",
    designation: "Software Engineer",
    status: "Active",
  },
  {
    employeeId: "EMP002",
    name: "Rahul",
    email: "rahul@onecloud.com",
    department: "HR",
    designation: "HR Executive",
    status: "Active",
  },
  {
    employeeId: "EMP003",
    name: "Priya",
    email: "priya@onecloud.com",
    department: "Finance",
    designation: "Financial Analyst",
    status: "Active",
  },
  {
    employeeId: "EMP004",
    name: "Arun",
    email: "arun@onecloud.com",
    department: "Development",
    designation: "Backend Developer",
    status: "Inactive",
  },
  {
    employeeId: "EMP005",
    name: "Sneha",
    email: "sneha@onecloud.com",
    department: "Marketing",
    designation: "Marketing Executive",
    status: "Active",
  },
  {
    employeeId: "EMP006",
    name: "Vikram",
    email: "vikram@onecloud.com",
    department: "Development",
    designation: "Frontend Developer",
    status: "Active",
  },
  {
    employeeId: "EMP007",
    name: "Vikranth",
    email: "vikranth@onecloud.com",
    department: "Development",
    designation: "Backend Developer",
    status: "Active",
  },
];
export async function getEmployees(): Promise<Employee[]> {
  await new Promise((r) => setTimeout(r, 600));
  return employees;
}
