import { CircularProgress, Grid } from "@mui/material"

export const ChekingAuth = () => {
    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh", backgroundColor: "secondary.main", padding: 4 }}>
            <Grid container direction="row" justifyContent="center" sx={{ width: { sm: 450 } }} >
                <CircularProgress color="warning" />
            </Grid>
        </Grid>
    )
}