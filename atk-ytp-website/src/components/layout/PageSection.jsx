import { Container, Title, createStyles } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    marginBottom: theme.spacing.md,
  },
}));

export default function PageSection({ title, children }) {
  const { classes } = useStyles();
  return (
    <Container className={classes.wrapper}>
      <Title order={2} align='center' className={classes.title}>
        {title}
      </Title>
      {children}
    </Container>
  );
}
