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
import { useEffect, useState } from 'react';
import LangSelector from './LangSelector';

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
  logo: {
    width: '200px',
    marginRight: theme.spacing.md,
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
  hidden: {
    [theme.fn.largerThan('sm')]: {
      transform: 'translateY(-100%)',
      transition: 'transform 0.3s ease-in-out',
    },
  },
  visible: {
    [theme.fn.largerThan('sm')]: {
      transform: 'translateY(0)',
      transition: 'transform 0.3s ease-in-out',
    },
  },

  nav: {
    [theme.fn.smallerThan('sm')]: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 1001,
      borderBottom: 0,
      top: 'calc(env(safe-area-inset-bottom)) - 60px',
      background: '#070707',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      backdropFilter: 'blur(7px)',
      WebkitBackdropFilter: 'blur(7px)',
      borderTop: '1px solid rgba(255, 255, 255, 1)',
    },
    background: '#070707',
    backdropFilter: 'blur(7px)',
    WebkitBackdropFilter: 'blur(7px)',
    position: 'fixed',

    transition: 'transform 0.3s ease-in-out',
    borderBottom: '1px solid rgba(255, 255, 255, 1)',
  },
}));

export default function HeaderMegaMenu({ links }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Box className='relative mb-16'>
      <Header
        height={60}
        px='md'
        sx={classes.nav}
        className={`${show ? classes.visible : classes.hidden}`}
      >
        <Group position='apart' sx={{ height: '100%' }} spacing={0}>
        <a href='/' className='flex flex-1 items-center no-underline'>
            <svg viewBox="0 0 1320 300" className={`${classes.logo} nav-title`}>
            <text x="20" y="50%" dy=".35em" className="big-text">
                ATK-YTP
            </text>
            <text x="950" y="45%" dy=".1em" className="small-text">
                &apos;23
            </text>
            </svg>
          </a>

          <Group
            sx={{ height: '100%', justifyContent: 'space-between' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            {links.map((link) => {
              return (
                <a key={`navbar-${link.label}`} href={link.link} className={classes.link}>
                  {link.label}
                </a>
              );
            })}
          </Group>
          <Group>
            <LangSelector />
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.hiddenDesktop}
              aria-label='Toggle navigation'
            />
          </Group>
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        closeButtonProps={{ display: 'none' }}
        classNames={{ root: classes.hiddenDesktop }}
        zIndex={1000}
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
            marginBottom: '60px',
          },
          header: {
            background: '#E7FF50',
          },
        })}
      >
  

        {links.map((link) => {
          return (
            <a
              key={`menu-${link.label}`}
              href={link.link}
              className={classes.link}
              onClick={toggleDrawer}
            >
              {link.label}
            </a>
          );
        })}


      </Drawer>
    </Box>
  );
}
