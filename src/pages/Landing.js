// @mui
import { Grid, Container, Typography, Button } from '@mui/material';
// components
import Page from '../components/Page';
import AlertPopup from 'src/components/AlertPopup';

// ----------------------------------------------------------------------

export default function Landing() {

    return (
        <Page title="Landing">
            <Grid container justifyContent="flex-end">
                <AlertPopup />
            </Grid>

            <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'} spacing={1}>
                <Grid item>
                    <Container maxWidth="xl">

                        <Typography variant="h4" sx={{}}>
                            Welcome to kthcloud deployment
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 5, opacity: 0.5, fontWeight: "normal" }}>
                            Start deploying your projects today
                        </Typography>
                    </Container>
                </Grid>
                <Grid item>

                    <Button>Log in</Button>

                </Grid>
            </Grid>
        </Page>
    );
}
