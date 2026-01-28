import { Button, Grid } from "@mui/material"


export const FormButtom = () => {
    return (
        <Grid size={{ xs: 12 }}>
            <Button type="submit" fullWidth variant="contained" sx={{ bgcolor: "primary.main", color: "black", padding: { xs: 1, md: 1.5 }, borderRadius: 5, fontSize: { xs: 14, md: 16 } }}>Enviar</Button>
        </Grid>
    )
}