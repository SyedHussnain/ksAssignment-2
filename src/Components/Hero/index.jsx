import { Container, Typography } from "@mui/material";

const Hero = () => {
  return (
    <>
      <Container
        id="about"
        sx={{
          height: "100vh",
          display: "flex",
          flexdirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" align="center">
          I am Hussnain Ali <br />
          Full Stack Developer
        </Typography>
      </Container>
    </>
  );
};

export default Hero;
