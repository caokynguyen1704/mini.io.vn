import { Container, Box, chakra, Text, Icon, SimpleGrid } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { MdOutlinePersonPin, MdPermDeviceInformation, MdWork, MdWbIncandescent, MdMilitaryTech, MdDeveloperMode } from 'react-icons/md';
import { IconType } from 'react-icons';
import React from 'react';
import { BsShare } from 'react-icons/bs';
import { FaSchool } from 'react-icons/fa';

interface IFeature {
  heading: string;
  content: string;
  icon: IconType;
}

const features: IFeature[] = [
  {
    heading: 'Tranh tài',
    content:
      'Liệu bạn có phải là quán quân trong các cuộc thi lập trình.',
    icon: MdWbIncandescent
  },
  {
    heading: 'Học tập',
    content: `Nơi tập hợp các khóa học.`,
    icon: FaSchool
  },
  {
    heading: 'Chia sẻ',
    content:
      'Chia sẽ mã nguồn một cách trực quan và dễ dàng.',
    icon: BsShare
  },
  {
    heading: 'Công nghệ',
    content: `Chúng tôi có tất cả tính năng bạn cần.`,
    icon: MdDeveloperMode
  }
];

const Features = () => {
  return (
    <Container maxW="3xl" p={{ base: 0, md: 0 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
       Tính năng
      </chakra.h3>
      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={16} mt={12} mb={4}>
        {features.map((feature, index) => (
          <Box key={index} textAlign="center">
            <Icon as={feature.icon} w={10} h={10} color="blue.400" />
            <chakra.h3 fontWeight="semibold" fontSize="2xl">
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md">{feature.content}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Features;