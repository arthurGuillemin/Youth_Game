import { Text, Image, TouchableOpacity } from "react-native";
import euQuizzStyles from "../../styles/euQuizzStyles";

interface AnswerCardProps {
    text?: string;
    image?: any;
    onPress: () => void;
}

export default function AnswerCard({ text, image, onPress }: AnswerCardProps) {
    return (
        <TouchableOpacity onPress={onPress} style={euQuizzStyles.answerCard}>
            {image ? (
                <Image source={image} style={euQuizzStyles.answerImage} />
            ) : (
                <Text style={euQuizzStyles.answerText}>{text}</Text>
            )}
        </TouchableOpacity>
    );
}
