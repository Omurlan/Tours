import React from "react";
import {
  CardMedia,
  Container,
  Grid,
  Typography,
  withStyles,
  Card,
  Box,
} from "@material-ui/core";
import TitleImage from "../img/titleImage.jpg";
import { toures } from "./tours";
import {
  BackgroundImg,
  Present,
  TourCity,
  TourCost,
  TourTitle,
} from "./main.elements";

function Main() {
  const Title = withStyles({
    root: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "40rem",
      color: "white",
      overflow: "hidden",
      marginBottom: "3rem",
    },
  })(Grid);

  const CardContent = withStyles({
    root: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: "1rem",
    },
  })(Grid);

  return (
    <Present>
      <Container>
        <Title item>
          <BackgroundImg image={TitleImage} />
          <Typography align="center" variant="h1">
            Поиск горящих туров онлайн
          </Typography>
          <Typography align="center" variant="h3">
            Большое турагентство - маленькие цены
          </Typography>
        </Title>

        <Grid item>
          <Box mb={6}>
            <Typography variant="h2">
              Организуйте себе отдых в теплой стране
            </Typography>
            <Typography variant="h4">
              Все хлопоты по выбору тура и комфортному пребыванию берем на себя
            </Typography>
          </Box>
        </Grid>

        <Grid container spacing={3}>
          {toures.map((toure) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={3}
                style={{ padding: "0.3rem 0.3rem", cursor: "pointer" }}
              >
                <CardMedia component="img" height="250" image={toure.img} />
                <CardContent>
                  <TourCity>{toure.city}</TourCity>
                  <TourTitle>{toure.title}</TourTitle>
                  <TourCost>{toure.cost + " " + toure.currency}</TourCost>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Present>
  );
}

export default Main;
