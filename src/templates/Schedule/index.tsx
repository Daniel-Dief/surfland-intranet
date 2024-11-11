import { useState, FormEvent, useRef } from "react";

import Header from "../../components/Header";
import { Container, Form, Confirm } from "./style";
import Select from "../../components/Select";

import SheduleCalendar from "../../components/SheduleCalendar";

export default function Schedule() {
    const [ selectedDate, setSelectedDate ] = useState<Date | undefined>(undefined);


    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log("Agendado", selectedDate?.toISOString());
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
                <SheduleCalendar
                    setSelectedDate={ setSelectedDate }
                />
            </Container>
        </>
    )
}