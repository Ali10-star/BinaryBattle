import React from 'react';
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { getThemeFromCookies } from '@/components/theme/theme';
import { cn } from '@/utils/generalUtils';

export default async function Home() {
  const theme = await getThemeFromCookies();
  return (
    <React.Fragment>
      <main className='flex flex-col flex-wrap justify-center items-center mt-28 px-4 w-full'>
        <h1 className='font-poppins font-thin text-2xl text-center md:text-4xl'>
          Welcome to <Text color={theme.accentColor} className='font-normal'>Binary Battle!</Text>
        </h1>
        <Text as='p' className={cn('mt-4 font-inter font-light text-center', theme.appearance === 'dark' ? 'text-gray-300' : 'text-gray-700')}>
          A simple relaxing puzzle game where you have to fill the grid with the appropriate contrasting elements!
          <br /><br />
          New to the game? <Text as='span' role='button' color={theme.accentColor} className={'font-semibold'}>Learn how to play</Text>
        </Text>
      </main>
    </React.Fragment>
  );
}
