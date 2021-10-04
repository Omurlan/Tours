import React, { useState } from "react";
import { Container as MuiContainer, Grid, withStyles } from "@material-ui/core";
import {
  listArr,
  Navlist,
  Navbar,
  NavItem,
  BurgerIcon,
  Solid,
  BurgerBlock,
} from "./header.elements";

function Header() {
  const [burger, setBurger] = useState(false);
  const handleBurger = () => setBurger(!burger);

  const Container = withStyles({
    root: {
      display: "flex",
      height: "100%",
      alignItems: "center",
      background: "var(--my-blue);",
      transition: "0.3s",
      boxShadow: "0 1px 10px gray",
      zIndex: 12,
    },
  })(MuiContainer);

  return (
    <React.Fragment>
      <Navbar burger={burger}>
        <Solid burger={burger} onClick={() => setBurger(false)} />
        <Container>
          <Grid item xs={12}>
            <BurgerBlock burger={burger} onClick={handleBurger}>
              <BurgerIcon burger={burger} />
            </BurgerBlock>
            <Navlist burger={burger}>
              {listArr.map((li, index) => (
                <NavItem key={index}>{li}</NavItem>
              ))}
            </Navlist>
          </Grid>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
