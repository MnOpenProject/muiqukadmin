import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Image from 'mui-image';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Theme } from '@/theme';
import NeumorphismPannel from '@/components/NeumorphismPannel';

const ImageGrid: any = styled(Grid)(() => ({
  borderTopLeftRadius: '10px',
  borderBottomLeftRadius: '10px'
}));

const FormGrid: any = styled(Grid)(() => ({
  borderTopRightRadius: '10px',
  borderBottomRightRadius: '10px'
}));

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function SignInSide() {
  const theme: Theme = useTheme();
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };

  const siginIn = React.useCallback(() => {
    // navigate(menuRoutes.root.dashboard.path);
  }, []);

  return (
    <Grid
      container
      className="h-full flex-col justify-center"
      sx={[(theme: Theme) => ({ backgroundColor: theme.palette.primary.dark })] as any}
    >
      <NeumorphismPannel className="w-10/12 h-4/5" sx={{ margin: '0 auto' }}>
        <Grid className="w-full h-full flex">
          <Grid
            className="flex flex-col justify-center items-center"
            sx={{ width: 600 }}
            item
            xs={false}
            sm={4}
            md={7}
          >
            <NeumorphismPannel
              type="pressed"
              sx={{
                height: '80%',
                width: '80%'
              }}
            >
              <Grid
                sx={
                  [
                    (theme: Theme) => ({
                      height: '100%',
                      width: '100%',
                      padding: theme.spacing(2)
                    })
                  ] as any
                }
              >
                <Image
                  style={{ borderRadius: theme.neumorphism.borderRadius }}
                  src="https://picsum.photos/id/674/2000"
                  height="100%"
                  width="100%"
                  errorIcon
                  fit="cover"
                />
              </Grid>
            </NeumorphismPannel>
          </Grid>
          <NeumorphismPannel className="flex-1">
            <FormGrid className="w-full">
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={siginIn}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        No account? Sign Up
                      </Link>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              </Box>
            </FormGrid>
          </NeumorphismPannel>
        </Grid>
      </NeumorphismPannel>
    </Grid>
  );
}
