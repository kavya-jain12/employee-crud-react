import { EmployeeList } from './EmployeeList';

export const Home = () => {
    return (
        <div className="App">
            <div className="text-center py-10">
                <h1 className="font-bold text-3xl font-bold py-3">Employee Management System</h1>
                <h5 className="text-lg">CRUD with React Context API</h5>
            </div>
            <EmployeeList />
        </div>
    )
}