import {  Box, Container,   Divider,   Flex,   HStack,   Image,   Link,   Stack,   Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../logo.png'
export const Footer_end = () => (
    <Box
    bg="white"
    _dark={{
      bg: "gray.600",
    }}
  >
    <Stack
      direction={{
        base: "column",
        lg: "row",
      }}
      w="full"
      justify="space-between"
      p={10}
    >
      <Flex justify="center">
        <Image
          src={logo}
          alt="Company Logo"
          rounded="lg"
          width={{
            base: "200px",
            lg: "200px",
          }}
          height={{
            base: "36px",
            lg: "36px",
          }}
          my={{
            base: 2,
            lg: 0,
          }}
        />
      </Flex>
      <HStack
        alignItems="start"
        flex={1}
        justify="space-around"
        fontSize={{
          base: "12px",
          md: "16px",
        }}
        color="gray.800"
        _dark={{
          color: "white",
        }}
        textAlign={{
          base: "center",
          md: "left",
        }}
      >
        <Flex justify="start" direction="column">
          <Link textTransform="uppercase">FAQS</Link>
        </Flex>
        <Flex justify="start" direction="column">
          <Link textTransform="uppercase">Services</Link>
        </Flex>
      </HStack>
      <HStack
        alignItems="start"
        flex={1}
        justify="space-around"
        fontSize={{
          base: "12px",
          md: "16px",
        }}
        color="gray.800"
        _dark={{
          color: "white",
        }}
        textAlign={{
          base: "center",
          md: "left",
        }}
      >
        <Flex justify="start" direction="column">
          <Link textTransform="uppercase">Giới thiệu</Link>
          <Link textTransform="uppercase">Hỗ trợ</Link>
        </Flex>
        <Flex justify="start" direction="column">
          <Link textTransform="uppercase">Liên hệ</Link>
          <Link textTransform="uppercase">Tài nguyên</Link>
        </Flex>
      </HStack>
    </Stack>
    <Divider
      w="95%"
      mx="auto"
      color="gray.600"
      _dark={{
        color: "#F9FAFB",
      }}
      h="3.5px"
    />
    <VStack py={3}>
    
  
      <Text
        textAlign="center"
        fontSize="smaller"
        _dark={{
          color: "white",
        }}
      >
        &copy;Copyright. All rights reserved.
      </Text>
    </VStack>
  </Box>
  
)