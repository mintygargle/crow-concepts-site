import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primary};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 75px;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 3;

  @media(max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
  }

  @media(min-width: ${({ theme }) => theme.desktop}) {
    transform: translateX(100%);
  }

  a {
    color: white;
       font-size: 1.2rem;


       &:hover {
          color: ${({ theme }) => theme.accent};
       }
    }
  
  }
`;
