import {MainPage} from "../../components/Home/MainPage/MainPage";
import {WelcomePage} from "../../components/Home/WelcomePage/WelcomePage";
import { useAuth } from "../../hooks/useAuth";


const HomePage = () => {
    const { isLoggedIn } = useAuth();


    return isLoggedIn ? (
        <MainPage/>
    ) : (
        <WelcomePage/>
    )
};


export default HomePage;