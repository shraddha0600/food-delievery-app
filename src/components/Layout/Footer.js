import React from 'react' 
import InstagramIcon from '@mui/icons-material/Instagram'; 
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from '@mui/material'
const Footer = () => {
  return (
   <>
    <Box sx={{textAlign:'center' , bgcolor:'#1A1a19 ' , color :'white' , p:3}}> 
    <Box sx={{m:3 , "& svg" :{
        fontSize:"60px" ,
        cursor: "pointer" ,
        mr: 2,
    } , 
    " & svg:hover":{
        color:'goldenrod' ,
        transform:'tranlatex(5px)' ,
        transition:'all 400ms',
    }

    ,} }>
        {/*icons*/} 
        <InstagramIcon /> 
        <TwitterIcon />
        <GitHubIcon />
        <YouTubeIcon />
    </Box>
        <Typography variant ="h5" sx={{"@media (max-width:600px)" :{
               fontsize : "1rem" ,
          } , 
        }}
        >
            All right reserved @copy : shraddha
        </Typography>
    </Box>
   </>
  )
}

export default Footer