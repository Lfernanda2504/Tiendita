import React from 'react'
import { Container, Image } from 'react-bootstrap'
import {BannerS} from '../styled/BannerStyled'

const Banner = () => {
    return (
        <Container>
            <BannerS>
              <Image src="https://res.cloudinary.com/academia/image/upload/v1630679036/tienda/banner_vv1gor.png">
              </Image>
            </BannerS>
        </Container>
    )
}

export default Banner
