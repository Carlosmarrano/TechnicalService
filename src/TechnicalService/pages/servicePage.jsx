import { Box, Container, Grid, Typography } from "@mui/material"
import { TechnicalLayout } from "../layout/TechnicalLayout"
import ConstructionIcon from '@mui/icons-material/Construction';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ComputerIcon from '@mui/icons-material/Computer';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import FlipIcon from '@mui/icons-material/Flip';
import SchoolIcon from '@mui/icons-material/School';
import PreviewIcon from '@mui/icons-material/Preview';

const services = [
    { icon: <ConstructionIcon sx={{ fontSize: 50, color: "#002D3E" }} />, title: "Servicio Técnico", desc: "Contamos con un equipo de especialistas altamente capacitados para brindar mantenimiento preventivo y correctivo, asegurando que tus activos operen siempre al 100%." },
    { icon: <HeadsetMicIcon sx={{ fontSize: 50, color: "#002D3E" }} />, title: "Atención al Cliente", desc: "Tu tranquilidad es nuestra prioridad. Ofrecemos un canal de comunicación directo y eficiente para resolver dudas, gestionar solicitudes y brindarte acompañamiento constante." },
    { icon: <HomeRepairServiceIcon sx={{ fontSize: 50, color: "#002D3E" }} />, title: "Reparación de Electrodomésticos", desc: "Devolvemos la vida a tus equipos del hogar con repuestos de calidad y mano de obra experta, garantizando durabilidad y un funcionamiento óptimo." },
    { icon: <ComputerIcon sx={{ fontSize: 50, color: "#002D3E" }} />, title: "Soporte Técnico", desc: "Asistencia especializada para resolver cualquier incidencia operativa de forma rápida, ya sea de manera presencial o remota, minimizando tiempos de inactividad." },
    { icon: <LightbulbIcon sx={{ fontSize: 50, color: "#002D3E" }} />, title: "Consultoría", desc: "Te asesoramos en la toma de decisiones estratégicas para optimizar tus recursos tecnológicos y operativos, adaptándonos a las necesidades específicas de tu proyecto." },
    { icon: <MoveToInboxIcon sx={{ fontSize: 50, color: "#002D3E" }} />, title: "Instalación de equipos", desc: "Realizamos montajes profesionales siguiendo estrictamente las normativas de seguridad y las especificaciones del fabricante para un inicio de operación impecable." },
    { icon: <FlipIcon sx={{ fontSize: 50, color: "#002D3E" }} />, title: "Diagnóstico y solución de problemas", desc: "Identificamos la raíz de cualquier falla mediante herramientas avanzadas, aplicando soluciones efectivas que previenen futuras complicaciones." },
    { icon: <SchoolIcon sx={{ fontSize: 50, color: "#002D3E" }} />, title: "Capacitación al cliente", desc: "Empoderamos a tu personal o familia con los conocimientos necesarios para el uso correcto y seguro de los equipos, maximizando su rendimiento." },
    { icon: <PreviewIcon sx={{ fontSize: 50, color: "#002D3E" }} />, title: "Servicios de monitoreo y control", desc: "Vigilancia constante de tus sistemas para detectar anomalías en tiempo real, permitiéndonos actuar antes de que se conviertan en un problema." }
]

export const ServicesPage = () => {
    return (
        <TechnicalLayout>
            <Container maxWidth="xl" sx={{marginTop: {xs: 8, md: 12}, mb: 6}}>

            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: {xs: 5, md: 8} }}>
                <Box>
                    <Typography variant="h1" sx={{ textAlign: "center", fontSize: { xs: 38,sm: 48 ,md: 58, lg: 75 }, fontWeight: 600 }}>
                        Nuestros Servicios
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={{width: "100%", justifyContent: "center"}}>
                    {services.map((service, index) => (
                        <Grid key={index} size={{xs: 12, sm: 6, md: 4}} sx={{display: "flex"}}>
                            <Box sx={{width: "100%", border: "1px solid", borderColor: "divider", boxShadow: 4, padding: {xs: 3, md: 4}, borderRadius: 3, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, backgroundColor: "Background.paper", transition: "transform 0.2s, box-shadow 0.2s", "&:hover": {transform: "translateY(-4px)", boxShadow: 6}}}>
                                {service.icon}
                                <Typography variant="h5" component="h2" sx={{fontWeight: 600}}>{service.title}</Typography>
                                <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.6}}>{service.desc}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Box>
            </Container>
        </TechnicalLayout>
    )
}