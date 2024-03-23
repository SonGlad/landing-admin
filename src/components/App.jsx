import { SharedLayout } from "./SharedLayout";
import { Route, Routes} from "react-router-dom";
import { lazy } from "react";
import { Toaster } from "./ToastContainer/ToastContainer";
// import { useDispatch} from "react-redux";
// import { PrivateRoute } from "./PrivateRoute";
// import { RestrictedRoute } from "./RestrictedRoute";
// import { useAuth } from "../hooks/useAuth";



const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));


export const App= () => {
  // const {
  //   isLoadingAuth,
  //   isLoggedIn,
  //   isRefreshing,
  //   userName,
  //   userEmail,
  //   userPassword,
  //   userRole,
  //   userAvatarURL,
  //   userLocation,
  // } = useAuth();
  // console.log("Is Loading Auth", isLoadingAuth);
  // console.log("Is Lgged In", isLoggedIn);
  // console.log("Is Refreshing", isRefreshing);
  // console.log("User Name", userName);
  // console.log("User Email", userEmail);
  // console.log("User Password", userPassword);
  // console.log("User Avatar", userAvatarURL);
  // console.log("User Role", userRole);
  // console.log("User Location", userLocation);


  return (
    <>
    <Toaster/>
    <Routes>
      <Route path='/' element = {<SharedLayout/>}>
        <Route index element={<HomePage/>}/>
        {/* <Route path='*' element = {<Navigate to="/"/>}/> */}
        <Route path='/signup' element = {<RegisterPage/>}/>
        <Route path='/signin' element = {<LoginPage/>}/>
      </Route>    
    </Routes>
    </>
  );
};
