import { Container, List } from './styles'
import NavButton from '../NavButton'

export default function Header() {
    return (
        <Container>
            <List>
                <li>
                    <NavButton
                        text="Inicio"
                        imgPath={require("../../assets/images/logo.png")}
                        hrefText="Home"
                    />
                </li>
                <li>
                    <NavButton
                        text="Sessões"
                        imgPath={require("../../assets/images/ticket.png")}
                        hrefText="MySessions"
                    />
                </li>
                <li>
                    <NavButton
                        text="Usuário"
                        imgPath={require("../../assets/images/user.png")}
                    />
                </li>
            </List>
        </Container>
    )
}