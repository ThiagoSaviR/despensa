import { HeaderContainer, Title } from "./styles"
import BackgroundHeader from "../../img/backgroundHeader.jpg"
import Menu from "../menu/index"

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <img src={BackgroundHeader} alt="flowers" />
                <Title>Despensa</Title>
                <Menu />
            </HeaderContainer>

        
        </>
    )
}

export default Header;