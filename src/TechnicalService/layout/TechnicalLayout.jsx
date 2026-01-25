import { Box } from "@mui/material"
import { Navbar } from "../components/navbar";
import { ScrollTop } from "../components/ScrollTop";

export const TechnicalLayout = ({children}) => {

    return(
        <Box sx={{display: 'flex', backgroundColor: "secondary.main"}}>

            <ScrollTop/>
            
            <Navbar/>

            <Box component='main' sx={{flexGrow: 1}}>
                {children}
            </Box>
        </Box>
    )

}