import {
    SectionStyle,
    WelcomeSectionStyled,
    RegisterSectionStyled,
    LoginSectionStyled
} from './Section.styled';


export const Section = ({children}) => {
    return (
        <SectionStyle>
            {children}
        </SectionStyle>
    );
};

export const WelcomeSection = ({children}) => {
    return (
        <WelcomeSectionStyled>
            {children}
        </WelcomeSectionStyled>
    );
};

export const RegisterSection = ({children}) => {
    return (
        <RegisterSectionStyled>
            {children}
        </RegisterSectionStyled>
    );
};


export const LoginSection = ({children}) => {
    return (
        <LoginSectionStyled>
            {children}
        </LoginSectionStyled>
    );
};