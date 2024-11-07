interface Props {
    login : string | undefined;
    password : string | undefined;
}

export default function handleSubmit({ login, password } : Props) {
    console.log({
        login,
        password
    })
}