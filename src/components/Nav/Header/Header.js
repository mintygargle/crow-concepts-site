import React, { useState, useRef } from "react"
import styled from "styled-components"
import LogoImg from "../../../images/Crow (4).svg"
import MainLinks from "../MainLinks"
import Menu from "../Menu/Menu"
import Burger from "../Menu/Burger"
import { useOnClickOutside } from "../../../utils/useOnClickOutside"
import { Link } from "gatsby"
import Logo from "../Logo/Logo"

const MainNavContainer = styled.header`
  align-content: center;
  background-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  transition: 0.4s;
  width: 100%;
  height: 75px;
  padding: 1em;
  overflow: hidden;
  position: fixed;
  top: 0px;
  z-index: 3;

  a {
    font-size: 18px;
  }

  i {
    font-size: 50px;
    padding: 0;
    line-height: 0.7;
  }

  a,
  i {
    color: white;
    cursor: pointer;
  }

  a:after {
    content: "";
    display: block;
    width: 0%;
    opacity: 0;
    transition: width 0.4s, opacity 0.4s;
    border-bottom: 1px solid ${props => props.theme.white};
  }

  a:hover {
    &:after {
      width: 100%;
      opacity: 1;
    }
  }

  a:hover,
  i:hover {
    color: ${({ theme }) => theme.accent};
  }

  .btn-link {
    color: ${({ theme }) => theme.primary};
    &:after {
      display: none;
      height: 0;
      border: none;
    }
  }

  .btn-link:hover {
    color: ${({ theme }) => theme.primary};
    &:after {
      border: none;
    }
  }

  .box {
    position: relative;
    padding: 0;
  }

  #hamburger {
    display: none;
    width: 0;
  }

  @media (max-width: ${props => props.theme.tablet}) {
    nav {
      width: 0;
      display: none;
    }

    #hamburger {
      display: unset;
      width: 20%;
    }

    .active {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      a {
        padding: 1rem 0;
      }
    }
  }
`

const LogoContainer = styled.div`
  width: 10%;
  height: auto;
  margin-right: 1rem;
`

const TitleContainer = styled.div`
  width: 40%;
  flex-position: bottom;

  @media (max-width: 890px) and (min-width: ${props => props.theme.tablet}) {
    display: none;
    width: 0;
  }

  @media (max-width: 400px) {
    display: none;
    width: 0;
  }
`

const Title = styled.p`
  font-size: 24px;
  font-family: ${props => props.theme.primary_font};
  position: absolute;
  bottom: 2px;

  @media (max-width: ${props => props.theme.tablet}) {
    bottom: 0px;
    top: 5px;
  }
`

const HamburgerContainer = styled.div`
  width: 20%;
  @media (max-width: ${props => props.theme.tablet}) {
    line-height: 0.8;
  }
`

const LinkMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-position: bottom;
  width: 70%;

  a {
    padding: 0 1rem;
  }
`

const LogoLink = styled.div`
  a {
    background-color: blue;

    &:hover {
      &:after {
        display: none;
        height: 0;
        width: 0;
        opacity: 0;
      }
    }
    &:after {
      display: none;
      height: 0;
      width: 0;
      opacity: 0;
    }
  }
`

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <div>
      <MainNavContainer ref={node}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <LogoContainer className="box" id="logo">
          <LogoLink>
            <Link to="/">
              <Logo src={LogoImg} />
            </Link>
          </LogoLink>
        </LogoContainer>
        <TitleContainer className="box" id="title">
          <Title>CrowConcepts</Title>
        </TitleContainer>
        <LinkMenu id="link-menu">
          <MainLinks />
        </LinkMenu>
        <HamburgerContainer>
          <Burger open={open} setOpen={setOpen}></Burger>
        </HamburgerContainer>
      </MainNavContainer>
      <Menu open={open} setOpen={setOpen}>
        <MainLinks direction="column" />
      </Menu>
    </div>
  )
}

export default Header
