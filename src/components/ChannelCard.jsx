import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      width:{xs:'356px', md:'340px'},
      height:'300px',
      margin:'auto'
      
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}}> 
        <CardMedia
        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channelDetail?.snippet}
        sx={{ borderRadius:'50%',height:'180px', width:'180px', border:'1px solid grey'}}
         />
        <Typography variant='h6'>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />

        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {
              parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()
            }Subscribers
          </Typography>
        )}
        
      </CardContent>
      
    </Link>
  </Box>
);

export default ChannelCard;