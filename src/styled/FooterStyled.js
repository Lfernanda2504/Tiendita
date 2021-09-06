import styled from "styled-components";


export const FooterContent = styled.footer`
    background-color: #fff;
    position: static;
    bottom: 0;
    width: 100%;
    height: 50px;
    color: #000;
  

`;
export const ContainerFooter = styled.div`
   width: 100%;
   height: 20px;
   display: grid;
   grid-template-columns: auto auto;
   margin: 1rem;
`;

export const ImgLogo = styled.img`
  width: 100px;
  
`;
export const Redes = styled.div`
    display: flex;
    justify-content: flex-end;
    position: static;
    width: 35px;
    height: 35px;
    cursor: pointer;
    border-radius: 50%;
    font-size: 20px;
    color: #ffffff;
    line-height: 35px;
    margin-right: 5px;
    margin-bottom: 5px;

`;
export const FooterText = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    color: black;
    margin-bottom: 0;
    
`;