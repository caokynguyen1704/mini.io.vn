import {  Container,   Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => (
  <Container  role="contentinfo" position="fixed" bottom="0px" left="0" width="100%">
 
      <Text fontSize="smaller" color="fg.subtle">
        &copy; {new Date().getFullYear()} DevMini. All rights reserved.
      </Text>
      
  </Container>
)