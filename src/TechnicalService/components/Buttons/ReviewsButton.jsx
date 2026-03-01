import { Box, Button, Grid } from "@mui/material"
import {scroller} from "react-scroll"

export const ReviewsButton = () => {

    const handleScroll = () => {
        scroller.scrollTo('scrollToSliderSection', {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -90
        });
    }

    return (
        <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Box>
                <Button onClick={handleScroll} variant="contained" sx={{ display: "flex", bgcolor: "primary.main", color: "black", padding: { xs: 1, md: 1.5 }, borderRadius: 5, fontSize: { xs: 14, md: 16 } }}>Ver reseñas</Button>
            </Box>
        </Grid>
    )
}