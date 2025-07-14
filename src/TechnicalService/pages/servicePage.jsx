import { Box, Grid, Typography } from "@mui/material"
import { TechnicalLayout } from "../layout/TechnicalLayout"
import ServiceImage from "../../../public/logo.png"

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
                        <Box component="img" src={ServiceImage} alt="Imagen1" sx={{ width: "100%", maxWidth: 100, borderRadius: 1 }} />
                        <Typography variant="h5">Servicio Técnico</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earum.</Typography>
                    </Box>

                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <Box component="img" src={ServiceImage} alt="Imagen2" sx={{ width: "100%", maxWidth: 100, borderRadius: 1 }} />
                        <Typography variant="h5">Atención al Cliente</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earum.</Typography>
                    </Box>

                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <Box component="img" src={ServiceImage} alt="Imagen2" sx={{ width: "100%", maxWidth: 100, borderRadius: 1 }} />
                        <Typography variant="h5">Reparación de Electrodomésticos</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earum.</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-between", gap: 4, width: "100%" }}>
                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <Box component="img" src={ServiceImage} alt="Imagen1" sx={{ width: "100%", maxWidth: 100, borderRadius: 1 }} />
                        <Typography variant="h5">Soporte Técnico</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earum.</Typography>
                    </Box>

                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <Box component="img" src={ServiceImage} alt="Imagen1" sx={{ width: "100%", maxWidth: 100, borderRadius: 1 }} />
                        <Typography variant="h5">Consultoria</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earum.</Typography>
                    </Box>

                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <Box component="img" src={ServiceImage} alt="Imagen1" sx={{ width: "100%", maxWidth: 100, borderRadius: 1 }} />
                        <Typography variant="h5">Instalación de equipos</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earum.</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-between", gap: 4, width: "100%" }}>
                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <Box component="img" src={ServiceImage} alt="Imagen1" sx={{ width: "100%", maxWidth: 100, borderRadius: 1 }} />
                        <Typography variant="h5">diagnóstico y solución de problemas</Typography>
                        <Typography sx={{display: "flex", justifyContent: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earum. </Typography>
                    </Box>

                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <Box component="img" src={ServiceImage} alt="Imagen1" sx={{ width: "100%", maxWidth: 100, borderRadius: 1 }} />
                        <Typography variant="h5">Capacitación al cliente</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earum.</Typography>
                    </Box>

                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, maxWidth: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <Box component="img" src={ServiceImage} alt="Imagen1" sx={{ width: "100%", maxWidth: 100, borderRadius: 1 }} />
                        <Typography variant="h5">Servicios de monitoreo y control</Typography>
                        <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earum.</Typography>
                    </Box>
                </Box>

            </Grid>
        </TechnicalLayout>
    )
}