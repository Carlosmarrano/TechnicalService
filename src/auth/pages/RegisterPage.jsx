import { TextField, Grid, Button, Link, Typography, Alert } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [ (value) => value.includes('@'), "El correo debe tener una @"],
  password: [ (value) => value.length >= 6, "El password debe tener más de 6 letras."],
  displayName: [ (value) => value.length >= 3, "el nombre es obligatorio"]
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [ formSubmitted, setFormSubmitted ] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === "checking", [status]);

  const { formState, displayName, email, password, onInputChange, displayNameValid ,isFormValid, emailValid, passwordValid } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if( !isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title='Register'>
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn"> 
        <Grid container component="form" spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField label="Nombre completo" type="text" placeholder="John Doe" size="small" fullWidth name="displayName" value={displayName} onChange={onInputChange} error={!!displayNameValid && formSubmitted} helperText={ displayNameValid }/>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField label="Email" type="email" placeholder="email@google.com" size="small" fullWidth name='email' value={email} onChange={onInputChange} error={!!emailValid && formSubmitted} helperText={ emailValid  } />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField label="Password" type="password" placeholder="password" size="small" fullWidth name='password' value={password} onChange={onInputChange} error={!!passwordValid && formSubmitted} helperText={ passwordValid }/>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }} >
          <Grid size={{ xs: 12 }} display={ !!errorMessage ? '' : 'none' }>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button disabled={ isCheckingAuthentication } type='submit' variant="contained" fullWidth >Crear Cuenta</Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
          <Typography sx={{ mr: 1 }} >Ya tienes una cuenta?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">Inicia Sesión</Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};