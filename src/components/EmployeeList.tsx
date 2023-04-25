import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

type employeeTypes = {
    id: number,
    name: string
    location: string,
    designation: string
}

export const EmployeeList = () => {
    const { employees, removeEmployee } = useContext(GlobalContext);

    const handleRemoveEmployee = (id: number) => {
        removeEmployee(id)
    }

    return (
        <div className="container mx-auto">
            <div className="grid grid-rows-1 grid-flow-col gap-2 items-center">
                <div>
                    <h3 className="text-xl font-bold leading-8">Employee Listing</h3>
                </div>
                <div>
                    <Link to="/add">
                        <button className="inline-flex float-right items-center font-semibold justify-center px-4 py-2 bg-blue-500 rounded-md shadow-lg">
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                            <span className="pl-2 text-white">Add Employee</span>
                        </button>
                    </Link>
                </div>
            </div>
            {employees.length > 0 ?
                employees.map((employee: employeeTypes) => {
                    return (
                        <div className="flex bg-slate-100 py-6 px-5 mt-5 rounded min-h-20">
                            <div className="flex-auto text-left">
                                <p className="text-black font-bold text-2xl">{employee.name}</p>
                                <p className="text-gray-600 text-md">{employee.designation}</p>
                                <p className="text-black font-bold text-md mt-3">{employee.location}</p>
                            </div>
                            <div className="flex-auto text-right m-5">
                                <Link to={`/edit/${employee.id}`}>
                                    <button className="p-2.5 bg-gray-400 rounded-xl hover:rounded-3xl hover:bg-gray-500 transition-all duration-300 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                </Link>
                                <button onClick={() => handleRemoveEmployee(employee.id)} className="p-2.5 bg-red-500 rounded-xl hover:rounded-3xl hover:bg-gray-500 transition-all duration-300 text-white ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )
                })
                :
                <p className="mt-5 text-center bg-gray-100 text-gray-500 py-5">No data</p>
            }
        </div>
    )
}