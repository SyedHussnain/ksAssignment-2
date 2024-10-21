import image from "../../assets/image.png";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
const Work = () => {
  return (
    <>
      <Container
        id="work"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          My Work
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {data.map((item, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Card>
                  <CardContent>
                    <Typography variant="h4">{item.title}</Typography>
                    <Typography variant="body1">{item.description}</Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    image={image}
                    height="140"
                    alt="Project Picture"
                  />
                  <CardActions>
                    <Button size="medium" color="primary" href="#">
                      Explore the Code
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Work;

const data = [
  {
    title: "Project1",
    description: "This is my demo 1.",
  },
  {
    title: "Project2",
    description: "This is my demo 1.",
  },
  {
    title: "Project3",
    description: "This is my demo 1.",
  },
  {
    title: "Project4",
    description: "This is my demo 1.",
  },
  {
    title: "Project5",
    description: "This is my demo 1.",
  },
  {
    title: "Project6",
    description: "This is my demo 1.",
  },
];
