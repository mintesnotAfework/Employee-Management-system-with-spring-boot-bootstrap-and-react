import { useNavigate } from "react-router-dom";

function Employee_Header(){
    const navigator = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                    <span onClick={() => navigator("/employee")} className="navbar-brand px-3">Employee Managenement System</span>
            </nav>
        </div>
    );
}

export default Employee_Header