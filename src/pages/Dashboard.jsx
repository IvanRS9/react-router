
import { useNavigate, Routes, Route, Link, Outlet } from 'react-router-dom'


const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Dashboard</h1>

            <button onClick={handleLogout}>Logout</button>
            <br /> <br />

            <Link to="welcome">
                Say hello!
            </Link>

            {/* <Routes>
                <Route path="welcome" element={<Welcome />} />
            </Routes> */}

            <Outlet />
        </div>
    )
}

export default Dashboard
