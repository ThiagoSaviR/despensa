import { HeaderContainer, Title, Background } from "./styles"
import Menu from "../menu/index"
import { useNavigate } from "react-router-dom"

import BackgroundHeader from "../../assets/images/backgroundHeader.jpg"

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