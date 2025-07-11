import { Box, Grid, Typography } from "@mui/material"
import { TechnicalLayout } from "../layout/TechnicalLayout"
import { Map, Marker, ZoomControl } from "pigeon-maps"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

export const ContactPage = () => {
  return (
    <TechnicalLayout>
      <Grid container sx={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: { xs: "column", md: "row" } }}>
        <Box>
          <Typography variant="h1" sx={{ textAlign: "center", fontSize: { xs: 40, md: 60, lg: 80 }, fontWeight: 500, marginRight: 10 }}>
            Contáctanos
          </Typography>
        </Box>

        <Grid container sx={{ marginTop: 10, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "center", gap: 8, marginBottom: { xs: 14 }, marginRight: { xs: 10, sm: 0 , md: 8, lg: 0 }  }}>

          <Box sx={{ display: "flex", width: { xs: '230px', sm: '360px', md: '450px', lg: '50vh' }, height: { xs: '290px', sm: '400px', md: '50vh' }, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, marginRight: {sm: 10, md: 0} }}>
            <Map style={{ width: '100%', height: '100%' }} defaultCenter={[41.902782, 12.496366]} defaultZoom={11}>
              <Marker width={40} anchor={[41.902782, 12.496366]} />
              <ZoomControl />
            </Map>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", marginLeft: {sm: 7.5 ,md: 6, lg: 0 }, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, textAlign: "center", width: { xs: '230px', sm: '240px', md: '250px' }, height: { xs: '320px', sm: '400px', md: '50vh' }, marginRight: {md: 8, lg: 0} }}>
            <Box>
              <Typography>
                Información de contácto
              </Typography>

              <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <CallIcon />
                  <Typography>+39 06 369 1429</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <EmailIcon />
                  <Typography>TechnicalCJ@gmail.com</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <WhatsAppIcon />
                  <Typography>+39 06 270 6950</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <TelegramIcon />
                  <Typography>@TechnicalCJ</Typography>
                </Box>
              </Box>

            </Box>

          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center", marginLeft: {sm: 7.5,md: 6, lg: 0 }, marginRight: 10, border: "1px solid secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, width: { xs: '230px', sm: '240px', md: '250px' }, height: { xs: '320px', sm: '400px', md: '50vh' },  marginRight: {md: 8, lg: 0} }}>
            <Box>
              <Typography>
                Información de contácto
              </Typography>

              <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 2 }}>

                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <CallIcon />
                  <Typography>Hola como estás</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <EmailIcon />
                  <Typography>Hola como estás</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <WhatsAppIcon />
                  <Typography>Hola como estás</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <TelegramIcon />
                  <Typography>Hola como estás</Typography>
                </Box>

              </Box>

            </Box>

          </Box>

        </Grid>
      </Grid>
    </TechnicalLayout>
  )
}