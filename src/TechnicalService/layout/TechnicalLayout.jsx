import { Box } from "@mui/material"
import { Navbar } from "../components/navbar";
import { ScrollTop } from "../components/ScrollTop";

export const TechnicalLayout = ({children}) => {

    return(
        <Box className="animate__animated animate__fadeIn animate__faster" sx={{display: 'flex', backgroundColor: "secondary.main", minHeight: "100dvh", width: "100%", overflow: "hidden"}}>

            <ScrollTop/>
            
            <Navbar/>

            <Box component='main' sx={{flexGrow: 1, width:"100%"}}>
                {children}
            </Box>
        </Box>
    )

}