import { Box, Container } from "@mui/material";
import { TechnicalLayout } from "../layout/TechnicalLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContactForm } from "../components/ContactForm";
import { Element } from "react-scroll";
import { ReviewSlider } from "../components/ReviewSlider";
import { StatsSections } from "../sections/StatsSection";
import { ServicesSection } from "../sections/ServicesSection";
import { AboutSection } from "../sections/AboutSection";
import { FooterSection } from "../sections/FooterSection";
import { HeroSection } from "../sections/HeroSection";

export const HomePage = () => {


    return (
        <TechnicalLayout>
            <Box sx={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "stretch" }}>

                <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 }, flexGrow: 1 }}>

                    <HeroSection/>

                    <StatsSections/>

                    <Element name="myScrollToElement">
                        <ServicesSection/>
                    </Element>

                    <AboutSection />

                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mx: "auto"}}>
                        <ContactForm />
                    </Box>

                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mx: "auto"}}> 
                        <Element name="scrollToSliderSection" style={{width: "100%"}}>
                            <ReviewSlider />
                        </Element>
                    </Box>
                </Container>

                <FooterSection/>
            </Box>
        </TechnicalLayout >
    )
}