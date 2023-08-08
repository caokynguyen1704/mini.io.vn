

import { Box } from '@chakra-ui/react';
import './App.css';
import HeroSection from './HeroSection';
import Milestones from './Milestones.tsx';
import Features from './Features.tsx';

function App() {

  return (
    <Box>
      <HeroSection />
      <Features/>
      <Milestones />
    </Box>

  

  );
}

export default App;
