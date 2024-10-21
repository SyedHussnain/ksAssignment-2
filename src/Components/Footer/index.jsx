import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Hussnain & co. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
