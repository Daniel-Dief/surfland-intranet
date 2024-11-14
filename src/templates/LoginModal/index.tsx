import { useRef, FormEvent } from "react";

import InputPassword from "../../components/Inputs/Password"
import InputText from "../../components/Inputs/Text"
import InputSubmit from "../../components/Inputs/Submit"
import { Container, TitleBox, Title, CloseButton, Form } from "./style";

import { useModalActive } from "../../store/modalActive";
import submitLogin from "./logic/submit";

export default function LoginModal() {
    const [ loginRef, passwordRef ] = [ useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null) ];
    const { close : closeModal} = useModalActive();

    function handleLogin(e : FormEvent<HTMLFormElement>) {
        submitLogin({
            e,
            login: loginRef.current?.value,
            password: passwordRef.current?.value
        });
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