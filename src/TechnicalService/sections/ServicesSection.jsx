import { Box, Grid, Typography } from "@mui/material"
import { AllServiceButton } from "../components/Buttons/AllServiceButton"
import ConstructionIcon from '@mui/icons-material/Construction';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ComputerIcon from '@mui/icons-material/Computer';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const services = [
    { icon: <ConstructionIcon sx={{ fontSize: 45, color: "#002D3E" }} />, title: "Servicio Técnico", desc: "Contamos con un equipo de especialistas altamente capacitados para brindar mantenimiento preventivo y correctivo, asegurando que tus activos operen siempre al 100%." },
    { icon: <HeadsetMicIcon sx={{ fontSize: 45, color: "#002D3E" }} />, title: "Atención al Cliente", desc: "Tu tranquilidad es nuestra prioridad. Ofrecemos un canal de comunicación directo y eficiente para resolver dudas, gestionar solicitudes y brindarte acompañamiento constante." },
    { icon: <ComputerIcon sx={{ fontSize: 45, color: "#002D3E" }} />, title: "Soporte Técnico", desc: "Asistencia especializada para resolver cualquier incidencia operativa de forma rápida, ya sea de manera presencial o remota, minimizando tiempos de inactividad." },
    { icon: <LightbulbIcon sx={{ fontSize: 45, color: "#002D3E" }} />, title: "Consultoría", desc: "Te asesoramos en la toma de decisiones estratégicas para optimizar tus recursos tecnológicos y operativos, adaptándonos a las necesidades específicas de tu proyecto." },
]

export const ServicesSection = () => {
    return (
        <Box sx={{ marginTop: { xs: 10, md: 15 } }}>
            <Typography variant="h2" sx={{ textAlign: "center", fontSize: { xs: 32, sm: 45, lg: 60 }, mb: 4 }}>
                Nuestros Servicios
            </Typography>

            <Grid container spacing={4} sx={{ width: "100%", justifyContent: "center" }}>
                {services.map((service, index) => (
                    <Grid key={index} size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
                        <Box sx={{ width: "100%", border: "1px solid", borderColor: "divider", boxShadow: 4, padding: { xs: 3, md: 4 }, borderRadius: 3, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, backgroundColor: "Background.paper", transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-4px)", boxShadow: 6 } }}>
                            {service.icon}
                            <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>{service.title}</Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>{service.desc}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <AllServiceButton />
            </Box>
        </Box>
    )
}