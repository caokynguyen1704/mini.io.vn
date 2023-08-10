import React from 'react';
import {
  Box,
  chakra,
  Container,
  Link,
  Text,
  HStack,
  VStack,
  Flex,
  Icon,
  useColorModeValue,
  Badge
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaRegistered, FaSchool, FaShareSquare } from 'react-icons/fa';
import { BsPersonFillExclamation } from 'react-icons/bs';
import { IconType } from 'react-icons';

const milestones = [
  {
    id: 1,
    categories: ['Website'],
    title: 'Mini.io.vn',
    icon: FaRegistered,
    description: `Tên miền được đăng ký và bắt đầu hoạt động`,
    date: '24 tháng 7 năm 2023',
    type: 1,
  },
  {
    id: 2,
    categories: ['Tính năng'],
    title: '[Dự kiến] Tài khoản',
    icon: BsPersonFillExclamation,
    description: `Mở đăng ký tài khoản`,
    date: 'Tháng 10 năm 2023',
    type: 0,
  },
  {
    id: 3,
    categories: ['Tính năng'],
    title: '[Dự kiến] Lua Sharing',
    icon: FaShareSquare,
    description: `Viết và chia sẽ mã nguồn Lua của bạn với mọi người chỉ bằng một liên kết.`,
    date: 'Tháng 10 năm 2023',
    type: 0,
  },
  {
    id: 4,
    categories: ['Tính năng'],
    title: '[Kế hoạch] Course',
    icon: FaSchool,
    description: `Đăng ký và tham gia các khóa học có sẵn.`,
    date: 'Kế hoạch',
    type: 2,
  }
];

const Milestones = () => {
  return (
    <Container maxWidth="2xl" p={{ base: 1, sm: 1 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Lộ trình phát triển
      </chakra.h3>
      {milestones.map((milestone, index) => (
        <Flex key={index} mb="10px">
          <LineWithDot />
          <Card {...milestone} />
        </Flex>
      ))}
    </Container>
  );
};

interface CardProps {
  title: string;
  categories: string[];
  description: string;
  icon: IconType;
  date: string;
  type: number;
}

const Card = ({ title, categories, description, icon, date, type }: CardProps) => {
  return (
    <HStack
      p={{ base: 1, sm: 1 }}
      bg={useColorModeValue('gray.100', 'gray.800')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      width="100%"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: '15px 15px 15px 0',
        position: 'absolute',
        left: '-15px',
        display: 'block'
      }}
    >
      <Icon as={icon} w={12} h={12} color="teal.400" />
      <Box>
        <HStack spacing={2} mb={1}>
          {categories.map((cat) => (
            <Text fontSize="smaller" key={cat}>
              {cat}
            </Text>
          ))}
        </HStack>
        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1
            as={Link}
            _hover={{ color: 'teal.400' }}
            fontSize="4x1"
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
          >
            {title}{' '}
            {type === 1 ? (
              <Badge colorScheme='green'>Hoàn tất</Badge>
            ) : type == 0 ? (
              <Badge colorScheme='purple'>Dự kiến</Badge>
            ) : (
              <Badge variant='outline' colorScheme='green'>
                Đang triển khai
              </Badge>
            )}
          </chakra.h1>
          <Text fontSize="md" noOfLines={2}>
            {description}
          </Text>
        </VStack>
        <Text fontSize="sm">{date}</Text>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px">
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius="100px"
          border="3px solid rgb(4, 180, 180)"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

export default Milestones;