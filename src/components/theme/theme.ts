import { cookies } from 'next/headers';
import { ThemeType } from '@/types/themeTypes';

export const defaultTheme: ThemeType = {
  appearance: 'light',
  accentColor: 'indigo',
  grayColor: 'mauve',
  panelBackground: 'solid',
  radius: 'small',
  scaling: '100%',
};

export async function getThemeFromCookies(): Promise<ThemeType> {
  const cookieStore = await cookies();

  // Get all theme-related cookies
  const appearanceCookie = cookieStore.get('theme-appearance');
  const accentColorCookie = cookieStore.get('theme-accentColor');
  const grayColorCookie = cookieStore.get('theme-grayColor');
  const panelBackgroundCookie = cookieStore.get('theme-panelBackground');
  const radiusCookie = cookieStore.get('theme-radius');
  const scalingCookie = cookieStore.get('theme-scaling');

  // Combine all cookie values
  const theme = {
    ...defaultTheme,
    ...(appearanceCookie ? JSON.parse(appearanceCookie.value) : {}),
    ...(accentColorCookie ? JSON.parse(accentColorCookie.value) : {}),
    ...(grayColorCookie ? JSON.parse(grayColorCookie.value) : {}),
    ...(panelBackgroundCookie ? JSON.parse(panelBackgroundCookie.value) : {}),
    ...(radiusCookie ? JSON.parse(radiusCookie.value) : {}),
    ...(scalingCookie ? JSON.parse(scalingCookie.value) : {})
  };

  return theme;
}

export function getThemeFromClientCookies(): ThemeType {
  // Get all cookies as string
  const cookies = document.cookie;
  const cookieObj: { [key: string]: string } = {};

  // Parse cookies string into object
  cookies.split(';').forEach(cookie => {
    const [name, value] = cookie.trim().split('=');
    cookieObj[name] = value;
  });

  // Get theme-related cookies and parse them
  const theme = {
    ...defaultTheme,
    ...(cookieObj['theme-appearance'] ? JSON.parse(decodeURIComponent(cookieObj['theme-appearance'])) : {}),
    ...(cookieObj['theme-accentColor'] ? JSON.parse(decodeURIComponent(cookieObj['theme-accentColor'])) : {}),
    ...(cookieObj['theme-grayColor'] ? JSON.parse(decodeURIComponent(cookieObj['theme-grayColor'])) : {}),
    ...(cookieObj['theme-panelBackground'] ? JSON.parse(decodeURIComponent(cookieObj['theme-panelBackground'])) : {}),
    ...(cookieObj['theme-radius'] ? JSON.parse(decodeURIComponent(cookieObj['theme-radius'])) : {}),
    ...(cookieObj['theme-scaling'] ? JSON.parse(decodeURIComponent(cookieObj['theme-scaling'])) : {})
  };

  return theme;
}
