import { StyledHeader, StyledHeaderContainer } from "./Header.styled";
import { Container } from "../Container/Container";
import { Navigation } from "./Navigation/Navigation";
import { AuthNav } from "./AuthNav/AuthNav";
import { UserMenu } from "./UserMenu/UserMenu";
import {useAuth} from "../../hooks/useAuth"



export const Header = () => {
    const {isLoggedIn} = useAuth();


    return(
        <StyledHeader $isloggedin={isLoggedIn}>
            <Container>
                <StyledHeaderContainer>
                    <Navigation/>
                    {isLoggedIn ? <UserMenu/> : <AuthNav/>}
                </StyledHeaderContainer>
            </Container>
        </StyledHeader>
    )
};