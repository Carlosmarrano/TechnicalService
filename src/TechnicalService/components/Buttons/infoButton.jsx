import {Box, Button } from "@mui/material"
import {scroller} from "react-scroll"

export const InfoButton = () => {

        const handleScroll = () => {
            scroller.scrollTo('myScrollToElement', {
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: -90
            });
        }

    return (
        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, marginTop: { lg: 18, md: 15, xs: 8 }, marginBottom: { xs: 8 } }}>
            <Button onClick={handleScroll} variant="contained" sx={{ bgcolor: "primary.main", color: "black", padding: { xs: 1, md: 1.5 }, borderRadius: 5, fontSize: { xs: 14, md: 16 } }}>
                Más info
            </Button>
        </Box>
    )
}