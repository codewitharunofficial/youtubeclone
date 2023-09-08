// import logo from './logo.svg';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import {Navbar, Feed, SearchFeed, VideoDetails, ChannelDetails} from './Components';

function App() {
  return (
    <Box sx={{backgroundColor: '#000'}} >
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' exact element={<VideoDetails />} />
        <Route path='/channel/:id' exact element={<ChannelDetails />} />
        <Route path='/search' exact element={<SearchFeed />} />
      </Routes>

    </Box>
  );
}

export default App;
