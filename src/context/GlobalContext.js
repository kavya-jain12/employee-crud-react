import { createContext, useReducer } from 'react';
import AppReducer from '../reducers/AppReducer';

const initialState = {
    employees: [
        {
            id: 1,
            name: 'Kavya Jain',
            location: 'United Kingdom',
            designation: 'React Developer'
        }
    ],
    removeEmployee: (id) => { return id },
    addEmployee: (employee) => { return employee },
    editEmployee: (employee) => { return employee }
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeEmployee(id) {
        dispatch({
            type: 'REMOVE_EMPLOYEE',
            payload: id
        });
    }

    function addEmployee(employees) {
        dispatch({
            type: 'ADD_EMPLOYEES',
            payload: employees
        });
    }

    function editEmployee(employees) {
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: employees
        });
    }

    return (
        <GlobalContext.Provider value={
            {
                employees: state.employees,
                removeEmployee,
                addEmployee,
                editEmployee
            }
        }> {children} </GlobalContext.Provider>)
}