import React from 'react';
import { Link } from 'react-router-dom';
import {  Typography, Card, CardContent, CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../utils/constants';

const VideoCard = ({ video: { id: {videoId}, snippet} }) => {
    
  return (
    <Card sx={{ width: {md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius: 'none'}}>
        <Link to={videoId? `./video/${videoId}` : {demoVideoUrl}}>
        <CardMedia image={snippet?.thumbnails?.high?.url}
        alt={snippet.title}
        sx={{width: '358px', height: '200px'}}
        />
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e', height: '110px', width: {md: '320px', xs: '100%'}}}>
            <Link to={videoId? `./video/${videoId}` : {demoVideoUrl}}>
                <Typography variant='subtitle1' fontWeight="bold" color='#fff'>
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>

            </Link>

            <Link to={snippet?.channelId? `./channel/${snippet?.channelId}` : {demoChannelUrl}}>
                <Typography variant='subtitle2' fontWeight="bold" color='gray'>
                    {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                    <CheckCircle sx={{fontSize:12, color: 'gray', ml: 2, mt: 2}} />      
                </Typography>

            </Link>
        </CardContent>
    </Card>
    
  )
}

export default VideoCard