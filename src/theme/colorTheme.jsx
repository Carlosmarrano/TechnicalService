import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#e8dfdf'
        },
        secondary: {
            main: '#fbfbfb'
        },
        textColorprimary: {
            main: '#4f3c3a'
        },
        error: {
            main: red.A400
        }
    }
})