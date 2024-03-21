import { StyledWelcomePage } from "./WelcomePage.styled";
import { Section } from "../../Section/Section";
import { Container } from "../../Container/Container";



export const WelcomePage = () => {

    
    return(
        <Section>
            <Container>
                <StyledWelcomePage>
                    <h1>WELCOME</h1>
                </StyledWelcomePage>
            </Container>
        </Section>
    )
};