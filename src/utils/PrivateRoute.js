import { Outlet, Navigate } from "react-router-dom";


const PrivateRoutes = () => {
    
    const user = window.localStorage.getItem('baldeagleUser')

    return (
        user != null ? <Outlet /> : <Navigate to="/login" />  
        )
}

export default PrivateRoutes