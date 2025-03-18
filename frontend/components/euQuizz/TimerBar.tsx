import { useEffect, useState } from "react";
import { View, Text, Animated } from "react-native";
import euQuizzStyles from "../../styles/euQuizzStyles";

interface TimerBarProps {
    duration: number;
    onTimeUp: () => void;
}

export default function TimerBar({ duration, onTimeUp }: TimerBarProps) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const progress = new Animated.Value(1);

    useEffect(() => {
        setTimeLeft(duration);
        Animated.timing(progress, {
            toValue: 0,
            duration: duration * 1000,
            useNativeDriver: false,
        }).start();

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev === 1) {
                    clearInterval(interval);
                    onTimeUp();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [duration]);

    return (
        <View style={euQuizzStyles.timerBar}>
            <View style={euQuizzStyles.timerHeader}>
                <Text style={euQuizzStyles.timerScore}>Food - 100pt</Text>
                <Text style={euQuizzStyles.timerTime}>{timeLeft} sec</Text>
            </View>

            <View style={euQuizzStyles.progressBar}>
                <Animated.View style={[euQuizzStyles.progressFill, {
                    width: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0%", "100%"],
                    })
                }]} />
            </View>
        </View>
    );
}
