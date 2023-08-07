import { Burger, Text } from '@mantine/core';
import React from 'react';
import { useDisclosure } from '@mantine/hooks';

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <nav className='fixed left-0 top-0 z-20 w-full bg-transparent'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <a href='https://www.atk-ytp.org/' className='flex items-center'>
          <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
            <Text weight='800'>ATK-YTP &apos;23</Text>
          </span>
        </a>
        <div className='flex md:order-2'>
          <Burger opened={opened} onClick={toggle} aria-label={label} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
