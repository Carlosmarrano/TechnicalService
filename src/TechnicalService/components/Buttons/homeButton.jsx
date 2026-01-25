import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom";

export const HomeButton = () => {
    return (
        <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button component={Link} to="/" variant="contained" size="large" sx={{ display: "flex", bgcolor: "primary.main", color: "black", padding: { xs: 1, md: 1.5 }, borderRadius: 5, fontSize: { xs: 14, md: 16 } }}>
                Volver al Inicio
            </Button>
        </Box>
    )
}