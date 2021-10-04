import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

// styled components
export const Navbar = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 4.8rem;
  transition: 0.3s;
  z-index: 3;
  @media ${device.tablet} {
    height: ${(props) => (props.burger ? "40rem" : "4.8rem")};
  }
`;

export const Navlist = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  background: transparent !important;
  font-size: 1.7rem;
  height: 100%;
  font-weight: 500;
  color: white;
  padding: 0;
  z-index: 10;

  @media ${device.tablet} {
    display: ${(props) => (props.burger ? "flex" : "none")};
    flex-direction: column;
    height: 30rem;
    font-size: 2rem;
  }
`;

export const NavItem = styled.li`
  text-align: start;
  cursor: pointer;
  :hover {
    color: var(--my-yellow);
  }
`;

export const BurgerBlock = styled.div`
  display: none;
  position: absolute;
  width: 3.8rem;
  height: 2.5rem;
  top: 1.1rem;
  right: 2rem;
  cursor: pointer;
  z-index: 11;

  :before,
  :after {
    content: "";
    position: absolute;
    background: white;
    width: 100%;
    left: 0;
    height: 0.3rem;
    transition: 0.3s;
  }
  :before {
    bottom: ${(props) => (props.burger ? "1rem" : "0")};
    transform: ${(props) => props.burger && "rotate(-45deg)"};
  }
  :after {
    bottom: ${(props) => props.burger && "1rem"};
    transform: ${(props) => props.burger && "rotate(45deg)"};
  }

  @media ${device.tablet} {
    display: block;
  }
`;

export const BurgerIcon = styled.span`
  opacity: ${(props) => (props.burger ? "0" : "100")};
  position: absolute;
  width: 100%;
  height: 0.3rem;
  background: white;
  top: 1.1rem;
  transition: 0.3s;
`;

export const Solid = styled.span`
  display: none;

  @media ${device.tablet} {
    position: fixed;
    display: ${(props) => props.burger && "block"};
    background: #0000005f;
    position: absolute;
    width: 100%;
    height: 100vh;
    transition: 0.3s;
    z-index: 2;
  }
`;
// -------------------

// data
export const listArr = [
  "Туры",
  "Горящие туры",
  "Авиабилеты",
  "Контакты",
  "О нас",
];
// --------------------
