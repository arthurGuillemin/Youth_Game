import React, { useState, useRef, useEffect } from 'react';
import './ScrollTree.css';

const ScrollTree = ({ onGameEnd }) => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameOver, setGameOver] = useState(false);
    const [showFinalScore, setShowFinalScore] = useState(false);
    const [showLeaves, setShowLeaves] = useState(false);
    const treeHeight = useRef(50);
    const lastTouchY = useRef(null);
    const growthSound = useRef(null);
    const isPlaying = useRef(false); // Gère l’état du son

    // 📌 Activer l’audio uniquement après interaction utilisateur
    useEffect(() => {
        const enableAudio = () => {
            if (!growthSound.current) {
                growthSound.current = new Audio('/sounds/growth.wav');
                growthSound.current.loop = true;
            }
        };

        document.addEventListener("touchstart", enableAudio, { once: true });

        return () => {
            document.removeEventListener("touchstart", enableAudio);
        };
    }, []);

    // ⏳ Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    setGameOver(true);
                    setShowFinalScore(true);
                    onGameEnd(score);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // 📌 Gestion du scroll tactile
    const handleTouchMove = (event) => {
        if (gameOver) return; // Bloque le scroll après la fin du temps

        if (event.touches.length > 0) {
            const touchY = event.touches[0].clientY;

            if (lastTouchY.current !== null) {
                const deltaY = lastTouchY.current - touchY;
                if (deltaY > 0) {
                    setScore((prevScore) => prevScore + 5);
                    treeHeight.current += 7;

                    // 🎵 Démarrer le son si ce n'est pas déjà en lecture
                    if (growthSound.current && !isPlaying.current) {
                        growthSound.current.play().catch(err => console.warn("Erreur audio:", err));
                        isPlaying.current = true;
                    }

                    // Afficher les feuilles quand l'arbre est assez grand
                    if (treeHeight.current > 250) {
                        setShowLeaves(true);
                    }
                }
            }
            lastTouchY.current = touchY;
        }
    };

    // 🛑 Arrêter le son lorsque l'utilisateur arrête de scroller
    const handleTouchEnd = () => {
        lastTouchY.current = null;

        // 🎵 Stopper le son proprement
        if (growthSound.current && isPlaying.current) {
            growthSound.current.pause();
            isPlaying.current = false;
        }
    };

    return (
        <div className="scroll-tree-container">
            {/* Score toujours visible */}
            <div className="big-score">🌳 {Math.floor(score)} px</div>

            {/* Zone tactile */}
            <div 
                className={`scroll-area ${gameOver ? 'disabled' : ''}`} 
                onTouchMove={handleTouchMove} 
                onTouchEnd={handleTouchEnd}
            >   
                <div className="tree-container">
                    {/* Tronc qui pousse vers le haut */}
                    <div 
                        className="tree-trunk" 
                        style={{ height: `${treeHeight.current}px`, transform: `translateY(${-treeHeight.current * 0.5}px)` }}
                    />

                    {/* Feuilles qui apparaissent à la fin */}
                    {showLeaves && <div className="tree-leaves" />}
                </div>
            </div>

            {/* Animation du score final */}
            {showFinalScore && (
                <div className="final-score">
                    🎉 Score final : {Math.floor(score)} px 🎉
                </div>
            )}
        </div>
    );
};

export default ScrollTree;
