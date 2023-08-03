import React from 'react';
import {
  createStyles,
  Container,
  Group,
  Anchor,
  rem,
  ActionIcon,
  Space,
  Divider,
} from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitter,
  IconBrandTelegram,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
    background: theme.colors.dark[9],
    borderTop: `${rem(3)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export default function Footer({ links }: FooterSimpleProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color='white'
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size='sm'
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        ATK-YTP &apos;23
        <Group className={classes.links}>{items}</Group>
        <Group spacing={0} className={classes.links} position='right' noWrap>
          <ActionIcon size='lg'>
            <IconBrandTwitter size='1.05rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandYoutube size='1.05rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandInstagram size='1.05rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandTelegram size='1.05rem' stroke={1.5} />
          </ActionIcon>
        </Group>
        <Space h='md' />
        <Anchor<'a'> color='white' key='Skripti ry' href='https://www.skripti.org' size='sm'>
          Skripti ry
        </Anchor>
      </Container>

      <Divider my='sm' size='xs' color='yellow' />

      <Divider my='sm' size='md' color='yellow' />

      <Divider my='sm' size='xl' color='yellow' />
    </div>
  );
}
