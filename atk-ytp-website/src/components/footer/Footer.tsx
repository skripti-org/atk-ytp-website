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
  Text,
} from '@mantine/core';
import { IconBrandInstagram, IconBrandTelegram, IconBrandGithub } from '@tabler/icons-react';

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

  divider: {
    [theme.fn.smallerThan('sm')]: {
      marginBottom: '3.75rem',
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
      key={`footer-${link.label}`}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size='sm'
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container>
        <Container className={classes.inner}>
          <Text weight='800'>ATK-YTP &apos;23</Text>
          <Group className={classes.links}>{items}</Group>
          <Group spacing={0} className={classes.links} position='right' noWrap>
            <ActionIcon size='lg'>
              <IconBrandInstagram stroke={1.5} />
            </ActionIcon>
            <ActionIcon size='lg'>
              <IconBrandTelegram stroke={1.5} />
            </ActionIcon>
            <ActionIcon size='lg'>
              <IconBrandGithub stroke={1.5} />
            </ActionIcon>
          </Group>
          <Space h='md' />
          <Anchor<'a'> color='white' key='Skripti ry' href='https://www.skripti.org' size='sm'>
            Skripti ry
          </Anchor>
        </Container>
      </Container>

      <Divider my='sm' size='xs' color='triangle-yellow' className='bounce' />

      <Divider my='sm' size='sm' color='triangle-yellow' className='bounce2' />

      <Divider my='sm' size='md' color='triangle-yellow' className='bounce3' />

      <Divider my='sm' size='lg' color='triangle-yellow' className='bounce4' />

      <Divider my='sm' size='xl' color='triangle-yellow' className='bounce5' />

      <Divider mt='sm' size={10} color='triangle-yellow' className={classes.divider} />
    </div>
  );
}
