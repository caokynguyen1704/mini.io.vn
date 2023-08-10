import * as React from 'react';
import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Image,
  Container,
  chakra,
  Tag,
  Center,
  Badge,
  Skeleton,
} from '@chakra-ui/react';
import img_dat from '../../dev/dat.jpg'
import img_RKevo from '../../dev/RKevo.png'
import img_Nam from '../../dev/nam.jpeg';
import img_Mini from '../../dev/MimpiVn.png';
import img_ky from '../../dev/ky.jpg'
import img_linh from '../../dev/linh.jpg'
import img_huy from '../../dev/huy.jpg'
import img_khoi from "../../dev/khoi.jpeg"
import img_thinh from '../../dev/thinh.jpg'
import img_thanh from '../../dev/thanh.png'
const companies = [
  {
    title: 'Nguyễn Cao Kỳ',
    alt: 'company image',
    role: 'Founder',
    period: '2023 - Present',
    logo: img_ky,
    onboard: "Full project",
  },
  {
    title: 'Lê Khánh Linh',
    alt: 'company image',
    role: 'Tester',
    period: '2023 - Present',
    logo: img_linh,
    onboard: "Full project",
  },
  {
    title: '_Ktoxz_',
    alt: 'company image',
    role: 'Backend',
    period: '2023 - Present',
    logo: img_khoi,
    onboard: "Course project",
  },
  {
    title: 'dendix',
    alt: 'company image',
    role: 'Frontend',
    period: '2023 - Present',
    logo: img_RKevo,
    onboard: "Course project",
  },
  {
    title: 'Nguyễn Đức Đạt',
    alt: 'company image',
    role: 'Frontend',
    period: '2023 - Present',
    logo: img_dat,
    onboard: "Practice",
  },
  {
    title: 'Nam',
    alt: 'company image',
    role: 'Frontend',
    period: '2023 - Present',
    logo: img_Nam,
    onboard: "Practice",
  },
  {
    title: 'TwinsDolphins',
    alt: 'company image',
    role: 'Frontend',
    period: '2023 - Present',
    logo: img_thinh,
    onboard: "Practice",
  },
  {
    title: 'thanh20VN',
    alt: 'company image',
    role: 'Frontend',
    period: '2023 - Present',
    logo: img_thanh,
    onboard: "Practice",
  },
  {
    title: 'Mimpi Vn',
    alt: 'company image',
    role: 'Marketing',
    period: '2023 - Present',
    logo: img_Mini,
    onboard: "Full project",
  },

  {
    title: 'Quang Huy Dương',
    alt: 'company image',
    role: 'Designer',
    period: '2023 - Present',
    logo: img_huy,
    onboard: "Full project",
  },

];

const Index = () => {
  return (
    <Container maxW="4xl" p={{ base: 5, md: 12 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Nhân sự
      </chakra.h3>
      <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]}>
        {companies.map(({ title, role, period, logo, alt, onboard }, index) => (
          <Box
            key={index}
            px={4}
            py={5}
            borderWidth="1px"
            _hover={{ shadow: 'lg' }}
            position="relative"
            rounded="md"
          >
            <Flex justifyContent="space-between">
              <Flex>
                <Image
                  rounded="full"
                  w={16}
                  h={16}
                  objectFit="cover"
                  fallbackSrc="https://via.placeholder.com/150"
                  src={logo}
                  alt={alt}
                />
                <Stack spacing={2} pl={3} align="left">
                  <Heading fontSize="sm">
                    {title}
                  </Heading>
                  <Heading fontSize="small" color={getColorForRole(role)}>
                    {role}
                  </Heading>
                  <Badge textAlign="center" variant='solid' colorScheme='yellow'>
                    {onboard}
                  </Badge>
                </Stack>
              </Flex>
              <Stack display={['none', 'none', 'flex', 'flex']}>
                <Text fontSize={14} color="gray.400">
                  {period}
                </Text>
              </Stack>
            </Flex>
          </Box>
        ))}
        <Box

          px={4}
          py={5}
          borderWidth="1px"
          _hover={{ shadow: 'lg' }}
          position="relative"
          rounded="md"
        >
          <Flex justifyContent="space-between">
            <Flex>
              <Image
                rounded="full"
                w={16}
                h={16}
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/150"
              />
              <Stack spacing={2} pl={3} align="left">
                <Heading fontSize="sm">
                   MINI.io
                </Heading>
                <Heading fontSize="small">
                <Skeleton height='15px' width="20px" />
                </Heading>

                <Skeleton height='15px' />

              </Stack>
            </Flex>
            <Stack display={['none', 'none', 'flex', 'flex']}>
              <Text fontSize={14} color="gray.400">
                <Skeleton height='15px' />
              </Text>
            </Stack>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

function getColorForRole(role) {
  switch (role) {
    case "Founder":
      return "red.500";
    case "Frontend":
      return "green.500";
    case "Backend":
      return "purple.500";
    case "Tester":
      return "blue.500";
    default:
      return "pink.300";
  }
}




export default Index;