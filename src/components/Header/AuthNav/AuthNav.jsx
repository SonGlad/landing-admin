import { StyledAuthNav } from "./AuthNav.styled";
import { NavLink } from 'react-router-dom';
import avatar from '../../../images/images/profile-circle.png';



export const AuthNav = () => {

    
    return (
        <StyledAuthNav>
            <NavLink className="link" to="/singup">
                Sing up
            </NavLink>
            <span className='header-span'>/</span>
            <NavLink className="link" to="/singin">
                Sing in
            </NavLink>
            <img className="avatar-img" src={avatar} alt="Your avatar" width={28} />
        </StyledAuthNav>
    )
};