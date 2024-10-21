import { Container, Typography, Divider, Box, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <>
      <Container
        id="contact"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" align="center">
          Contact Me
        </Typography>
        <Divider sx={{ width: "50%", my: 2 }} />
        <Typography variant="h6" align="center">
          Get in touch through the following platforms:
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h5" align="center">
              <FacebookIcon /> Facebook
            </Typography>
            <Typography variant="h5" align="center">
              <GitHubIcon /> GitHub
            </Typography>
            <Typography variant="h5" align="center">
              <LinkedInIcon /> LinkedIn
            </Typography>
            <Typography variant="h5" align="center">
              <MailIcon /> Email
            </Typography>
            <Typography variant="h5" align="center">
              <PhoneIcon /> Call Me
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
