import { Icon } from "../../common/styles/images";
import { Button, Text } from "./styles";
import { redirect } from "./logic";
import { useModalActive } from "../../store/modalActive";

interface Props {
    text: string;
    imgPath: string;
    hrefText?: string;
}

export default function NavButton({ text, imgPath, hrefText  }: Props) {
    const { open } = useModalActive();

    return (
        <Button
            onClick={
                hrefText
                ?
                    () => redirect(hrefText)
                :
                    () => open("login")
            }
        >
            <Icon src={imgPath}/>
            <Text>{text}</Text>
        </Button>
    )
}