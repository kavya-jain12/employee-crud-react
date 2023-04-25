import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { GlobalContext } from "../context/GlobalContext";

type propTypes = {
    page: string
}

export const EmployeeAction = ({ page }: propTypes) => {
    let navigate = useNavigate();
    const { id } = useParams();

    const { employees, addEmployee, editEmployee } = useContext(GlobalContext)
    const getEmployee = employees.find(emp => { return emp.id === parseInt(id as string) })

    const [name, setName] = useState(getEmployee?.name);
    const [location, setLocation] = useState(getEmployee?.location);
    const [designation, setDesignation] = useState(getEmployee?.designation);

    const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newEmployee = {
            id: page === 'Add' ? employees.length + 1 : getEmployee?.id,
            name,
            location,
            designation
        }
        page === 'Add' ? addEmployee(newEmployee) : editEmployee(newEmployee)

        navigate("/")
    }

    return (
        <div className="container mx-auto">
            <div className="text-center my-10">
                <h3 className="text-xl font-bold leading-8">{`${page} Employee`}</h3>
            </div>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name of employee
                        </label>
                        <input value={name}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input
                            value={location}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            onChange={(e) => setLocation(e.target.value)}
                            type="text"
                            placeholder="Enter location"
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
                            Designation
                        </label>
                        <input
                            value={designation}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            onChange={(e) => setDesignation(e.target.value)}
                            type="text"
                            placeholder="Enter designation"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Save
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </div >
    )
}