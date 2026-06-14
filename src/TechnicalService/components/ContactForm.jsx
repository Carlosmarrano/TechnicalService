import { Alert, Box, Card, CardContent, Grid, Snackbar, TextField, Typography } from "@mui/material"
import { FormButtom } from "./Buttons/FormButton"
import { Controller, useForm, FormProvider } from "react-hook-form"
import { useState } from "react"

export const ContactForm = () => {

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: "success"
    });
    const sleep = (ms) => new Promise((resolve => setTimeout(resolve, ms)));


    const methods = useForm({
        defaultValues: {
            Nombre: "",
            Apellido: "",
            Email: "",
            Mensaje: "",

        },
    })

    const onSubmit = async (data) => {

        const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

        try {
            await sleep(3000);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    access_key: ACCESS_KEY
                })
            });

            const result = await response.json();

           if(result.success) {
            methods.reset();

            setSnackbar({
                open: true,
                message: "Formulario enviado con éxito",
                severity: "success"
            });

            } else {
                throw new Error(result.message);
            }

        } catch (error) {
            setSnackbar({
                open: true,
                message: "Hubo un problema: " + error.message,
                severity: "error"
            })
        }
    };

    return (
        <FormProvider {...methods}>
            <Box sx={{ marginTop: {xs: 10, md: 15}, display: "flex", width: "100%", maxWidth: 800, mx: "auto" ,flexDirection: "column", gap: 4 }}>
                <Box sx={{ width: "100%"}}>
                    <Typography variant="h2" sx={{ textAlign: "center", fontSize: { xs: 36, sm: 50, lg: 60 } }}>
                        Contáctanos
                    </Typography>
                </Box>
                <Card sx={{ backgroundColor: "secondary.main", width: "100%", boxShadow: 5}}>
                    <CardContent>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Controller name="Nombre" rules={{ required: "El nombre es obligatorio", maxLength: { value: 50, message: "Máximo 50 caracteres" }, minLength: { value: 3, message: "Nombre demasiado corto" } }} render={({ field, fieldState: { error } }) => (<TextField {...field} label="Nombre Completo" placeholder="Pedro Manuel" variant="outlined" fullWidth error={!!error} helperText={error ? error.message : null} />)} />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Controller name="Apellido" rules={{ required: "El apellido es obligatorio", maxLength: { value: 50, message: "Máximo 50 caracteres" }, minLength: { value: 5, message: "Apellido demasiado corto" } }} render={({ field, fieldState: {
                                        error } }) => (<TextField {...field} label="Apellido Completo" placeholder="Perez Dominguéz" variant="outlined" fullWidth error={!!error} helperText={error ? error.message : null} />)} />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Controller name="Email" rules={{ required: "El correo es obligatorio", pattern: { value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/, message: "Debes ingrear una cuenta de Gmail válida (@gmail.com)" } }} render={({ field, fieldState: { error } }) => (<TextField {...field} label="Correo Electrónico" placeholder="ejemplo@gmail.com" variant="outlined" fullWidth error={!!error} helperText={error ? error.message : null} />)} />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Controller name="Mensaje" rules={{ required: "Dejar un mensaje", maxLength: { value: 10000, message: "Máximo diez mil caracteres" }, minLength: { value: 100, message: "Mensaje demasiado corto" } }} render={({ field, fieldState: { error } }) => (<TextField  {...field} label="Deja tu mensaje" placeholder="Hola quería contactarme con ustedes...." variant="outlined" fullWidth multiline rows={5} error={!!error} helperText={error ? error.message : null} />)} />
                                </Grid>
                                <FormButtom />
                            </Grid>
                        </form>
                    </CardContent>
                </Card>

                <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => { setSnackbar({ ...snackbar, open: false }) }}>
                    <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} variant="filled" sx={{ width: "100%" }}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Box>
        </FormProvider>
    )
}