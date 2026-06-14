import { Box, Container, Grid, Typography } from "@mui/material"
import { TechnicalLayout } from "../layout/TechnicalLayout"
import { Map, Marker, ZoomControl } from "pigeon-maps"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';


export const ContactPage = () => {
  return (
    <TechnicalLayout>
      <Container maxWidth="lg" sx={{ marginTop: { xs: 8, md: 12 }, mb: 6 }}>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: { xs: 5, md: 8 } }}>
          <Box>
            <Typography variant="h1" sx={{ textAlign: "center", fontSize: { xs: 38, sm: 48, md: 58, lg: 75 }, fontWeight: 600 }}>
              Contáctanos
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ width: "100%", justifyContent: "center" }}>
            <Grid size={{ xs: 12, md: 6, lg: 5 }} sx={{ display: "flex" }}>
              <Box sx={{ width: "100%", height: { xs: '320px', sm: '400px', md: '100%' }, minHeight: { md: "450px" }, border: "1px solid", boxShadow: 4, padding: 2, borderRadius: 3, overflow: "hidden" }}>
                <Map style={{ width: '100%', height: '100%' }} defaultCenter={[41.902782, 12.496366]} defaultZoom={11}>
                  <Marker width={40} anchor={[41.902782, 12.496366]} />
                  <ZoomControl />
                </Map>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", border: "1px solid", boxShadow: 4, padding: 4, borderRadius: 3, textAlign: "center", flexDirection: "column", gap: 4 }}>
                <Typography sx={{ fontWeight: "600", fontSize: "1.1rem" }}>
                  Información de contácto
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, textAlign: "left" }}>
                    <CallIcon color="primary" />
                    <Typography variant="body2">+39 06 369 1429</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, textAlign: "left" }}>
                    <EmailIcon color="primary" />
                    <Typography variant="body2" sx={{ wordBreak: "break-word" }}>TechnicalCJ@gmail.com</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, textAlign: "left" }}>
                    <WhatsAppIcon color="primary" />
                    <Typography variant="body2">+39 06 270 6950</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, textAlign: "left" }}>
                    <TelegramIcon color="primary" />
                    <Typography variant="body2">@TechnicalCJ</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", border: "1px solid", boxShadow: 4, padding: 4, borderRadius: 3, textAlign: "center", flexDirection: "column", gap: 4 }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "1.1rem" }}>
                    Nuestras redes sociales
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, textAlign: "left" }}>
                      <FacebookIcon sx={{color: "#1877F2"}}/>
                      <Typography variant="body2">TechnicalCJ</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, textAlign: "left" }}>
                      <XIcon />
                      <Typography variant="body2" sx={{ wordBreak: "break-word" }}>TechnicalCJOfficial</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, textAlign: "left" }}>
                      <RedditIcon sx={{color: "#FF4500"}}/>
                      <Typography variant="body2" sx={{ wordBreak: "break-word" }}>TechnicalCJService</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, textAlign: "left" }}>
                      <InstagramIcon sx={{color: "#E1306C"}}/>
                      <Typography>@TechnicalCJIG</Typography>
                    </Box>
                  </Box>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </TechnicalLayout>
  )
}