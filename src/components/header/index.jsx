import { HeaderContainer, Title, Background } from "./styles"
import BackgroundHeader from "../../img/backgroundHeader.jpg"
import Menu from "../menu/index"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navgate = useNavigate()
    return (
        <>
            <HeaderContainer>
                <Background src={BackgroundHeader} alt="flowers" />
                <Title onClick={() => {
                    navgate("/")
                }}>Daily Menu</Title>
                <Menu />
            </HeaderContainer>


        </>
    )
}

export default Header;