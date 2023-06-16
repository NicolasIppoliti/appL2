import { Container, Typography, Button } from '@mui/material';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>
                    Welcome to L2 Innadril App
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    L-Coin Calculator, Mission Checklist, Events Timer and more!
                </Typography>
                <div className="flex justify-center mt-5">
                    <Button variant="contained" color="primary">
                        Get Started
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Home;
