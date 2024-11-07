import { useState, Ref } from "react";
import { Container, Input, VisibleIcon } from "../style";

interface Props {
    inputRef: Ref<HTMLInputElement>;
    placeholder?: string;
}

export default function InputPassword({ inputRef, placeholder }: Props) {
    const [ visible, setVisible ] = useState<Boolean>(false);
    
    let imagePath = visible ? require("../../../assets/images/eye-on.png") : require("../../../assets/images/eye-off.png");

    function handleVisible() {
        setVisible(!visible);
    }

    return (
        <Container>
            <Input type={ visible ? "text" : "password" } placeholder={ placeholder } ref={ inputRef } />
            <VisibleIcon onClick={ handleVisible } src={ imagePath }/>
        </Container>
    )
}