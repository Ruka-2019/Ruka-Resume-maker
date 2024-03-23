import React from 'react';
import './App.css';
import Resume from './pages/Resume';
import DownloadPDFButton from "./component/DownloadButton"; // Import the Resume component

function App() {
    return (
        <div className="App">
            <Resume />
        </div>
    );
}

export default App;