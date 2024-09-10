import axios from 'axios'

const REST_API_BASE_URL = "http://localhost:65001/api/employees";


export const getAllEmployee = () => {
    console.log(REST_API_BASE_URL)
    const URL = REST_API_BASE_URL + "/all";
    return axios.get(URL);
}

export const createEmployee = (data) => {
    const URL = REST_API_BASE_URL;
    const saved = axios.post(URL,data);
    return saved;
}

export const getEmployee = (id) => {
    const URL = REST_API_BASE_URL + "/" + id;
    const employee = axios.get(URL);
    return employee;
}

export const updateEmployee= (id,employee) => {
    const URL = REST_API_BASE_URL + "/" + id;
    const updatedEmployee = axios.put(URL,employee);
    return updatedEmployee;
}

export const destroyEmployee = (id) => {
    const URL = REST_API_BASE_URL + "/" + id;
    return axios.delete(URL);
}