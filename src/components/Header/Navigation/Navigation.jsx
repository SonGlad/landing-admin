import { StyledNavigation } from "./Navigation.styled";
import { NavLink } from 'react-router-dom';
import HeaderLogo from "../../../images/images/logo.png";


export const Navigation = () => {

    
    return (
        <StyledNavigation>
            <NavLink className="link" to="/">
                <img className="header-logo-img" src={HeaderLogo} alt="header logo" width="42" height="42"/>
            </NavLink>
        </StyledNavigation>
    )
}; 