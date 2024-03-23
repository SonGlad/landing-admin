import { useSelector } from 'react-redux';
import {
    selectUserName,
    selectUserEmail,
    selectUserPassword,
    selectUserRole,
    selectUserAvatarURL,
    selectLoggedUser,
    selectLoading,
    selectRefreshing,
    selectSettingsUpdate,
    selectUserLocation,
} from "../redux/Auth/auth-selector";


export const useAuth = () => {
    const isLoadingAuth = useSelector(selectLoading);
    const isLoggedIn = useSelector(selectLoggedUser);
    const isRefreshing = useSelector(selectRefreshing);
    const isSettingsUpdated = useSelector(selectSettingsUpdate);
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPassword = useSelector(selectUserPassword);
    const userRole = useSelector(selectUserRole);
    const userAvatarURL = useSelector(selectUserAvatarURL);
    const userLocation = useSelector(selectUserLocation); 


    return {
        isLoadingAuth,
        isLoggedIn,
        isRefreshing,
        isSettingsUpdated,
        userName,
        userEmail,
        userPassword,
        userRole,
        userAvatarURL,
        userLocation,
    };
};