import { Icon } from "../../common/styles/images";
import { Button, Text } from "./style";
import { redirect } from "./logic";
import { useConfigModal } from "../../store/configModal";

interface Props {
    text: string;
    imgPath: string;
    hrefText?: string;
}

export default function NavButton({ text, imgPath, hrefText  }: Props) {
    const { open } = useConfigModal();

    return (
        <Button
            onClick={
                hrefText
                ?
                    () => redirect(hrefText)
                :
                    open
            }
        >
            <Icon src={imgPath}/>
            <Text>{text}</Text>
        </Button>
    )
}