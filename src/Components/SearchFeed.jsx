import React from 'react'
import {useState, useEffect} from 'react';
import { Box, Typography} from '@mui/material';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
// import { VideoCard, ChannelCard } from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm]);

  

  return (
      <Box p={2} sx={{overflow: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4"
        fontWeight="bold" mb={2} sx={{color: 'black'}}>
          Search Results For : {searchTerm} <span style={{color: '#FC1503'}}>Videos</span>
        </Typography>
       
        <Videos videos={videos} />

      </Box>
  )
}

export default SearchFeed;