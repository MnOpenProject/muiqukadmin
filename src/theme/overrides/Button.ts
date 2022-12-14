import { Theme, getNeumorphismByThemeMode } from '@/theme/types/Theme';

export default function Button() {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => {
          const neumorphismParams = { shadowDistance: '6px', shadowBlur: '6px' };
          const neuObj = getNeumorphismByThemeMode({ theme, neumorphismParams });
          return {
            ...neuObj.flat,
            '&:hover': {
              ...neuObj.pressed
            }
          };
        }
      }
    }
  };
}
