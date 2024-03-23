import { SharedLayout } from "./SharedLayout";
import { Route, Routes} from "react-router-dom";
import { lazy, useEffect } from "react";
import { Toaster } from "./ToastContainer/ToastContainer";
import { RefreshLoading } from "../components/CustomLoaders/CustomLoaders";
import { useAuth } from "../hooks/useAuth";
import { useDispatch} from "react-redux";
import { refreshCurrentUser } from "../redux/Auth/auth-operation";
import { Modal } from "./Modal/Modal";
import { useModal } from "../hooks/useModal";
// import { PrivateRoute } from "./PrivateRoute";
// import { RestrictedRoute } from "./RestrictedRoute";


const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));


export const App= () => {
  const dispatch = useDispatch();
  const {isLoadingAuth, isRefreshing} = useAuth();
  const {isSettingsModal} = useModal();


  useEffect(() => {
    dispatch(refreshCurrentUser());
  },[dispatch])


  return isRefreshing ? (
    <RefreshLoading/>
  ) : (
   <>
      {isLoadingAuth && <RefreshLoading />}
      <Toaster/>
      <Routes>
        <Route path='/' element = {<SharedLayout/>}>
          <Route index element={<HomePage/>}/>
          {/* <Route path='*' element = {<Navigate to="/"/>}/> */}
          <Route path='/signup' element = {<RegisterPage/>}/>
          <Route path='/signin' element = {<LoginPage/>}/>
        </Route>    
      </Routes>
      {(isSettingsModal) && <Modal/>}
    </>
  )
};
