import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
         Our story began with a vision to create a dining experience that delights all the senses. We have meticulously crafted a menu that showcases the best of both classic and contemporary cuisine, using only the finest and freshest ingredients. Our chefs bring creativity and expertise to every dish, ensuring that each plate is not only a feast for the palate but also a visual masterpiece.

Step into our elegantly designed space, where modern sophistication blends seamlessly with a cozy and welcoming atmosphere. Whether you're enjoying a leisurely lunch, an intimate dinner, or a festive gathering, My Restaurant provides the perfect setting. Our attentive and knowledgeable staff are dedicated to delivering exceptional service, making you feel right at home from the moment you walk through our doors.

We offer a diverse range of culinary delights, from succulent steaks and fresh seafood to vibrant vegetarian options and decadent desserts. Our carefully curated wine list and handcrafted cocktails add the perfect touch to your dining experience, complementing our dishes and enhancing your overall enjoyment.

At My Restaurant, we also understand the importance of celebrating life's special moments. Our private dining spaces and bespoke event services are designed to accommodate any occasion, from business meetings to family celebrations, ensuring that your event is flawlessly executed and truly unforgettable.
        </p>
        <br />
       
      </Box>
    </Layout>
  );
};

export default About;
