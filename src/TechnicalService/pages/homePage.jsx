import { Box, Container, Divider, Grid, Link, Stack, Typography } from "@mui/material";
import { TechnicalLayout } from "../layout/TechnicalLayout";
import headerImage from "../../../public/header.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import { AnimatedNumber } from "../components/incrementNumbers";
import { InfoButton } from "../components/Buttons/infoButton";
import { ReviewsButton } from "../components/Buttons/ReviewsButton";
import { AllServiceButton } from "../components/Buttons/AllServiceButton";
import { AboutUsButton } from "../components/Buttons/AboutUsButton";
import { ContactForm } from "../components/ContactForm";
import ConstructionIcon from '@mui/icons-material/Construction';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ComputerIcon from '@mui/icons-material/Computer';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Element } from "react-scroll";
import { ReviewSlider } from "../components/ReviewSlider";
import { useAuthStatus } from "../../hooks/useAuthStatus";

export const HomePage = () => {

    const { displayName } = useAuthStatus();

    return (
        <TechnicalLayout>
            <Box sx={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "stretch" }}>

                <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 }, flexGrow: 1 }}>

                    <Grid container spacing={{ xs: 4, md: 8 }} sx={{ marginTop: { xs: 3, md: 10 }, justifyContent: "center", alignItems: "center" }}>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: "center", md: "left" } }}>
                            <Typography variant="h1" sx={{ fontSize: { xs: 26, sm: 40, md: 55 }, fontWeight: 700, lineHeight: 1.3, wordBreak: "break-word" }}>
                                Hola {displayName}, <br/> En Petu Service, le damos solución a tus problemas en casa
                            </Typography>
                            <Box sx={{ mt: 3 }}>
                                <InfoButton />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
                            <Box component="img" src={headerImage} alt="headerImage" sx={{ width: "100%", maxWidth: { xs: 280, sm: 350, md: 400 }, height: "auto", maskImage: 'linear-gradient(black 80%, transparent)' }} />
                        </Grid>
                    </Grid>


                    <Grid container spacing={4} sx={{ marginTop: { xs: 8, md: 15 }, alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                        <Grid size={{ xs: 12, sm: 5, md: 4 }}>
                            <Box>
                                <AnimatedNumber targetNumber={50} sx={{ fontWeight: 900, fontSize: { xs: 45, md: 80 } }} />
                                <Typography sx={{ fontWeight: 500, fontSize: { xs: 17, md: 25 } }}>Clientes satisfechos</Typography>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 5, md: 4 }}>
                            <Box>
                                <AnimatedNumber targetNumber={189} sx={{ fontWeight: 900, fontSize: { xs: 45, md: 80 } }} />
                                <Typography sx={{ fontWeight: 500, fontSize: { xs: 17, md: 25 } }}>Electrodomésticos reparados</Typography>
                            </Box>
                        </Grid>

                        <Grid size={12} sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                            <ReviewsButton />
                        </Grid>
                    </Grid>

                    <Element name="myScrollToElement">
                        <Box sx={{ marginTop: { xs: 10, md: 15 }}}>
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
                    </Element>

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

                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mx: "auto"}}>
                        <ContactForm />
                    </Box>

                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mx: "auto"}}> 
                        <Element name="scrollToSliderSection" style={{width: "100%"}}>
                            <ReviewSlider />
                        </Element>
                    </Box>
                </Container>

                <Box component="footer" sx={{ bgcolor: "#f9f9f9", py: 6, borderTop: "1px solid #e0e0e0", mt: "auto" }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4} sx={{ justifyContent: "space-between", mb: 6 }} >
                            <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                                <Stack spacing={1.5}>
                                    <Typography variant="h6" sx={{ color: "black" }}>For Business</Typography>
                                    <Link href="#" underline="hover" sx={{ color: "black" }}>Employer</Link>
                                    <Link href="#" underline="hover" sx={{ color: "black" }}>Health Plan</Link>
                                    <Link href="#" underline="hover" sx={{ color: "black" }}>Individual</Link>
                                </Stack>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                                <Stack spacing={1.5}>
                                    <Typography variant="h6" sx={{ color: "black" }}>Resources</Typography>
                                    <Link href="#" underline="hover" sx={{ color: "black" }}>Resource Center</Link>
                                    <Link href="#" underline="hover" sx={{ color: "black" }}>Testimonials</Link>
                                    <Link href="#" underline="hover" sx={{ color: "black" }}>STV</Link>
                                </Stack>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                                <Stack spacing={1.5}>
                                    <Typography variant="h6" sx={{ color: "black" }}>Partners</Typography>
                                    <Link href="#" underline="hover" sx={{ color: "black" }}>Swing Tech</Link>
                                </Stack>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                                <Stack spacing={1.5}>
                                    <Typography variant="h6" sx={{ color: "black" }}>Company</Typography>
                                    <Link href="#" underline="hover" sx={{ color: "black" }}>About</Link>
                                    <Link href="#" underline="hover" sx={{ color: "black" }}>Press</Link>
                                    <Link href="#" underline="hover" sx={{ color: "black" }}>Career</Link>
                                    <Link href="#" underline="hover" sx={{ color: "black" }}>Contact</Link>
                                </Stack>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                                <Stack spacing={2}>
                                    <Typography variant="h6" sx={{ color: "black" }}>
                                        Coming soon on
                                    </Typography>
                                    <Stack direction="row" spacing={2}>
                                        <Link href="#" target="_blank" rel="noopener" aria-label="Facebook" sx={{ background: "white", color: "#4267B2", borderRadius: 3 }}>
                                            <FacebookIcon />
                                        </Link>
                                        <Link href="#" target="_blank" rel="noopener" aria-label="Instagram" sx={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", color: "white", borderRadius: 3 }}>
                                            <InstagramIcon />
                                        </Link>
                                        <Link href="#" target="_blank" rel="noopener" aria-label="Twitter (X)" sx={{ color: "black" }}>
                                            <XIcon />
                                        </Link>
                                        <Link href="#" target="_blank" rel="noopener" aria-label="YouTube" sx={{ color: "#FF1A47" }}>
                                            <YouTubeIcon />
                                        </Link>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>

                        <Divider sx={{ borderColor: "#ccc", marginBottom: 4 }} />

                        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", lg: "center" }, gap: 3, marginBottom: 4 }}>
                            <Typography sx={{ color: "black" }}>© {new Date().getFullYear()} Todos los Derechos reservados</Typography>

                            <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap", justifyContent: { xs: "flex-start", lg: "flex-end" } }} >
                                <Link href="#" underline="hover" sx={{ color: "black" }}>Terms & Conditions</Link>
                                <Link href="#" underline="hover" sx={{ color: "black" }}>Privacy</Link>
                                <Link href="#" underline="hover" sx={{ color: "black" }}>Security</Link>
                                <Link href="#" underline="hover" sx={{ color: "black" }}>Cookie Declaration</Link>
                            </Stack>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </TechnicalLayout >
    )
}