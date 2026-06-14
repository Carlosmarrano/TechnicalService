import { Box, Container, Divider, Grid, Link, Stack, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

const FOOTER_LINKS = [
    {
        title: "For Business",
        links: [
            { label: "Employer", href: "#" },
            { label: "Health Plan", href: "#" },
            { label: "Individual", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Resource Center", href: "#" },
            { label: "Testimonials", href: "#" },
            { label: "STV", href: "#" },
        ],
    },
    {
        title: "Partners",
        links: [
            { label: "Swing Tech", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About", herf: "#" },
            { label: "Press", herf: "#" },
            { label: "Career", herf: "#" },
            { label: "Contact", herf: "#" },
        ],
    },

];

const LEGAL_LINKS = [
    { label: "Term & Conditions", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Security", href: "#" },
    { label: "Cookie Declaration", href: "#" },
]

export const FooterSection = () => {
    return (
        <Box component="footer" sx={{ bgcolor: "#f9f9f9", py: 6, borderTop: "1px solid #e0e0e0", mt: "auto" }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{ justifyContent: "space-between", mb: 6 }} >

                    {FOOTER_LINKS.map((column, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 2.4 }}>
                            <Stack spacing={1.5}>
                                <Typography variant="h6" sx={{ color: "black", fontWeight: 600 }}>{column.title}</Typography>
                                {column.links.map((link, linkIndex) => (
                                    <Link key={linkIndex} href={link.href} underline="hover" sx={{ color: "black" }}>{link.label}</Link>
                                ))}
                            </Stack>
                        </Grid>
                    ))}

                    <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                        <Stack spacing={2}>
                            <Typography variant="h6" sx={{ color: "black" }}>
                                Coming soon on
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Link href="#" target="_blank" rel="noopener" aria-label="Facebook" sx={{ background: "white", color: "#4267B2", borderRadius: 3 }}>
                                    <FacebookIcon />
                                </Link>
                                <Link href="#" target="_blank" rel="noopener" aria-label="Instagram" sx={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", color: "white", borderRadius: 3 }}>
                                    <InstagramIcon />
                                </Link>
                                <Link href="#" target="_blank" rel="noopener" aria-label="Twitter (X)" sx={{ color: "black" }}>
                                    <XIcon />
                                </Link>
                                <Link href="#" target="_blank" rel="noopener" aria-label="YouTube" sx={{ color: "#FF1A47" }}>
                                    <YouTubeIcon />
                                </Link>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ borderColor: "#ccc", marginBottom: 4 }} />

                <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", lg: "center" }, gap: 3, marginBottom: 4 }}>
                    <Typography sx={{ color: "black" }}>© {new Date().getFullYear()} Todos los Derechos reservados</Typography>

                    <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap", justifyContent: { xs: "flex-start", lg: "flex-end" } }} >
                        {LEGAL_LINKS.map((link, index) => (
                            <Link key={index} href={link.href} underline="hover" sx={{color: "black"}}>{link.label}</Link>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}