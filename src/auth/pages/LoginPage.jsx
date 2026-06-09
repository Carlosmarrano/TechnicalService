import { TextField, Grid, Button, Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { Apple, Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "",
    password: ""  
  });

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Login'>

      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField id="email" label="Email" type="email" size="small"  fullWidth name="email" value={email} onChange={onInputChange} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField id="password" label="Password" type="password" size="small" fullWidth name="password" value={password} onChange={onInputChange} />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }} >
          <Grid size={{ xs: 4 }}>
            <Button variant="contained" fullWidth type="submit">Login</Button>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Button variant="contained" sx={{ height: "36.5px" }} fullWidth aria-label='Google' aria-labelledby='link' role='button' onClick={ onGoogleSignIn} ><Google /></Button>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Button variant="contained" sx={{ height: "36.5px" }} fullWidth aria-label='Apple' aria-labelledby='link' role='button'><Apple /></Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
          <Link component={RouterLink} color="inherit" to="/auth/register">Crea una cuenta</Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};