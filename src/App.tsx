import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from './components/Home';
import { EmployeeAction } from './components/EmployeeAction';
import { GlobalContextProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<EmployeeAction page='Add' />} />
          <Route path="/edit/:id" element={<EmployeeAction page='Edit' />} />
        </Routes>
      </Router >
    </GlobalContextProvider>
  );
}

export default App;
