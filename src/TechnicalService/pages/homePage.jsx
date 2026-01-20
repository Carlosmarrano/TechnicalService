import { Box, Card, CardContent, Container, Divider, Grid, Link, Stack, TextField, Typography } from "@mui/material";
import { TechnicalLayout } from "../layout/TechnicalLayout";
import headerImage from "../../../public/header.png";
import ServiceImage from "../../../public/logo.png";
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
import { FormButtom } from "../components/Buttons/FormButton";

export const HomePage = () => {

    return (
        <TechnicalLayout>
            <Grid container sx={{ marginTop: 20, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "center", alignItems: { xs: "center", md: "flex-start" }, gap: { xs: 6, md: 12, lg: 16 }, marginRight: 9.5 }}>

                <Grid sx={{ textAlign: { xs: "center", md: "left" }, flex: 1, maxWidth: { xs: "68%", md: "100%" } }}>
                    <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 60 }, fontWeight: 500 }}>
                        En Petu Service, le damos solución a tus problemas en casa
                    </Typography>
                    <InfoButton />
                </Grid>

                <Grid sx={{ width: "100%", maxWidth: 400, height: "auto", }}>
                    <Box component="img" src={headerImage} alt="headerImage" sx={{ width: { xs: "68%", md: "100%" }, height: "auto", maskImage: 'linear-gradient(black 80%, transparent)', marginLeft: { xs: 6, md: 0 } }}>
                    </Box>
                </Grid>
            </Grid>

            <Grid container sx={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: { xs: "column", md: "row" }, gap: { xs: 3, md: 12, lg: 16 }, marginRight: { xs: 10, md: 0 } }}>

                <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <Box>
                        <AnimatedNumber targetNumber={50} sx={{ fontWeight: 900, fontSize: { xs: 50, md: 80 } }} />
                        <Typography sx={{ fontWeight: 500, fontSize: { xs: 19, md: 25 } }}>Clientes satisfechos</Typography>
                    </Box>
                </Grid>

                <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <Box>
                        <AnimatedNumber targetNumber={189} sx={{ fontWeight: 900, fontSize: { xs: 50, md: 80 } }} />
                        <Typography sx={{ fontWeight: 500, fontSize: { xs: 19, md: 25 } }}>Electrodomésticos reparados</Typography>
                    </Box>
                </Grid>
                <ReviewsButton />
            </Grid>

            <Grid container sx={{ marginTop: 20, display: "flex", alignItems: "center", flexDirection: "column", gap: 8, marginRight: 10 }}>
                <Box>
                    <Typography variant="h2" sx={{ textAlign: "center", fontSize: { xs: 40, sm: 50, lg: 60 } }}>
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
                </Box>
                <AllServiceButton />
            </Grid>

            <Grid container sx={{ marginTop: 20, display: "flex", alignItems: "center", flexDirection: "column", gap: 8, marginRight: 10 }}>
                <Box>
                    <Typography variant="h2" sx={{ textAlign: "center", fontSize: { xs: 40, sm: 50, lg: 60 } }}>
                        Sobre Nosotros
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-between", gap: 4 }}>
                    <Box sx={{ flex: 1, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <Typography variant="h5">Soporte Técnico</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earumLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earumLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earumLorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earumLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earumLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earumLorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earumLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earumLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earumLorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earumLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earumLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis ullam. Aliquid ad odio eveniet earumLorem.</Typography>
                    </Box>
                    <AboutUsButton />
                </Box>
            </Grid>

            <Grid container sx={{ marginTop: 20, display: "flex", alignItems: "center", flexDirection: "column", gap: 4, marginRight: 10 }}>
                <Box>
                    <Typography variant="h2" sx={{ textAlign: "center", fontSize: { xs: 40, sm: 50, lg: 60 } }}>
                        Contáctanos
                    </Typography>
                </Box>
                <Card sx={{ backgroundColor: "secondary.main", maxWidth: 800, display: "flex", justifyContent: "center", alignContent: "center", boxShadow: 5, mx: "auto" }}>
                    <CardContent>
                        <form>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField type="text" label="Nombre Completo" placeholder="Pedrito Pedro" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField type="text" label="Apellido Completo" placeholder="Martinez Dominguez" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField type="email" label="Email" placeholder="Tucorreoelectronico@gmail.com" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField label="Message" multiline rows={5} placeholder="Deja tu mensaje" variant="outlined" fullWidth required />
                                </Grid>
                                <FormButtom />
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>

            <Grid component="footer" sx={{ marginTop: 20 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={{ xs: 4, md: 6 }} sx={{ flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", mb: 6, }} >
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
            </Grid>

        </TechnicalLayout>
    )
}