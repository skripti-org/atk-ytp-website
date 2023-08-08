import { Title, Text, Container } from '@mantine/core';

export default function Paragraph({ title, order = 3, children }) {
  return (
    <Container px={0} py='sm'>
      <Title pb='sm' order={order}>{title}</Title>
      <Text>{children}</Text>
    </Container>
  );
}
