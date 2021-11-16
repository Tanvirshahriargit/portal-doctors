import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../../Home/Home/Service/Service';
import fluoride from "../../../images/fluoride.png"
import cavity from "../../../images/cavity.png"
import whitening from "../../../images/whitening.png"
import Typography from '@mui/material/Typography';

const services = [
  {
    name: "Fluriode Traetement",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat omnis nemo placeat nam dolor eaque! Veniam nostrum aliquid ipsam alias quidem commodi dolorum voluptate quam, consequatur at explicabo aspernatur modi incidunt illo iste cupiditate corporis voluptatum. Nulla ipsa, quas, iure voluptate aliquid suscipit optio quos corporis alias saepe eos!",
    img: fluoride
  },
  {
    name: "Cavity Filling",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat omnis nemo placeat nam dolor eaque! Veniam nostrum aliquid ipsam alias quidem commodi dolorum voluptate quam, consequatur at explicabo aspernatur modi incidunt illo iste cupiditate corporis voluptatum. Nulla ipsa, quas, iure voluptate aliquid suscipit optio quos corporis alias saepe eos!",
    img: cavity

  },
  {
    name: "Whitening Treet",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat omnis nemo placeat nam dolor eaque! Veniam nostrum aliquid ipsam alias quidem commodi dolorum voluptate quam, consequatur at explicabo aspernatur modi incidunt illo iste cupiditate corporis voluptatum. Nulla ipsa, quas, iure voluptate aliquid suscipit optio quos corporis alias saepe eos!",
    img: whitening
  }
]
const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{ color: 'primary.main' , fontWeight: 500 ,m: 2}} variant="h6" component="div">
                        OUR SERVICES
                    </Typography>
      <Typography sx={{ fontWeight: 600 ,mb: 5}} variant="h4" component="div">
                        SERVICES WE PROVIDE 
                    </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            services.map(service => <Service
              key={service.name}
              service ={service}
            ></Service>)
          }
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;