import { Title, Text, Paper } from '@mantine/core';

export default function Paragraph({ title, order = 3, children }) {
  return (
    <Paper px='sm' py='sm' withBorder radius={0}>
      <Title pb='sm' order={order}>
        {title}
      </Title>
      <Text>{children}</Text>
    </Paper>
  );
}
