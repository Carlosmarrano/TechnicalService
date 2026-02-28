import { Box, Fade, Grid, IconButton, Typography } from "@mui/material"
import { data } from "../helpers/DataForReviews"
import { useState } from "react"
import { ArrowBackIosNew } from "@mui/icons-material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ReviewSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [checked, setChecked] = useState(true);

    const itemsShow = 3;
    const totalItems = data.length;

    const handleStep = (direction) => {
        setChecked(false);

        setTimeout(() => {
            if (direction === "next") {
                setCurrentIndex(prev => (prev + 1) % totalItems);
            } else {
                setCurrentIndex((prev => (prev - 1 + totalItems) % totalItems));
            }
            setChecked(true);
        }, 300);
    };

    const visibleItems = [];
    for (let i = 0; i < itemsShow; i++) {
        visibleItems.push(data[(currentIndex + i) % totalItems]);
    }

    return (
        <Box sx={{ marginTop: 20, display: "flex", alignItems: "center", maxWidth: "1200px",justifyContent: "center", textAlign: "center",  gap: { xs: 0, sm: 2 }, marginRight: { xs: 10, md: 8 }, marginLeft: {xs: 0,lg: 10} }}>

            <IconButton onClick={() => handleStep("prev")} disabled={!checked} sx={{zIndex: 2}} >
                <ArrowBackIosNew/>
            </IconButton>

            <Box sx={{flexGrow: 1, display: "flex" ,px: {xs: 2, md: 4}}}>
                <Fade in={checked} timeout={500}>
                    <Grid container spacing={2} sx={{justifyContent: "center", width: "100%"}}>
                        {visibleItems.map((d, index) => (
                            <Grid key={`${currentIndex}-${index}`} size={{xs: 12, sm: 6, md: 4}} sx={{display: {
                                xs: index === 0 ? "flex" : "none", 
                                sm: index < 2 ? "flex" : "none", 
                                md: "flex"
                            },
                            justifyContent: "center", alignItems: "center"}}>
                                <Box sx={{border: "1px solid", borderColor: "secondary.main", boxShadow: 4, padding: 4, borderRadius: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, width: "100%", maxWidth: "350px", height: "100%" , backgroundColor: "background.paper", overflow: "hidden"}}>
                                    <Box component="img" src={d.img} sx={{width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }} alt={d.name} />
                                    <Typography variant="h6" component="div">{d.name}</Typography>
                                    <Typography variant="body1">{d.review}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Fade>
            </Box>

            <IconButton onClick={() => handleStep("next")} disabled={!checked} sx={{zIndex: 2}}>
                <ArrowForwardIosIcon/>
            </IconButton>

        </Box>
    )
}