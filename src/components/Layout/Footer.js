import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& a": {
              color: "inherit", // Setting anchor color to inherit
              textDecoration: "none", // Remove underline from anchor tag
            },
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* GitHub Icon with link */}
          <a href="https://github.com/your-github-profile">
            <GitHubIcon />
          </a>
          {/* LinkedIn Icon with link */}
          <a href="https://www.linkedin.com/in/your-linkedin-profile">
            <LinkedInIcon />
          </a>
          
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          Made with <FavoriteIcon style={{ color: "red", fontSize: "inherit", verticalAlign: "middle" }} /> by Harsh
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
