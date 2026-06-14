import { Box, Container, Grid, Typography } from "@mui/material"
import { TechnicalLayout } from "../layout/TechnicalLayout"
import { AllServiceButton } from "../components/Buttons/AllServiceButton"


export const AboutPage = () => {
    return (
        <TechnicalLayout>

            <Container maxWidth="lg" sx={{marginTop: {xs: 6, md: 10},mb: 2}}>
                <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: {xs: 4, md: 6} }}>
                    <Box>
                        <Typography variant="h1" sx={{ textAlign: "center", fontSize: { xs: 38, sm: 48, md: 58 ,lg: 75 }, fontWeight: 600 }}>
                            Sobre Nosotros
                        </Typography>
                    </Box>

                    <Box sx={{width: "100%", maxWidth: {xs: "100%", md: 720, lg: 850}, display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: "100%", border: "1px solid", borderColor: "divider" ,boxShadow: 4, padding: {xs: 3,sm: 4, md: 5}, borderRadius: 4, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                            <Typography variant="h4" sx={{fontWeight: 600, color: "text.primary", fontSize: {xs: "1.5rem", md: "2rem"}}}>Peito Service</Typography>

                            <Typography variant="body1" sx={{color: "text.secondary", lineHeight: 1.7, fontSize: {xs: 15, md:16}}}>Peito Services una empresa creada en 1984, cuyo fundamento principal, es impulsar el servicio técnico a otro nivel, optimizando de manerq eficaz, rápida y segura, las soluciones técnicas del hogar, ofreciendo personal cualuficado y con una alta experiencua, que faciliten de modo operativo, responsable, la confianza, de ud como cliente al elegir nuestros servicios.</Typography>

                            <Typography variant="body1" sx={{color: "text.secondary", lineHeight: 1.7, fontSize: {xs: 15, md:16}}}>Razón de base por la que nuestro fundador piloto y actual regente, chicho javier, enfatiza en brindar soluciones basadas en su tiempo, presupuesto y necesidad,Siendo el lema de nuestra empresa Su electrodoméstico queda seguro, reparado y funcional en nuestras manos"</Typography>

                            <Typography variant="body1" sx={{color: "text.secondary", lineHeight: 1.7, fontSize: {xs: 15, md:16}}}>Nuestra materia prima son productos,herramientas y repuestos de alta calidad, dónde ud sienta respaldada su inversión.</Typography>

                            <Typography variant="body1" sx={{fontWeight: 600, color: "text.primary", fontSize: {xs: 15, md:16}}}>Le recordamos, que nuestra labor es 24/7, bajo cualquier condición climatica.</Typography>
                        </Box>
                    </Box>
                    <AllServiceButton />
                </Grid>
            </Container>


        </TechnicalLayout>
    )
}