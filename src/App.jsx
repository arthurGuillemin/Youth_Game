import React from 'react';
import ScrollTree from './components/MiniGames/ScrollTree/ScrollTree';

const App = () => {
    const handleGameEnd = (finalScore) => {
        alert(`Partie terminée ! Score final : ${finalScore}px`);
    };

    return (
        <div>
            <ScrollTree onGameEnd={handleGameEnd} />
        </div>
    );
};

export default App;
