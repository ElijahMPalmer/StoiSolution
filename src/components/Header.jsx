import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
        <a>
          <img src="/images/StoiSolution.svg" alt="" />
        </a>
        <Menu>
        </Menu>

        <RightMenu>
            <CustomMenu onClick={() => setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)}/>
          </CloseWrapper>
            <li><a href="#">What is this tool for?</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header
const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right:20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    img{
      width: 350px;
    }

    a{
      text-decoration: none;
      color: black
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: no-wrap;
    }

    @media(max-width: 768px) {
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
      
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    color: black;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #cccccc;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
      padding: 15px 0px;
      border-bottom: 1px solid rgba(0, 0, 0, .2);

      a {
        font-weight: 600;

      }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`