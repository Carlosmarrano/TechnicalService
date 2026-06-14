import { Box, Grid, Typography } from "@mui/material"
import { AllServiceButton } from "../components/Buttons/AllServiceButton"
import ConstructionIcon from '@mui/icons-material/Construction';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ComputerIcon from '@mui/icons-material/Computer';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export const ServicesSection = () => {
    return (
        <Box sx={{ marginTop: { xs: 10, md: 15 } }}>
            <Typography variant="h2" sx={{ textAlign: "center", fontSize: { xs: 32, sm: 45, lg: 60 }, mb: 4 }}>
                Nuestros Servicios
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ border: "1px solid secondary.main", boxShadow: 3, padding: { xs: 3, md: 4 }, borderRadius: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, height: "100%" }}>
                        <ConstructionIcon sx={{ fontSize: 45, color: "#002D3E" }} />
                        <Typography variant="h5">Servicio Técnico</Typography>
                        <Typography variant="body2">Contamos con un equipo de especialistas altamente capacitados para brindar mantenimiento preventivo y correctivo, asegurando que tus activos operen siempre al 100%.</Typography>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ border: "1px solid secondary.main", boxShadow: 3, padding: { xs: 3, md: 4 }, borderRadius: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, height: "100%" }}>
                        <HeadsetMicIcon sx={{ fontSize: 45, color: "#002D3E" }} />
                        <Typography variant="h5">Atención al Cliente</Typography>
                        <Typography variant="body2">Tu tranquilidad es nuestra prioridad. Ofrecemos un canal de comunicación directo y eficiente para resolver dudas, gestionar solicitudes y brindarte acompañamiento constante.</Typography>
                    </Box>
                </Grid>


                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ border: "1px solid secondary.main", boxShadow: 3, padding: { xs: 3, md: 4 }, borderRadius: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, height: "100%" }}>
                        <ComputerIcon sx={{ fontSize: 45, color: "#002D3E" }} />
                        <Typography variant="h5">Soporte Técnico</Typography>
                        <Typography variant="body2">Asistencia especializada para resolver cualquier incidencia operativa de forma rápida, ya sea de manera presencial o remota, minimizando tiempos de inactividad.</Typography>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ border: "1px solid secondary.main", boxShadow: 3, padding: { xs: 3, md: 4 }, borderRadius: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, height: "100%" }}>
                        <LightbulbIcon sx={{ fontSize: 50, color: "#002D3E" }} />
                        <Typography variant="h5">Consultoria</Typography>
                        <Typography variant="body2">Te asesoramos en la toma de decisiones estratégicas para optimizar tus recursos tecnológicos y operativos, adaptándonos a las necesidades específicas de tu proyecto.</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <AllServiceButton />
            </Box>
        </Box>
    )
}