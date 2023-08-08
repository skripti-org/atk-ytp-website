import { Paper } from '@mantine/core';

export default function HighlightSection({ children }) {
  return (
    <Paper my='xl' py='xl'>
      {children}
    </Paper>
  );
}
