import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";

function splitTitle(title: string) {
  const words = title.split(" ");

  if (words.length === 1) {
    return ["", words[0].toUpperCase()];
  }

  let firstLine = "";
  let secondLine = "";

  for (let i = 0; i < words.length - 1; i++) {
    if ((firstLine + words[i]).length <= 10) {
      firstLine += (firstLine ? " " : "") + words[i];
    } else {
      break;
    }
  }

  secondLine = words.slice(firstLine.split(" ").length).join(" ").toUpperCase();

  return [firstLine, secondLine];
}

interface GameCardProps {
  title: string;
  color?: string;
  textColor?: string;
  isMultiplayer?: boolean;
  variant?: "square" | "rectangle";
}

export default function GameCard({
  title,
  color,
  textColor = "#000",
  isMultiplayer = true,
  variant = "square",
}: GameCardProps) {
  const router = useRouter();
  const [firstLine, secondLine] = splitTitle(title);


  const handlePress = () => {
    if (title === "EU Quizz") {
      router.push("../euQuizz/category");
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[
      globalStyles.gameCard,
      variant === "rectangle" ? globalStyles.gameCardRectangle : globalStyles.gameCardSquare,
      { backgroundColor: color || "#F5F5FF" }
    ]}>
      {variant === "square" && (
        <>
          <Ionicons name="person-outline" size={14} style={{ position: "absolute", top: 10, right: 10, color: textColor }} />
          <Text style={{ fontSize: 12, position: "absolute", top: 10, right: 25, color: textColor }}> 0/5 </Text>
        </>
      )}

      <View>
        {variant === "square" ? (
          <>
            {firstLine ? (
              <Text style={[
                globalStyles.gameTitle,
                { fontFamily: "Inter-Regular", textTransform: "capitalize", color: textColor }
              ]}>
                {firstLine}
              </Text>
            ) : null}

            <Text style={[
              globalStyles.gameTitle,
              { fontFamily: "MontserratAlternates-Bold", textTransform: "uppercase", color: textColor }
            ]}>
              {secondLine}
            </Text>
          </>
        ) : (
          <Text style={[
            globalStyles.gameTitle,
            { fontFamily: "MontserratAlternates-Regular", textTransform: "uppercase" }
          ]}>
            {title}
          </Text>
        )}
      </View>

      {variant === "rectangle" && (
        <Text style={globalStyles.gameSubtitle}>
          {isMultiplayer ? "MULTIPLAYER" : "SINGLEPLAYER"}
        </Text>
      )}
    </TouchableOpacity>
  );
}
