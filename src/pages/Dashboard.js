// @mui
import { Grid, Container, Typography, Card, CardHeader, CardContent, IconButton } from '@mui/material';
import Iconify from '../components/Iconify';
// components
import Page from '../components/Page';
// sections
import AlertPopup from 'src/components/AlertPopup';

// ----------------------------------------------------------------------

export default function Dashboard() {

  return (
    <Page title="Dashboard">
      <Grid container justifyContent="flex-end">
        <AlertPopup />
      </Grid>

      <Container maxWidth="xl">

        <Grid container justifyContent={'space-between'}>

          <Typography variant="h4" sx={{}}>
            My projects
          </Typography>

          <IconButton onClick={() => {console.info('adding project')}}><Iconify icon={'eva:plus-outline'} /></IconButton>


        </Grid>


        <Grid container justifyContent={'center'}>
          <Grid item xs={12} md={6} lg={18}>


            <Card>
              <CardHeader title={'Project1'}></CardHeader>
              <CardContent>Online</CardContent>
            </Card>

            <Card>
              <CardHeader title={'Project2'}></CardHeader>
              <CardContent>Offline</CardContent>
            </Card>

          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
