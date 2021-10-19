import styled from "styled-components";


export const Sidebar = styled.aside`
        position: fixed;
        width: 25%;
        height: 100vh;
        background: #fff;
        font-size: 0.65em;
`;
export const Nav = styled.nav`  
    position: relative;
    margin: 0 15%;
    text-align: right;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
    font-size: 1rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    `;

export const AdminLink = styled.ul`

        list-style: none;
   `;
export const AdminItem = styled.li`
         position: relative;
         margin: 3.2em 0;
  `;

