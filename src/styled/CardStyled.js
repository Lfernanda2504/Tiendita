import styled from "styled-components";


export const Card = styled.div` 
    width: 15rem;
    height: 18rem;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: tranparent !important;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.50rem;
    align-items: flex-start;
    padding: 0px;
    left: 20px;
    top: 20px;

`;
export const Products = styled.div`
    background-color: #fff;
    position: static;
    width: 100%;
    height: 418px;
    left: 40px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    top: 102px;
    border-radius: 8px;
    margin: auto;
    display: grid;
    grid-gap: 16px;
    padding: 16px;
    grid-auto-flow: column;
    overflow-x: auto;


`;
export const CardImg = styled.img`
    display: block;
    margin: auto;
    cursor: pointer;
    width: 10rem;
    height: 100px;
`;
export const CardText = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;`;

export const CardBody = styled.div`
    display: block;
    flex: 1 1 auto;
    text-align: center;
    padding: 1rem 1rem;
    margin: 0 1rem 12px

`;
export const CardTitle = styled.h5`
    font-size:1rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    color: black;
    `;

export const ContainerProducts = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px;
        position: static;
        width: 100%;
        height: 560px;
        left: 40px;
        top: 330px;
        margin: auto;
`;
export const Button = styled.button`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 24px 12px 12px;
        background: #0AC763;
        border-radius: 8px;
        color: #fff;
        font-size: 14px;
        border-color: #0AC763;
        width: 200px;
        height: 20px;
        margin: 1rem;
        
`;
export const H3Title = styled.h3`
    color: #000;
    font-size: 2rem;
    padding: auto;
    text-align: justify;
    margin: 1rem;


`;