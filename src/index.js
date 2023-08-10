import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { Helmet } from "react-helmet";
import background from './dev/bgmeta.jpg'
import logo from './logo.png'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <Helmet>
        <title>Kết nối công nghệ</title>
        <link rel='icon'  type="image/png" href={logo} />
        <meta property="og:title" content="Mini.io.vn" />
        <meta property="og:description" content="Nền tảng công nghệ trực tuyến" />
        <meta property="og:url" content="Mini.io.vn" />
        <meta property="og:image" content={background} />
        <meta property="og:type" content="website" />
      </Helmet>

      <App />
    </ChakraProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
