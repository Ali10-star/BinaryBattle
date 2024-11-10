import { Heading, Text } from '@radix-ui/themes';
import { LoaderPinwheel, Settings } from 'lucide-react';
import { getThemeFromCookies } from '../theme/theme';

const Navbar = async () => {
  const theme = await getThemeFromCookies();

  return (
    <nav className="flex justify-start md:justify-around items-center py-5">
      <div className="flex items-center gap-2 ms-4 md:ms-0">
        <Text color={theme.accentColor}>
          <LoaderPinwheel />
        </Text>
        <Heading className="font-poppins font-semibold !text-[1.5rem]">
          Binary Battle
        </Heading>
      </div>
      <div className='md:flex items-center gap-6 hidden'>
        <ThemeToggle />
        <Settings />
      </div>
    </nav>
  )
}

const ThemeToggle = () => {
  return (
    <div className='flex items-center gap-2'>
      <span className='shadow-sm px-2 border rounded-lg font-normal font-poppins keyboard-key'>T</span>
      <span className='font-inter font-light text-gray-500 text-sm'>Theme Options</span>
    </div>
  )
}

export default Navbar;
