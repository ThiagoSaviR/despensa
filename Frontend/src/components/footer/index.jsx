import { FooterContainer, Blackground, Text, Author, TextWrapper } from "./styles";
import BgImage from "../../img/backgroundHeader.jpg"

import Quotes from "../../api/quotes";

const Footer = () => {

    const quoteData = Quotes();
   

    return (
        <FooterContainer>
            <Blackground src={BgImage} alt="flowers" />
            <TextWrapper>
                <Text>" {quoteData.text} "</Text>
                <Author>{quoteData.author ? quoteData.author : "Unknown"}</Author>
            </TextWrapper>
        </FooterContainer>
    )
}

export default Footer;