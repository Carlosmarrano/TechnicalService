import { Box, Grid, Typography } from "@mui/material"
import { AnimatedNumber } from "../components/incrementNumbers"
import { ReviewsButton } from "../components/Buttons/ReviewsButton"


export const StatsSections = () => {
    return (
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
    )
}