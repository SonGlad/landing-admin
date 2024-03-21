import { StyledAuthNav } from "./AuthNav.styled";
import { NavLink } from 'react-router-dom';
import avatar from '../../../images/images/profile-circle.png';



export const AuthNav = () => {

    
    return (
        <StyledAuthNav>
            <NavLink className="link" to="/signin">
                Sing in
            </NavLink>
            <span className='header-span'>/</span>
            <NavLink className="link" to="/signup">
                Sing up
            </NavLink>
            <img className="avatar-img" src={avatar} alt="Your avatar" width={28} />
        </StyledAuthNav>
    )
};