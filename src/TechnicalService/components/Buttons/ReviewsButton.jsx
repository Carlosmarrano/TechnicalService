import { Box, Button, Grid } from "@mui/material"


export const ReviewsButton = () => {

    return (
        <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Box>
                <Button variant="contained" sx={{ display: "flex", bgcolor: "primary.main", color: "black", padding: { xs: 1, md: 1.5 }, borderRadius: 5, fontSize: { xs: 14, md: 16 } }}>Ver reseñas</Button>
            </Box>
        </Grid>
    )
}