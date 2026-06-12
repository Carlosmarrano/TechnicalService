import { TextField, Grid, Button, Link, Alert } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { Apple, Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks';
import { useMemo } from 'react';

export const LoginPage = () => {

  const {status, errorMessage} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "",
    password: ""  
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(startLoginWithEmailPassword({email, password}));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Login'>

      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField id="email" label="Email" type="email" size="small"  fullWidth name="email" value={email} onChange={onInputChange} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField id="password" label="Password" type="password" size="small" fullWidth name="password" value={password} onChange={onInputChange} />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }} >
          <Grid size={{ xs: 12 }} display={ !!errorMessage ? '' : 'none' }>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Button disabled={ isAuthenticating } variant="contained" fullWidth type="submit">Login</Button>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Button disabled={ isAuthenticating } variant="contained" sx={{ height: "36.5px" }} fullWidth aria-label='Google' aria-labelledby='link' role='button' onClick={ onGoogleSignIn } ><Google /></Button>
          </Grid>
{/*           <Grid size={{ xs: 4 }}>
            <Button variant="contained" sx={{ height: "36.5px" }} fullWidth aria-label='Apple' aria-labelledby='link' role='button'><Apple /></Button>
          </Grid> */}
        </Grid>
        <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
          <Link component={RouterLink} color="inherit" to="/auth/register">Crea una cuenta</Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};