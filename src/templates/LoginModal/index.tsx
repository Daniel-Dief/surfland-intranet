import { useRef, FormEvent } from "react";

import InputPassword from "../../components/Inputs/Password"
import InputText from "../../components/Inputs/Text"
import InputSubmit from "../../components/Inputs/Submit"
import { Container, TitleBox, Title, CloseButton, Form } from "./style";
import sendLoginRequest from "../../services/auth/logIn.service";
import { useModalActive } from "../../store/modalActive";
import useToken from "../../store/useToken";
import useUser from "../../store/useUser";

export default function LoginModal() {
    const [ loginRef, passwordRef ] = [ useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null) ];
    const { close : closeModal} = useModalActive();
    const { setToken } = useToken();
    const { setUser } = useUser();

    async function handleLogin(e : FormEvent<HTMLFormElement>) {        
        e.preventDefault();
        const login = loginRef.current?.value;
        const password = passwordRef.current?.value;

        if (!login || !password) {
            throw new Error("Login and password are required");
        }

        const loginResponse = await sendLoginRequest({
            login,
            password
        });

        if(loginResponse.status) {
            setToken(loginResponse.token);
            closeModal();
        } else {
            console.error(loginResponse.message);
        }

        setUser(loginResponse.data);
    }

    return (
        <Container>
            <TitleBox>
                <Title>Login</Title>
                <CloseButton src={require("../../assets/images/close.png")} onClick={ closeModal }/>
            </TitleBox>
            <Form onSubmit={ handleLogin }>
                <InputText placeholder="Documento" inputRef={ loginRef }/>
                <InputPassword placeholder="Senha" inputRef={ passwordRef }/>
                <InputSubmit value="Entrar" />
            </Form>
        </Container>
    )
}