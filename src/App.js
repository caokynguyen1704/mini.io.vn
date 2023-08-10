

import {  Center, Stack } from '@chakra-ui/react';
import './App.css';

import HeroSection from './HeroSection';
import Milestones from './Milestones.tsx';
import Features from './Features.tsx';
import Index from './Dev.tsx';
import { Footer } from './Footer.tsx';

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
