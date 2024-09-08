import { useEffect, useState } from "react";
import { createEmployee,getEmployee, updateEmployee } from "../service/employee";
import { useNavigate, useParams } from "react-router-dom";

function Add_Employee() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const navigator = useNavigate();
  const {id} = useParams();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  useEffect(() => {
    if(id){
      getEmployee(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
    }).catch( error => console.error(error));
    }
  },[]);

  function saveEmployee(event) {
    event.preventDefault();
    if (validateForm()) {
      if(id){
        const data = {
          "id":id,
          "firstName": firstName,
          "lastName": lastName,
          "email": email
        };
        updateEmployee(id, data).then((response) => {
            navigator("/employee/" + id);
        }).catch((e) => {
            console.error(e)
        });
      }
      else{
        const data = {
          "firstName": firstName,
          "lastName": lastName,
          "email": email
        };
        createEmployee(data).then((response) => {
          navigator("/employee/" + response.data.id );
        }).catch((e) => {
          console.error(e)
        });
      }
    }

  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };
    if (firstName.trim()) {
      errorsCopy.firstName = "";

    }
    else {
      errorsCopy.firstName = "First Name is required";
      valid = false;
    }
    if (lastName.trim()) {
      errorsCopy.lastName = "";

    }
    else {
      errorsCopy.lastName = "Last Name is required";
      valid = false;
    }
    if (email.trim()) {
      errorsCopy.email = "";

    }
    else {
      errorsCopy.email = "Email is required";
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle(){
    if(id){
      return <h1 className="text-center bg-dark text-white rounded mx-0">Update Employee</h1>
    }
    else{
      return <h1 className="text-center bg-dark text-white rounded mx-0">Add Employee</h1>
    }
  }

  return (
    <div className="container border rounded mt-5 w-50 bg-light">
      {
        pageTitle()
      }
      <form className="mx-2">
        <div className="form-group">
          <label className="font-weight-bold" for="InputFirstName">First Name</label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            id="InputFirstName"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => { setFirstName(event.target.value) }}
            required
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        <div className="form-group">
          <label className="font-weight-bold" for="InputLastName">Last Name</label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            id="InputLastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => { setLastName(event.target.value) }}
            required
          />
          {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
        </div>
        <div className="form-group">
          <label className="font-weight-bold" for="InputEmail">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="InputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(event) => { setEmail(event.target.value) }}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <button type="submit" onClick={(event) => saveEmployee(event)} className="btn btn-primary my-3">
          Save Employee
        </button>
      </form>
    </div>
  );
}

export default Add_Employee;
