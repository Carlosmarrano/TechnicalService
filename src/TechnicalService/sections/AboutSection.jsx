import { Box, Grid, Typography } from "@mui/material"
import { AboutUsButton } from "../components/Buttons/AboutUsButton"

export const AboutSection = () => {
    return (
        <Box sx={{ marginTop: { xs: 10, md: 15 } }}>
            <Typography variant="h2" sx={{ textAlign: "center", fontSize: { xs: 32, sm: 45, lg: 60 }, mb: 4 }}>
                Sobre Nosotros
            </Typography>

            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Box sx={{ border: "1px solid secondary.main", boxShadow: 3, padding: { xs: 3, md: 4 }, borderRadius: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <Typography variant="h5">Peito Service</Typography>
                        <Typography variant="body2">Peito Services, es una empresa creada para optimizar una inversión segura en su hogar, ofreciendo servicios de reparación, repuestos y una especialización técnica responsable y eficaz. Ustedes nos indican el problema..y Services le da la solución.</Typography>
                    </Box>
                </Grid>
                <Grid size={12} sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <AboutUsButton />
                </Grid>
            </Grid>
        </Box>
    )
}