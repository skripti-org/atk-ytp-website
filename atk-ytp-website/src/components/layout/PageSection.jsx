import { Container, Title, createStyles } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: '3rem',
    marginBottom: '3rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
  },
  title: {
    marginBottom: theme.spacing.xl,
  },
}));

export default function PageSection({ title, children }) {
  const { classes } = useStyles();
  return (
    <Container className={classes.wrapper}>
      <Container bg='triangle-yellow'>
        <Title color='dark' order={2} pt={20} pb={20} className={classes.title}>
          {title}
        </Title>
      </Container>
      {children}
    </Container>
  );
}
