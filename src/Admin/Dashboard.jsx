import React from "react";
import { FiGithub, FiTwitter } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { ImgLogo } from "../styled/FooterStyled";
import {Sidebar, Nav, Container, AdminItem, AdminLink} from '../styled/DashboardStyled'

const dashboard = () => {
  return (
    <div>
        <Sidebar>
          <Nav>
            <AdminLink>
            <ImgLogo src="https://res.cloudinary.com/academia/image/upload/v1630521453/tienda/logo_c4omdc.png"alt="logo" className="logo"thumbnail/>
              <AdminItem>
                <p>Bienvenido Admin</p>
              </AdminItem>
              <AdminItem>
                <a href="#">Users</a>
              </AdminItem>
              <AdminItem>
                <a href="#">Productos</a>
              </AdminItem>
            </AdminLink>
          </Nav>
        </Sidebar>
          <Container>
            <Link
              to="https://twitter.com/LuisaFe48692047"
              target="_blank"
              rel="noopener"
              classNameName="m-2"
            >
              <FiTwitter size={20} color="#0AC763"></FiTwitter>
            </Link>
            <Link
              to="https://github.com/Lfernanda2504"
              target="_blank"
              rel="noopener"
              classNameName="m-2"
            >
              <FiGithub size={20} color="#0AC763"></FiGithub>
            </Link>
          </Container>
    </div>
  );
};

export default dashboard;
