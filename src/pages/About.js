import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
       <Box sx={{
        my:15 ,
        textAlign:'center',  
        p:2,
        "& h4": {
          fontWeight: "bold", 
          my:2,
          fontSize: "2rem",
        },
        "& p" :{
          textAlign: "justify",
        },
        "@media (max-width:600px)":{
          mt:0, 
          "& h4 ":{
            fontSize:"1.5rem",
          }


        }

       }}>
        <Typography variant="h4">
          Welcome To My Restaurant
        </Typography> 
        <p>
        Welcome to our restaurant app, where we bring the delightful world of culinary experiences right to your fingertips. Our web development project aims to create a seamless platform that connects food enthusiasts with a diverse range of dining options. Whether you're craving a sizzling steak, a mouthwatering pizza, or exotic international cuisine, our app provides an extensive collection of restaurants, each with their unique flavors and ambiance. With user-friendly features, such as intuitive search filters, real-time availability, and secure online reservations, we strive to enhance your dining journey from start to finish. Join us in exploring the vibrant tapestry of flavors, and let our restaurant app redefine the way you discover and indulge in gastronomic delights.
        </p> 
        <br/>
        <p>
        At our restaurant app, we believe in creating memorable experiences beyond just great food. From captivating food photography and detailed menus to honest customer reviews and personalized recommendations, we strive to empower users to make informed decisions and discover hidden culinary gems. Join us on this culinary adventure and let your taste buds embark on a tantalizing journey of flavors.
        </p>
       </Box>
    </Layout>
  )
}

export default About