import React,{useEffect, useState} from "react";
import { getAllEmployee,destroyEmployee } from "../service/employee";
import { useNavigate } from "react-router-dom"; 


function ListEmployee(){
    const [employees, setEmployees] = useState([]);
    const [search,setSearch] = useState(false);
    const [id, setId] = useState();
    const navigator = useNavigate();
    const [styles, setStyles] = useState({display:"none"});
    const [x,setX] = useState(0);

    useEffect( ()=> {
        getAllEmployee().then((response) => {
            setEmployees(response.data);
            console.log(employees)
        }).catch( error => console.error(error));
    },[x]);

    function addNewEmployee(){
        navigator("/employee/add");
    }

    function searchEmployee(){

        if(search){
            setStyles({display:"none"})
            setSearch(false);
        }
        else{
            setStyles({})
            setSearch(true);
        }
    }

    function findEmployee(employee_id){
        navigator(`/employee/${employee_id}`);
    }

    function editEmpl(employee_id){
        navigator(`/employee/${employee_id}/edit`);
    }

    function deleteEmployee(employee_id){
        destroyEmployee(employee_id).then((response) => {
            setX(x + 1);
            console.log(x)
        }).catch((error) => {
            console.error(error)
        })
    }

    return(
        <div className="table-responsive container m-3">
            <h1 className="text-center">List of Employees</h1>
            <button  onClick={() => addNewEmployee()} className="btn btn-primary my-1">Add Employee</button>
            <button  onClick={() => searchEmployee()} className="mx-1 btn btn-dark my-1">Search Employee</button>
            <form style={styles}>
                <input name="id" className="rounded mb-1" onChange={(event) => {setId(event.target.value)}} value={id}/>
                <input onClick={() => findEmployee(id)} type='button' value='Search' className="rounded btn-secondary"/>
            </form>
            <table className="table  table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button onClick={() => editEmpl(employee.id)} className="btn btn-primary">Update</button>
                                    <button onClick={() => findEmployee(employee.id)} className="btn btn-info mx-1">View</button>
                                    <button onClick={() => deleteEmployee(employee.id)} className="btn btn-secondary ml-1">Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployee