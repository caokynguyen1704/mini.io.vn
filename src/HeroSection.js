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
  useColorModeValue,
  Image,
  Button,
  Center
} from '@chakra-ui/react';
import logo from './logo.png'
// Here we have used react-icons package for the icons
import { FaFacebook, FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <Box px={8} py={4} mx="auto">

      <Box
        w={{
          base: "full",
          md: 11 / 12,
          xl: 9 / 12,
        }}
        mx="auto"
        textAlign={{
          base: "left",
          md: "center",
        }}
      >
        <chakra.h1
          textAlign="center"
          mb={6}
          fontSize={{
            base: "4xl",
            md: "6xl",
          }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{
            base: "normal",
            md: "tight",
          }}
          color="gray.900"
          _dark={{
            color: "gray.100",
          }}
        >
          Những gì bạn cần là {" "}
          <Text
            display={{
              base: "block",
              lg: "inline",
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            MINI.io
            
          </Text>{" "}
          <Text> ngay lúc này.</Text>
        </chakra.h1>
        <chakra.p
          px={{
            base: 0,
            lg: 24,
          }}
          mb={6}
          fontSize={{
            base: "lg",
            md: "xl",
          }}
          color="gray.600"
          _dark={{
            color: "gray.300",
          }}
        >
          {/* test */}
        </chakra.p>

<Center>
<HStack spacing={{ base: 0, sm: 2 }} flexWrap="wrap"> 
          <Flex
            as={Link}
            href="https://www.facebook.com/groups/codingscriptmwbavn"
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
</Center>
        
      </Box>

    </Box>
  );
};

export default HeroSection;