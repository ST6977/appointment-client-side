import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Service from "./../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Fluoride helps in better absorption of calcium and phosphorus and hinders bacterial growth. Fluoride is especially beneficial to people with low oral health and a high risk of cavities",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "cavities can be unsightly and painful. A regular visit to your dentist will determine if any cavities or small caries are present. There are a few signs you can look for that will help you identify a cavity before it becomes too big of a problem. If you pay close attention to your teeth when you brush and floss them every day, it will be easy to notice the small changes",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Teeth whitening is a cosmetic procedure that is used to make the surface of the teeth appear whiter. Although teeth whitening cannot turn the teeth brilliant white, it can be a very effective way of lightening the existing color, without causing any damage to the tooth’s surface.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, m: 2, color: "success.main" }}
          variant="h6"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
