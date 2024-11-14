import { FormEvent } from "react";
import sendLoginRequest from "../../../services/auth/logIn.service";

interface Props {
    e : FormEvent<HTMLFormElement>;
    login ?: string;
    password ?: string;
}

export default async function submitLogin({ e, login, password } : Props ) {
    e.preventDefault();

    if (!login || !password) {
        throw new Error("Login and password are required");
    }

    sendLoginRequest({
        login,
        password
    });
}