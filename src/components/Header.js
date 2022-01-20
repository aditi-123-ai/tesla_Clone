import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import {selectCars} from "../features/car/carSlice";
import { useSelector } from 'react-redux';

function Header() {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="logo"/>
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href="#">{car}</a>
                ))}
                
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenuIcon onClick={()=>setBurgerOpen(true)}/>
            </RightMenu>
            <BurgerNav show={burgerOpen}>
                <CloseWrapper>
                    <CustomClose style={{color: "white"}} onClick={()=>setBurgerOpen(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key={index}><a href="#">{car}</a></li>
                ))}
                
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
                
            </BurgerNav>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 10px 10px;
        flex-wrap: nowrap;


        &:hover {
            background-color: #888;
            border-radius: 20px;
        }
    }

    

    @media (max-width: 768px) {
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        padding: 10px;
        
        &:hover {
            background-color: #888;
            border-radius: 20px;
        }
    }
`
const CustomMenuIcon = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.767);
    box-shadow: -30px -2px 23px -11px rgba(0,0,0,0.35);
    -webkit-box-shadow: -30px -2px 23px -11px rgba(0,0,0,0.35);
    -moz-box-shadow: -30px -2px 23px -11px rgba(0,0,0,0.35);
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 15px;
        border-bottom: 1px solid #fff;

    }

    a {
        color: #fff;
        font-weight: 600;
    }
`
const CustomClose = styled(CancelIcon)`
    cursor: pointer;

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`