

import {  Center, Stack } from '@chakra-ui/react';
import './App.css';
import { Helmet } from "react-helmet";
import HeroSection from './HeroSection';
import Milestones from './Milestones.tsx';
import Features from './Features.tsx';
import Index from './Dev.tsx';
import { Footer } from './Footer.tsx';
import background from './dev/bgmeta.jpg'
import logo from './logo.png'
function App() {

  return (<>
    <Helmet>
        <title>Kết nối công nghệ</title>
        <link rel='icon'  type="image/png" href={logo} />
        <meta property="og:title" content="Mini.io.vn" />
        <meta property="og:description" content="Nền tảng công nghệ trực tuyến" />
        <meta property="og:url" content="Mini.io.vn" />
        <meta property="og:image" content={background} />
        <meta property="og:type" content="website" />
      </Helmet>

    <Center>
      <Stack width="70%">
        <HeroSection />
        <Features/>
        <Milestones />
        <Index/>
        <Footer/>
      </Stack>
    </Center>
    </>

  );
}

export default App;
