

import {  Center, Stack } from '@chakra-ui/react';
import './App.css';

import HeroSection from './components/LandingPage/HeroSection';
import Milestones from './components/LandingPage/Milestones.tsx';
import Features from './components/LandingPage/Features.tsx';
import Index from './components/LandingPage/Dev.tsx';
import { Footer } from './components/LandingPage/Footer.tsx';

function App() {

  return (<>
   
    <Center>
      <Stack width="70%">
        <HeroSection />
        <Features/>
        <Milestones />
        <Index/>
      </Stack>
    </Center>
    <Footer/>
    </>

  );
}

export default App;
