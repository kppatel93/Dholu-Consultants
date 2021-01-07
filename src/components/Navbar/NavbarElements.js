import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
     background: ${({scrollNav}) => (scrollNav ? '#001322' : 'transparent')};
     height: 80px;
     margin-top: -80px;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 1rem;
     position: sticky;
     top: 0;
     z-index: 10;

     @media screen and (max-width: 960px) {
         transition: 0.8s all ease;
     }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    z-index: 1;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    padding: 0 1rem;
    height: 100%;

    &.active {
        border-bottom: 3px solid #01bf71;
    }

    &:hover {
        transition: all 0.2 ease-in-out;
        color: #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #09B77C;
    white-space: nowrap;
    color: #00100B;
    padding: 10px 22px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
    }
`;
