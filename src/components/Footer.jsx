import React from 'react'
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FooterContent,ContainerFooter , ImgLogo, Redes, FooterText} from '../styled/FooterStyled'
import {Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
        <FooterContent>
            <ContainerFooter>
                <ImgLogo src="https://res.cloudinary.com/academia/image/upload/v1620521453/tienda/logo_c4omdc.png"alt="logo" className="logo"thumbnail/>
            <Redes className="text-center">
                <Link to="https://www.instagram.com/lfgarciaoc/" target="_blank" rel="noopener" className="m-2" >
                <FiInstagram size={20} color="#0AC763" ></FiInstagram>
                </Link>
                <Link to="https://twitter.com/LuisaFe48692047" target="_blank" rel="noopener"  className="m-2" >
                <FiTwitter size={20} color="#0AC763"></FiTwitter>
                </Link>
                <Link to="www.linkedin.com/in/lfgarciao" target="_blank" rel="noopener"  className="m-2" >
                <FiLinkedin size={20} color="#0AC762"></FiLinkedin>
                </Link>
                <Link to= "https://github.com/Lfernanda2504" target="_blank" rel="noopener"  className="m-2" >
                <FiGithub size={20} color="#0AC763"></FiGithub>
                </Link>
           </Redes>
            </ContainerFooter>
            <FooterText><p className="text-center">Copyright @2021 | Designed With by  Lfgarciaoc</p> </FooterText>
        </FooterContent>
        
        
        </>
    )
}

export default Footer
