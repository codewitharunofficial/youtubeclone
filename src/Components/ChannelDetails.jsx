import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';


import { Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [video, setVideo] = useState([]);

  console.log(channelDetail, video);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0])
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVideo(data?.items)
    });

  }, [id])


  
  return (

    <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,12,97,1) 25%, rgba(9,9,121,1) 35%, rgba(8,21,129,1) 39%, rgba(5,153,126,1) 61%, rgba(3,214,173,1) 80%, rgba(0,212,255,1) 100%)', zIndex: 10, height: '300px'}} />

       <ChannelCard channelDetail = {channelDetail} marginTop="-93px" />
      </Box>

     <Box display="flex" p={2}>
      <Box sx={{mr: {sm: '100px'}}}>
         <Videos videos={video} />
      </Box>
     </Box>

    </Box>
    
  )
}

export default ChannelDetails