import { AppBar, Box, Button, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#work">
            Work
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
