import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import {
  footerAbout,
  footerClients,
  footerCountries,
  FooterLi,
  FooterList,
  footerToures,
} from "./footer.elements";

function Footer() {
  return (
    <React.Fragment>
      <Container>
        <Grid container>
          <FooterList>
            <Grid item>
              <Typography variant="h3">Туры</Typography>
              {footerToures.map((toure) => (
                <FooterLi>{toure}</FooterLi>
              ))}
            </Grid>
            <Grid item>
              <Typography variant="h3">Популярные страны</Typography>
              {footerCountries.map((country) => (
                <FooterLi>{country}</FooterLi>
              ))}
            </Grid>
            <Grid item>
              <Typography variant="h3">Клиентам</Typography>
              {footerClients.map((client) => (
                <FooterLi>{client}</FooterLi>
              ))}
            </Grid>
            <Grid item>
              <Typography variant="h3">О компании</Typography>
              {footerAbout.map((ab) => (
                <FooterLi>{ab}</FooterLi>
              ))}
            </Grid>
          </FooterList>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Footer;
