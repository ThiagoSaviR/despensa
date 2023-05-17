import { HeaderContainer, Title, Background } from "./styles"
import BackgroundHeader from "../../img/backgroundHeader.jpg"
import Menu from "../menu/index"

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Background src={BackgroundHeader} alt="flowers" />
                <Title>Menu Web</Title>
                <Menu />
            </HeaderContainer>

        
        </>
    )
}

export default Header;