import React, { useState, useRef, useEffect } from "react";
import "./ScrollTree.css";

const ScrollTree = ({ onGameEnd }) => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameOver, setGameOver] = useState(false);
    const [showFinalScore, setShowFinalScore] = useState(false);
    const [showLeaves, setShowLeaves] = useState(false);
    const treeHeight = useRef(50);
    const lastTouchY = useRef(null);
    const growthSound = useRef(null);
    const isPlaying = useRef(false);

    // 🎵 Activer l’audio uniquement après interaction utilisateur
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
        if (gameOver) return;

        if (event.touches.length > 0) {
            const touchY = event.touches[0].clientY;

            if (lastTouchY.current !== null) {
                const deltaY = lastTouchY.current - touchY;
                if (deltaY > 0) {
                    setScore((prevScore) => prevScore + 5);
                    treeHeight.current += 7;

                    if (growthSound.current && !isPlaying.current) {
                        growthSound.current.play().catch(err => console.warn("Erreur audio:", err));
                        isPlaying.current = true;
                    }

                    if (treeHeight.current > 250) {
                        setShowLeaves(true);
                    }
                }
            }
            lastTouchY.current = touchY;
        }
    };

    // 🛑 Arrêter le son après le scroll
    const handleTouchEnd = () => {
        lastTouchY.current = null;
        if (growthSound.current && isPlaying.current) {
            growthSound.current.pause();
            isPlaying.current = false;
        }
    };

    return (
        <div className="scroll-tree-container">
            {/* Score toujours visible */}
            <div className="big-score">🌳 {Math.floor(score)} px</div>

            {/* Timer affiché en haut */}
            <div className="timer">{timeLeft} sec</div>

            {/* Zone tactile */}
            <div 
                className={`scroll-area ${gameOver ? 'disabled' : ''}`} 
                onTouchMove={handleTouchMove} 
                onTouchEnd={handleTouchEnd}
            >   
                <div className="tree-container">
                    {/* Tronc animé */}
                    <div 
                        className="tree-trunk" 
                        style={{ 
                            height: `${treeHeight.current}px`, 
                            transform: `translateY(${-treeHeight.current * 0.5}px)` 
                        }}
                    />

                    {/* Feuilles animées */}
                    {showLeaves && <div className="tree-leaves show" />}
                </div>
            </div>

            {/* Score final animé */}
            {showFinalScore && (
                <div className="final-score">
                    🎉 Score final : {Math.floor(score)} px 🎉
                </div>
            )}
        </div>
    );
};

export default ScrollTree;
