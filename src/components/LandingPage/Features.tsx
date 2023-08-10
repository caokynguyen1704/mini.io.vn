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
      'Cung cấp nền tảng thi viết code trực tuyến, giúp bạn thử thách khả năng lập trình và xây dựng mã nguồn một cách thuận tiện và hiệu quả.',
    icon: MdWbIncandescent
  },
  {
    heading: 'Học tập',
    content: `Là điểm đến đa dạng, nơi mọi người có thể tham gia vào các khóa học hấp dẫn để mở rộng kiến thức và kỹ năng trong môi trường trực tuyến.`,
    icon: FaSchool
  },
  {
    heading: 'Chia sẻ',
    content:
      'Một cộng đồng trực tuyến đầy thú vị, nơi bạn có thể chia sẻ kiến thức, trao đổi ý tưởng và công khai mã nguồn, giúp thúc đẩy sự học hỏi và phát triển chung trong lĩnh vực của bạn.',
    icon: BsShare
  },
  {
    heading: 'Công nghệ',
    content: `Nền tảng cung cấp các giải pháp công nghệ đa dạng, giúp bạn tiếp cận và áp dụng những công nghệ mới nhất vào dự án của mình một cách dễ dàng và hiệu quả.`,
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