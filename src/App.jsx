import './App.css';
import { useState } from 'react';
import { Container, AppBar, Toolbar, Button } from '@mui/material';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import MissionChecklist from './pages/MissionChecklist';
import EventsTimer from './pages/EventsTimer';

function App() {

  const [activeComponent, setActiveComponent] = useState('home');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'calculator':
        return <Calculator />;
      case 'mission-checklist':
        return <MissionChecklist />;
      case 'events-timer':
        return <EventsTimer />;
      default:
        return <Home />;
    }
  };

  return (
    <Container maxWidth={false}>
      <AppBar position="static" color="transparent" className="shadow-none">
        <Toolbar>
          <Button color="inherit" onClick={() => handleButtonClick('home')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => handleButtonClick('calculator')}>
            Calculator
          </Button>
          <Button color="inherit" onClick={() => handleButtonClick('mission-checklist')}>
            Mission Checklist
          </Button>
          <Button color="inherit" onClick={() => handleButtonClick('events-timer')}>
            Events Timer
          </Button>
        </Toolbar>
      </AppBar>
      {renderComponent()}
    </Container>
  );
}

export default App
