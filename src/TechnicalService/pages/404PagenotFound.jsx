import { Box, Grid, Typography } from "@mui/material"
import NotFoundPage from "../../../public/404.png";
import { AllServiceButton } from "../components/Buttons/AllServiceButton";

export const PageNotFound = () => {
    return (
        <Grid container sx={{ dispaly: "flex", backgroundColor: "#fbfbfb", justifyContent: "center",alignItems: "center",alignContent: "center", minHeight: "100vh", flexDirection: "column" }}>
            <Box>
                <Typography variant="h1" sx={{ textAlign: "center", fontSize: { xs: 40, sm: 60 ,lg: 80 }, fontWeight: 500 }}>Page not Found</Typography>
            </Box>

            <Box component="img" src={NotFoundPage} alt="notFoundPage" sx={{ width: {xs: "50%", sm: "45%" ,md: "38%"}}} >
            </Box>
            <AllServiceButton />
        </Grid>
    )
}                                                                                                                                                                       