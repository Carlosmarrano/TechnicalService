import { TextField, Grid, Button, Link, Typography } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { Apple, Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
  <AuthLayout title='Register'>
    <Grid container component="form" spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField label="Nombre completo" type="text" placeholder="John Doe" size="small" fullWidth/>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField label="Email"  type="email" placeholder="email@google.com" size="small" fullWidth/>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField label="Password" type="password" placeholder="password" size="small" fullWidth/>
          </Grid>
    </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }} >
          <Grid size={{ xs: 12 }}>
            <Button variant="contained" fullWidth >Crear Cuenta</Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
            <Typography sx={{mr: 1}} >Ya tienes una cuenta?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">Inicia Sesión</Link>
        </Grid>
  </AuthLayout>
  );
};