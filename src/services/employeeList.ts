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
  console.log("getEmployees() called:", new Date().toLocaleTimeString());

  await new Promise((resolve) => setTimeout(resolve, 600));

  return employees;
}
export async function createEmployee(employee: Employee): Promise<Employee> {
  console.log("Creating employee:", employee);

  await new Promise((resolve) => setTimeout(resolve, 800));

  employees.push(employee);

  return employee;
}
