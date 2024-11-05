import Header from '../../components/Header';
import Container from '../../components/Container';
import { Main } from './styles';

export default function Home() {
    return(
        <>
            <Header />
            <Main>
                <Container
                    title="Minhas Sessões"
                    imgPath={require("../../assets/images/sunshade.png")}
                    linkHref="MySessions"
                    linkText="Minhas sessões"
                />
                <Container
                    title="Bora surfar!"
                    imgPath={require("../../assets/images/surf.png")}
                    linkHref="Schedule"
                    linkText="Agendar"
                />
            </Main>
        </>
    )
}