import { createContext, useReducer } from 'react';
import AppReducer from '../reducers/AppReducer';
import { EmployeeTypes } from '../types/employee';

const initialState = {
    employees: [
        {
            id: 1,
            name: 'Kavya Jain',
            location: 'United Kingdom',
            designation: 'React Developer'
        }
    ],
    removeEmployee: (id: number) => { return id },
    addEmployee: (employee: any) => { return employee },
    editEmployee: (employee: any) => { return employee }
}

export const GlobalContext = createContext<any>(initialState)

export const GlobalContextProvider = ({ children }: any): any => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeEmployee(id: number) {
        dispatch({
            type: 'REMOVE_EMPLOYEE',
            payload: id
        });
    }

    function addEmployee(employees: EmployeeTypes) {
        dispatch({
            type: 'ADD_EMPLOYEES',
            payload: employees
        });
    }

    function editEmployee(employees: EmployeeTypes) {
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: employees
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                employees: state.employees,
                removeEmployee,
                addEmployee,
                editEmployee
            }}>
            {children}
        </GlobalContext.Provider>
    )
}