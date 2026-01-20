import { Box, Button } from "@mui/material"
import { Link as LinkRRD } from "react-router-dom";

export const AllServiceButton = () => {
    return (
        <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button component={LinkRRD} to="/Service" variant="contained" size="large" sx={{ display: "flex", bgcolor: "primary.main", color: "black", padding: { xs: 1, md: 1.5 }, borderRadius: 5, fontSize: { xs: 14, md: 16 } }}>
                Conoce todos nuestros servicios
            </Button>
        </Box>
    )
}