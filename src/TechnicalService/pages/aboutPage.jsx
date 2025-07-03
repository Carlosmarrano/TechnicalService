import { Box, Button, Grid, Typography } from "@mui/material"
import { TechnicalLayout } from "../layout/TechnicalLayout"


export const AboutPage = () => {
    return (
        <TechnicalLayout>
            <Grid container sx={{ marginTop: 20, display: "flex", alignItems: "center", flexDirection: "column", gap: 6, marginRight: { xs: 8, lg: 10 } }}>
                <Box>
                    <Typography variant="h1" sx={{ textAlign: "center", fontSize: { xs: 40, lg: 80 }, fontWeight: 500 }}>
                        Sobre Nosotros
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-between", gap: 4 }}>
                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <Typography variant="h4">Peito Service</Typography>

                        <Typography>Peito Services una empresa creada en 1984,cuyo fundamento principal,es impulsar el servicio técnico a otro nivel,optimizando de manerq eficaz,rápida y segura,las soluciones técnicas del hogar,ofreciendo personal cualuficado y con una alta experiencua,que faciliten de modo operativo,responsable,la confianza,de ud como cliente al elegir nuestros servicios.</Typography>

                        <Typography>Razón de base por la que nuestro fundador piloto y actual regente,chicho javier,enfatiza en brindar soluciones basadas en su tiempo,presupuestp y necesidad,Siendo el lema de nuestra empresa Su electrodoméstico queda seguro,reparado y funcional en nuestras manos"</Typography>

                        <Typography>Nuestra materia prima son productos,herramientas y repuestos de alta calidad, dónde ud sienta respaldada su inversión.</Typography>

                        <Typography>Le recordamos ,que nuestra labor es 24/7, bajo cualquier condición climatica.</Typography>
                    </Box>
                </Box>
                <Box sx={{ textAlign: "center", mt: 4 }}>
                    <Button variant="contained" size="large" sx={{ display: "flex", bgcolor: "primary.main", color: "black", padding: { xs: 1, md: 1.5 }, borderRadius: 5, fontSize: { xs: 14, md: 16 } }}>
                        nuestros servicios
                    </Button>
                </Box>
            </Grid>

        </TechnicalLayout>
    )
}