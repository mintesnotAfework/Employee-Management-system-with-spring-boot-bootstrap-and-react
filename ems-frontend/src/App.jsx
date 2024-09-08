import ListEmployee from "./employee/list_employee";
import Add_Employee from "./employee/add_employee";
import GetEmployee from "./employee/get_employee";
import Employee_Header from "./headers/employee_header";
import Employee_Footer from "./footers/employee_footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Employee_Header />
        <Routes>
          <Route path="/" element={<ListEmployee />}></Route>
          <Route path="/employee" element={<ListEmployee />}></Route>
          <Route path="/employee/add" element={<Add_Employee />}></Route>
          <Route path="/employee/:id" element={<GetEmployee />}></Route>
          <Route path="/employee/:id/edit" element={ <Add_Employee />}></Route>
        </Routes>
        <Employee_Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
