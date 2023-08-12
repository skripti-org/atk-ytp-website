import {
  createStyles,
  Header,
  Group,
  Text,
  Divider,
  Box,
  Burger,
  Drawer,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      fontSize: '2rem',
      color: '#070707',
      padding: '2rem',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      }),
    },
    ...theme.fn.hover({
      borderBottom: '1rem #E7FF50',
      backgroundColor: '#E7FF50',
      color: '#070707',
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,

    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  nav: {
    [theme.fn.smallerThan('sm')]: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      borderBottom: 0,
      top: 'calc(100vh - 60px)',
      background: 'rgba(0, 0, 0, 0.6)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      backdropFilter: 'blur(7px)',
      WebkitBackdropFilter: 'blur(7px)',

      borderTop: '1px solid rgba(255, 255, 255, 0.18)',
    },
    backgroundColor: 'transparent',
    borderBottom: 0,
  },
}));

export default function HeaderMegaMenu({ links }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box className='relative'>
      <Header height={60} px='md' sx={classes.nav}>
        <Group position='apart' sx={{ height: '100%' }}>
          <a href='https://www.atk-ytp.org/' className='flex items-center no-underline'>
            <span className='self-center whitespace-nowrap text-2xl font-semibold text-white no-underline'>
              <Text weight='800'>ATK-YTP &apos;23</Text>
            </span>
          </a>
          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            {links.map((link) => {
              return (
                <a key={link} href={link.link} className={classes.link}>
                  {link.label}
                </a>
              );
            })}
          </Group>
          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        closeButtonProps={{ display: 'none' }}
        classNames={{ root: classes.hiddenDesktop }}
        zIndex={900}
        height='100%'
        styles={() => ({
          content: {
            background: '#E7FF50',
            color: '#070707',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 'auto',
          },
          body: {
            padding: 0,
          },
          header: {
            background: '#E7FF50',
          },
        })}
      >
        <Divider my='sm' color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

        {links.map((link) => {
          return (
            <a key={link} href={link.link} className={classes.link}>
              {link.label}
            </a>
          );
        })}

        <Divider my='sm' color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
      </Drawer>
    </Box>
  );
}
