import React from 'react';
import { CountProvider } from './CountProvider';
import Grid from './Grid';
import './App.css';
function App() {
    return (
        <CountProvider >
            <Grid />
        </CountProvider>
    );
}

export default App;
