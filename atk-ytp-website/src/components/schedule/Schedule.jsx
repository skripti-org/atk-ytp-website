import React from 'react';
import PageSection from '../layout/PageSection';
import { Container, Divider, Flex, Paper, Text } from '@mantine/core';

export default function Schedule() {
  return (
    <PageSection title='Aikataulu'>
    <Flex

      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
        <Paper shadow="xl" radius="lg" p="xl" withBorder>
          <Text
              variant="gradient"
              gradient={{ from: '#FFEC99', to: '#e7ff50', deg: 45 }}
              sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
              ta="center"
              fz="xl"
              fw={800}
            >
            Ke 18.10.
          </Text>
          <Divider my='sm' color={'gray.8'} />
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet molestias dolor quo, aspernatur labore provident maiores iste commodi qui voluptas enim quia atque. Molestias accusantium reiciendis aliquam in harum labore.
          </Text>
        </Paper>
        <Paper shadow="xl" radius="lg" p="xl" withBorder>
          <Text
              variant="gradient"
              gradient={{ from: '#FFEC99', to: '#e7ff50', deg: 45 }}
              sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
              ta="center"
              fz="xl"
              fw={800}
            >
            To 19.10.
            
          </Text>
          <Divider my='sm' color={'gray.8'} />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente odit architecto, esse tenetur fuga cum, inventore porro voluptas natus qui dolor numquam fugit quo dolores magnam exercitationem! Dolorem, suscipit?
          </Text>
        </Paper>
      </Flex>
    </PageSection>
  );
}
