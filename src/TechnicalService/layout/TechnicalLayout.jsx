import { Box } from "@mui/material"
import { Navbar } from "../components/navbar";

export const TechnicalLayout = ({children}) => {

    return(
        <Box sx={{display: 'flex', backgroundColor: "secondary.main"}}>
            
            <Navbar/>

            <Box component='main' sx={{flexGrow: 1, p: 3}}>
                {children}
            </Box>
        </Box>
    )

}