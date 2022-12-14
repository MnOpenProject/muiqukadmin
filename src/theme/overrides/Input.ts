import { Theme } from '@/theme/types/Theme';

export default function Input() {
  return {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          '& label.Mui-focused': {
            color: theme.palette.common.white
          }
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.palette.grey[100]} !important`
          }
        })
      }
    }
  };
}