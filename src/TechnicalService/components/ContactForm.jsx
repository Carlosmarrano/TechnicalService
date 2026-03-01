import { Alert, Box, Card, CardContent, Grid, Snackbar, TextField, Typography } from "@mui/material"
import { FormButtom } from "./Buttons/FormButton"
import { Controller, useForm } from "react-hook-form"
import { useState } from "react"

export const ContactForm = () => {

    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            Nombre: "",
            Apellido: "",
            Email: "",
            Mensaje: "",

        },
    })

    const onSubmit = () => {
        setOpen(true);
        reset();
    };

    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <Grid container sx={{ marginTop: 20, display: "flex", alignItems: "center", flexDirection: "column", gap: 4, marginRight: 10 }}>
            <Box>
                <Typography variant="h2" sx={{ textAlign: "center", fontSize: { xs: 40, sm: 50, lg: 60 } }}>
                    Contáctanos
                </Typography>
            </Box>
            <Card sx={{ backgroundColor: "secondary.main", maxWidth: 800, display: "flex", justifyContent: "center", alignContent: "center", boxShadow: 5, mx: "auto" }}>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={1}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Controller name="Nombre" control={control} rules={{ required: "El nombre es obligatorio", maxLength: { value: 50, message: "Máximo 50 caracteres" }, minLength: { value: 3, message: "Nombre demasiado corto" } }} render={({ field, fieldState: { error } }) => (<TextField {...field} label="Nombre Completo" placeholder="Pedro Manuel" variant="outlined" fullWidth error={!!error} helperText={error ? error.message : null} />)} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Controller name="Apellido" control={control} rules={{ required: "El apellido es obligatorio", maxLength: { value: 50, message: "Máximo 50 caracteres" }, minLength: { value: 5, message: "Apellido demasiado corto" } }} render={({ field, fieldState: {
                                    error } }) => (<TextField {...field} label="Apellido Completo" placeholder="Perez Dominguéz" variant="outlined" fullWidth error={!!error} helperText={error ? error.message : null} />)} />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Controller name="Email" control={control} rules={{ required: "El correo es obligatorio", pattern: { value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/, message: "Debes ingrear una cuenta de Gmail válida (@gmail.com)" } }} render={({ field, fieldState: { error } }) => (<TextField {...field} label="Correo Electrónico" placeholder="ejemplo@gmail.com" variant="outlined" fullWidth error={!!error} helperText={error ? error.message : null} />)} />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Controller name="Mensaje" control={control} rules={{ required: "Dejar un mensaje", maxLength: { value: 10000, message: "Máximo diez mil caracteres" }, minLength: { value: 100, message: "Mensaje demasiado corto" } }} render={({ field, fieldState: { error } }) => (<TextField  {...field} label="Deja tu mensaje" placeholder="Hola quería contactarme con ustedes...." variant="outlined" fullWidth multiline rows={5} error={!!error} helperText={error ? error.message : null} />)} />
                            </Grid>
                            <FormButtom />
                        </Grid>
                    </form>
                </CardContent>
            </Card>

            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: "100%"}}>
                    Formulario Completado
                </Alert>
            </Snackbar>
        </Grid>
    )
}