import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material' 
import SupportAgentIcon from '@mui/icons-material/SupportAgent'; 
import EmailIcon from '@mui/icons-material/Email'; 
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:5 , ml: 10 , "& h4" : { fontWeight: "bold" , mb :2 }}}>
          <Typography variant="h4">
            Contact To My Restaurant
          </Typography> 
          <p>
          We would love to hear from you! Whether you have a question, feedback, or simply want to say hello, our team at [Restaurant Name] is here to assist you. Feel free to reach out to us using the contact information provided below. You can give us a call at [Phone Number] during our operating hours, or send us an email at [Email Address]. Additionally, you can visit us in person at our restaurant located at [Address]. We value your input and strive to provide exceptional customer service, so please don't hesitate to get in touch. We look forward to serving you and creating a memorable dining experience.
          </p>
        </Box> 
        <Box sx={{ m:3 , width: "600px" , ml:10 , "@media (max-width:600px)":{
          width:"300px",
          } ,
        }}>
          <TableContainer component={Paper}> 
          <Table aria-label="contact table">
           <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor: "black" , color: "white"}}
                align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
           </TableHead> 
           <TableBody>
            <TableRow>
              <TableCell>
                     <SupportAgentIcon sx={{
                      color:'red' , pt : 1}}/> 1800-08-6000
              </TableCell> 
              
            </TableRow> 
            <TableRow>
            <TableCell>
                     <EmailIcon 
                      sx={{ color: 'skyblue' , pt:1 }}
                     /> help@myrest.com
              </TableCell>
            </TableRow> 
            <TableRow>
              <TableCell>
                 <AddIcCallIcon sx={{ color : "green" , pt: 1 }}/> 123456789
              </TableCell>
            </TableRow>
           </TableBody>
          </Table>
           </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact