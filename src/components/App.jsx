import { SharedLayout } from "./SharedLayout";
import { Route, Routes} from "react-router-dom";
import { lazy } from "react";
// import { useDispatch} from "react-redux";
// import { PrivateRoute } from "./PrivateRoute";
// import { RestrictedRoute } from "./RestrictedRoute";


const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));


export const App= () => {
  return (
    <>
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
