import './EmployeeCard.css';
import dummyData from '../../data/mdata-employees.json';

export default function EmployeeCard({employeeInfo}){
    // employeeInfo = dummyData[0];
    let {
        first_name,
        last_name,
        email,
        department,
        position
    } = employeeInfo;

    let fullName = first_name+' '+last_name;
    
    return(
        <div className="employee-card">
            <h3 className="emp-name">{fullName}</h3>
            <span className="designation-dept">
                {position} | {department}
            </span>
            <div className="emp-contact">{email}</div>
        </div>
    );
}