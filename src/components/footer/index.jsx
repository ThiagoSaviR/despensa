import { FooterContainer, Blackground, Text, Author, TextWrapper } from "./styles";
import BgImage from "../../img/backgroundHeader.jpg"

const Footer = () => {
    return (
        <FooterContainer>
            <Blackground src={BgImage} alt="flowers" />
            <TextWrapper>
                <Text>" Uma mensagem bonita todo dia! "</Text>
                <Author>Ele mesmo</Author>
            </TextWrapper>
        </FooterContainer>
    )
}

export default Footer;