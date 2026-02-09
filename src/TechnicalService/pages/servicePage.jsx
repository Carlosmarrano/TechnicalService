import { Box, Grid, Typography } from "@mui/material"
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

export const ServicesPage = () => {
    return (
        <TechnicalLayout>
            <Grid container sx={{ marginTop: 20, display: "flex", alignItems: "center", flexDirection: "column", gap: 8, marginRight: 10, marginBottom: 6 }}>
                <Box>
                    <Typography variant="h1" sx={{ textAlign: "center", fontSize: { xs: 40, md: 60, lg: 80 }, fontWeight: 500 }}>
                        Nuestros Servicios
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-between", gap: 4, width: "100%" }}>
                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <ConstructionIcon sx={{ fontSize: 50, color: "#002D3E" }}/>
                        <Typography variant="h5">Servicio Técnico</Typography>
                        <Typography>Contamos con un equipo de especialistas altamente capacitados para brindar mantenimiento preventivo y correctivo, asegurando que tus activos operen siempre al 100%.</Typography>
                    </Box>

                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <HeadsetMicIcon sx={{ fontSize: 50, color: "#002D3E" }}/>
                        <Typography variant="h5">Atención al Cliente</Typography>
                        <Typography>Tu tranquilidad es nuestra prioridad. Ofrecemos un canal de comunicación directo y eficiente para resolver dudas, gestionar solicitudes y brindarte acompañamiento constante.</Typography>
                    </Box>

                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <HomeRepairServiceIcon sx={{ fontSize: 50, color: "#002D3E" }}/>
                        <Typography variant="h5">Reparación de Electrodomésticos</Typography>
                        <Typography>Devolvemos la vida a tus equipos del hogar con repuestos de calidad y mano de obra experta, garantizando durabilidad y un funcionamiento óptimo.</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-between", gap: 4, width: "100%" }}>
                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <ComputerIcon sx={{ fontSize: 50, color: "#002D3E" }}/>
                        <Typography variant="h5">Soporte Técnico</Typography>
                        <Typography>Asistencia especializada para resolver cualquier incidencia operativa de forma rápida, ya sea de manera presencial o remota, minimizando tiempos de inactividad.</Typography>
                    </Box>

                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <LightbulbIcon sx={{ fontSize: 50, color: "#002D3E" }}/>
                        <Typography variant="h5">Consultoria</Typography>
                        <Typography>Te asesoramos en la toma de decisiones estratégicas para optimizar tus recursos tecnológicos y operativos, adaptándonos a las necesidades específicas de tu proyecto.</Typography>
                    </Box>

                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <MoveToInboxIcon sx={{ fontSize: 50, color: "#002D3E" }}/>
                        <Typography variant="h5">Instalación de equipos</Typography>
                        <Typography>Realizamos montajes profesionales siguiendo estrictamente las normativas de seguridad y las especificaciones del fabricante para un inicio de operación impecable.</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-between", gap: 4, width: "100%" }}>
                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <FlipIcon sx={{ fontSize: 50, color: "#002D3E" }}/>
                        <Typography variant="h5">diagnóstico y solución de problemas</Typography>
                        <Typography sx={{display: "flex", justifyContent: "center"}}>Identificamos la raíz de cualquier falla mediante herramientas avanzadas, aplicando soluciones efectivas que previenen futuras complicaciones. </Typography>
                    </Box>

                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <SchoolIcon sx={{ fontSize: 50, color: "#002D3E" }}/>
                        <Typography variant="h5">Capacitación al cliente</Typography>
                        <Typography>Empoderamos a tu personal o familia con los conocimientos necesarios para el uso correcto y seguro de los equipos, maximizando su rendimiento.</Typography>
                    </Box>

                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <PreviewIcon sx={{fontSize: 50, color: "#002D3E"}}/>
                        <Typography variant="h5">Servicios de monitoreo y control</Typography>
                        <Typography>Vigilancia constante de tus sistemas para detectar anomalías en tiempo real, permitiéndonos actuar antes de que se conviertan en un problema</Typography>
                    </Box>
                </Box>

            </Grid>
        </TechnicalLayout>
    )
}