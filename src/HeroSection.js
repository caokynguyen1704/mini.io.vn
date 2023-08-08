import * as React from 'react';
import {
  chakra,
  Stack,
  HStack,
  Text,
  Box,
  Flex,
  Link,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import logo from './logo.png'
// Here we have used react-icons package for the icons
import { FaFacebook, FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <Stack
      p={{ base: 5, md: 10 }}
      direction={{ base: 'column', md: 'row' }}
      bgImage={{
        base: 'none',
        md: logo
      }}
      backgroundSize="480px"
      backgroundPosition="center right"
      backgroundRepeat="no-repeat"
      minH={{ base: 'unset', md: '300px' }}
    >
      <Box
        bgImage={{ base: 'none', md: 'linear-gradient(45deg, #e9ecef 25%, rgba(0, 0, 0, 0) 95%)' }}
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        zIndex="0"
        opacity="0.8"
      ></Box>
      <Stack
        pos="relative"
        zIndex={1}
        direction="column"
        justifyContent="center"
        spacing={6}
        maxW="550px"
      >
        <chakra.h1
          fontSize={{ base: '3xl', sm: '5xl' }}
          lineHeight={1}
          fontWeight="bold"
          textAlign="left"
        >
          Khám phá MINI.io <br />
        </chakra.h1>
        <Text
          fontSize="1.2rem"
          textAlign="left"
          lineHeight="1.375"
          fontWeight="400"
          color={useColorModeValue('gray.500', 'gray.700')}
        >
        Nền tảng công nghệ trực tuyến.
        </Text>
        <HStack spacing={{ base: 0, sm: 2 }} flexWrap="wrap">
          <Flex
            as={Link}
            justify="center"
            h={10}
            px={6}
            lineHeight={1.18}
            rounded="md"
            fontWeight="bold"
            alignItems="center"
            bg={useColorModeValue('gray.200', 'gray.600')}
            _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
          >
            <Icon as={FaFacebook} h={4} w={4} />
            <chakra.span ml={1}> Kết nối</chakra.span>
          </Flex>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default HeroSection;