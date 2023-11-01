import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";


const PriveateRoute = ({children}) => {
    const {user , loading } = useContext(AuthContext)
   
 if(loading){<Circles
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
    return 
 }

  if(user?.email){
    return children
  }

    return <Navigate to={"/login" } replace></Navigate>
};

export default PriveateRoute;