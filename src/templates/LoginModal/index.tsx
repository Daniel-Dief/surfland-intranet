import { useRef, FormEvent } from "react";

import InputPassword from "../../components/Inputs/Password"
import InputText from "../../components/Inputs/Text"
import InputSubmit from "../../components/Inputs/Submit"
import { Container, TitleBox, Title, CloseButton, Form } from "./style";

import Submit from "./logic/submit";
import { useConfigModal } from "../../store/configModal";

export default function LoginModal() {
    const [ loginRef, passwordRef ] = [ useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null) ];
    const { close : closeModal} = useConfigModal();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        Submit({
            login : loginRef.current?.value,
            password : passwordRef.current?.value
        });
    }

    return (
        <Container>
            <TitleBox>
                <Title>Login</Title>
                <CloseButton src={require("../../assets/images/close.png")} onClick={ closeModal }/>
            </TitleBox>
            <Form onSubmit={ handleSubmit }>
                <InputText placeholder="Documento" inputRef={ loginRef }/>
                <InputPassword placeholder="Senha" inputRef={ passwordRef }/>
                <InputSubmit value="Entrar" />
            </Form>
        </Container>
    )
}