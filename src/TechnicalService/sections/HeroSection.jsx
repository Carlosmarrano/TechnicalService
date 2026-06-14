import { Box, Grid, Typography } from "@mui/material";
import { useAuthStatus } from "../../hooks/useAuthStatus"
import { InfoButton } from "../components/Buttons/infoButton";
import headerImage from "../../../public/header.png";

export const HeroSection = () => {
    
    const { displayName } = useAuthStatus();

    return (
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ marginTop: { xs: 3, md: 10 }, justifyContent: "center", alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography variant="h1" sx={{ fontSize: { xs: 26, sm: 40, md: 55 }, fontWeight: 700, lineHeight: 1.3, wordBreak: "break-word" }}>
                    Hola {displayName}, <br /> En Petu Service, le damos solución a tus problemas en casa
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <InfoButton />
                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
                <Box component="img" src={headerImage} alt="headerImage" sx={{ width: "100%", maxWidth: { xs: 280, sm: 350, md: 400 }, height: "auto", maskImage: 'linear-gradient(black 80%, transparent)' }} />
            </Grid>
        </Grid>
    )
}