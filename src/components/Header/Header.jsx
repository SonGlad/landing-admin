import { StyledHeader, StyledHeaderContainer } from "./Header.styled";
import { Container } from "../Container/Container";
// import { AuthNav } from "./AuthNav/AuthNav";
import { Navigation } from "./Navigation/Navigation";
import { UserMenu } from "./UserMenu/UserMenu";



export const Header = () => {


    return(
        <StyledHeader>
            <Container>
                <StyledHeaderContainer>
                    <Navigation/>
                    <UserMenu/>
                    {/* <AuthNav/> */}
                </StyledHeaderContainer>
            </Container>
        </StyledHeader>
    )
};