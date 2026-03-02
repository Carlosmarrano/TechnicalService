import { Button, Grid } from "@mui/material"
import { useFormContext } from "react-hook-form"


export const FormButtom = () => {

    const { formState: { isSubmitting } } = useFormContext();

    return (
        <Grid size={{ xs: 12 }}>
            <Button type="submit" disabled={isSubmitting} fullWidth variant="contained" sx={{ bgcolor: "primary.main", color: "black", padding: { xs: 1, md: 1.5 }, borderRadius: 5, fontSize: { xs: 14, md: 16 } }}>{isSubmitting ? "Enviando...": "Enviar"}</Button>
        </Grid>
    )
}