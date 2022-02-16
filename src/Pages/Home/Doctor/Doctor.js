import React from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Doctor = ({ doctor }) => {
  const { name, image, hospital, degree, specialist } = doctor;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <img
        style={{ width: "200px", height: "200px" }}
        src={`data:image/png;base64,${image}`}
        alt=""
      />
      <h3>{name}</h3>
      <p>{hospital}</p>
      <p>{degree}</p>
      <p>{specialist}</p>
      <Button variant="contained">
        {" "}
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/appointment"
        >
          Appointment
        </Link>
      </Button>
    </Grid>
  );
};

export default Doctor;
