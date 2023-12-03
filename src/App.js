import {useState, useEffect} from 'react';
import './App.css';
import Base from './components/base/Base'
import EmployeeCard from './components/employee-card/EmployeeCard';
import dummyData from './data/mdata-employees.json';
import apiService from './services/apis/APIService';

function App() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await apiService.getEmployees();
        setEmployees(data);
      } catch (error){
        console.log("Error while fetching data: ", error);
        alert("There has been an error while trying to fetch employee data. Please check console.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      Employee Card Below
      {
        employees.map((empInfo)=> (
          <EmployeeCard employeeInfo={empInfo}/>
        ))
      }
    </div>
  );
}

export default App;
