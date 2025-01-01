import { Container, List } from './styles'
import NavButton from '../NavButton'
import useUser from '../../store/useUser'
import { useModalActive } from '../../store/modalActive'

export default function Header() {
    const { open } = useModalActive()
    const loggedUser = useUser()
    
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
                        text = {loggedUser.userId !== 0 ? loggedUser.userId.toString() : "Login"}
                        imgPath={require("../../assets/images/user.png")}
                        onClick={
                            loggedUser.userId !== 0
                            ? () => alert("logado")
                            : () => open("login")
                        }
                    />
                </li>
            </List>
        </Container>
    )
}