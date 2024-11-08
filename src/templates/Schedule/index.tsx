import { FormEvent, useRef } from "react";

import Header from "../../components/Header";
import { Container, Form, Confirm, TempCalendar } from "./style";
import Select from "../../components/Select";

export default function Schedule() {

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return(
        <>
            <Header />
            <Container>
                <Form onSubmit={ handleSubmit }>
                    <Select
                        options={[
                            { label: "Opção 1", value: "1" },
                            { label: "Opção 2", value: "2" },
                            { label: "Opção 3", value: "3" },
                        ]}
                    />
                    <Select
                        options={[
                            { label: "Opção 1", value: "1" },
                            { label: "Opção 2", value: "2" },
                            { label: "Opção 3", value: "3" },
                        ]}
                    />
                    <Confirm>
                        Agendar
                    </Confirm>
                </Form>
                <TempCalendar />
            </Container>
        </>
    )
}