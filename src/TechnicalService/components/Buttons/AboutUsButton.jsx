import { Box, Button } from "@mui/material"
import { Link as LinkRRD } from "react-router-dom";

export const AboutUsButton = () => {

    return (

        <Box sx={{ textAlign: "center", alignContent: "center" }}>
            <Button component={LinkRRD} to="/About" variant="contained" sx={{ bgcolor: "primary.main", color: "black", padding: { xs: 1, md: 1.5 }, borderRadius: 5, fontSize: { xs: 14, md: 16 } }}>
                Sobre Nosotros
            </Button>
        </Box>
    )
}