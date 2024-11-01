import { Icon } from "../../common/styles/images";
import { Button } from "./style";
import { redirect, userModal } from "./logic";

interface Props {
    text: string;
    imgPath: string;
    hrefText?: string;
}

export default function NavButton({ text, imgPath, hrefText  }: Props) {
    return (
        <Button
            onClick={
                hrefText
                ?
                    () => redirect(hrefText)
                :
                    userModal
            }
        >
            <Icon src={imgPath}/>
            <p>{text}</p>
        </Button>
    )
}