import { StyledWelcomePage } from "./WelcomePage.styled";
import { WelcomeSection } from "../../Section/Section";
import { Container } from "../../Container/Container";
import { NavLink } from 'react-router-dom';



export const WelcomePage = () => {

    
    return(
        <WelcomeSection>
            <Container>
                <StyledWelcomePage>
                    <h1 className="welcome-title">WELCOME</h1>
                        <nav className="welcome-navigation">
                            <ul className="welcome-nav-list">
                                <li className="welcome-nav-item">
                                    <p className="welcome-item-text">If you still don't have an account, please proceed with</p>
                                    <NavLink className="welcome-nav-link" to="/signup">
                                        Sign Up
                                    </NavLink>
                                </li>
                                <li className="welcome-nav-item">
                                    <p className="welcome-item-text">If you already have an account, please proceed with</p>
                                    <NavLink className="welcome-nav-link" to="/signin">
                                        Sign In
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                </StyledWelcomePage>
            </Container>
        </WelcomeSection>
    )
};