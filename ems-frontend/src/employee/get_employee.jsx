import { useEffect, useState } from "react"
import { destroyEmployee, getEmployee } from "../service/employee";
import { useNavigate, useParams } from "react-router-dom";

function GetEmployee(){
    const [employee,setEmployee] = useState({});
    const navigator = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getEmployee(id).then((response) => {
            setEmployee(response.data);
        }).catch( error => console.error(error));
    },[]);

    function editEmployee(){
        navigator("/employee/" + id +"/edit")
    }

    function deleteEmployee(){
        destroyEmployee(id).then((response) => {
            navigator("/employee")
        }).catch((error) => {
            console.error(error)
        })
    }
    return (
        <div className="table-responsive container m-3">
        <h1 className="text-center">Employee</h1>
        <button  onClick={() => editEmployee()} className="btn btn-primary my-1 mr-1">Edit Employee</button>
        <button  onClick={() => deleteEmployee()} className="btn btn-secondary m-1">Delete Employee</button>
        <table className="table  table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default GetEmployee