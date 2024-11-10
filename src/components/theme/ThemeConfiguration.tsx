'use client';

import { ThemePanel } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function ThemeConfiguration() {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    if (name === 'appearance') {
      document.cookie = `theme-appearance=${JSON.stringify({ appearance: value })};path=/`;

      const colorSchemeMetaTag = document.querySelector('meta[name="color-scheme"]');
      if (colorSchemeMetaTag) {
        colorSchemeMetaTag.setAttribute('content', value);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'color-scheme';
        meta.content = value;
        document.head.appendChild(meta);
      }

      router.refresh();
    } else if (name === 'accentColor') {
      document.cookie = `theme-accentColor=${JSON.stringify({ accentColor: value })};path=/`;
      router.refresh();
    } else if (name === 'grayColor') {
      document.cookie = `theme-grayColor=${JSON.stringify({ grayColor: value })};path=/`;
      router.refresh();
    } else if (name === 'panelBackground') {
      document.cookie = `theme-panelBackground=${JSON.stringify({ panelBackground: value })};path=/`;
      router.refresh();
    } else if (name === 'radius') {
      document.cookie = `theme-radius=${JSON.stringify({ radius: value })};path=/`;
      router.refresh();
    } else if (name === 'scaling') {
      document.cookie = `theme-scaling=${JSON.stringify({ scaling: value })};path=/`;
      router.refresh();
    }
  }

  return (
    <ThemePanel
      defaultOpen={false}
      onChange={handleChange}
    />
  )
}