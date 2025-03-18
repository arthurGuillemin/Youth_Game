import { StyleSheet } from "react-native";
import theme from "./theme";

const euQuizzStyles = StyleSheet.create({
    //category
    categoryCard: {
        borderRadius: theme.borderRadius.medium,
        overflow: "hidden",
        marginBottom: theme.spacing.large,
        marginHorizontal: theme.spacing.medium,
    },
    categoryImage: {
        width: "100%",
        height: 120,
    },
    categoryImageOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        justifyContent: "flex-end",
        alignItems: 'flex-start',
        padding: 20,
    },
    categoryTitle: {
        fontSize: theme.fontSizes.medium,
        fontWeight: "bold",
        color: "#FFF",
    },
    categoryOverlay: {
        width: "100%",
        padding: theme.spacing.small,
    },
    playButton: {
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: theme.borderRadius.small,
        paddingVertical: theme.spacing.small,
        paddingHorizontal: theme.spacing.large,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    playButtonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: theme.fontSizes.medium,
    },

    // Difficulty
    selectedCategoryCard: {
        borderRadius: theme.borderRadius.medium,
        overflow: "hidden",
        marginBottom: theme.spacing.large,
    },
    selectedCategoryImage: {
        width: "100%",
        height: 120,
    },
    selectedCategoryOverlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: theme.spacing.small,
    },
    selectedCategoryTitle: {
        fontSize: theme.fontSizes.medium,
        fontWeight: "bold",
        color: "#FFF",
    },
    difficultyButton: {
        borderRadius: theme.borderRadius.small,
        paddingVertical: theme.spacing.medium,
        alignItems: "center",
        marginBottom: theme.spacing.medium,
        marginHorizontal: theme.spacing.medium,
    },
    difficultyText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: theme.fontSizes.medium,
    },
    randomButton: {
        borderWidth: 2,
        borderColor: "#FFF",
        borderRadius: theme.borderRadius.medium,
        paddingVertical: theme.spacing.medium,
        alignItems: "center",
        marginBottom: theme.spacing.large,
        marginHorizontal: theme.spacing.medium,
    },
    randomButtonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: theme.fontSizes.medium,
    },

    // TimerBar
    timerBar: {
        marginTop: theme.spacing.xxlarge,
        marginHorizontal: theme.spacing.medium
    },
    timerHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    timerScore: {
        fontSize: theme.fontSizes.medium,
        fontWeight: "bold",
        color: "#482ab5",
    },
    timerTime: {
        fontSize: theme.fontSizes.medium,
        color: "#482ab5",
        marginBottom: theme.spacing.small,
    },
    progressBar: {
        height: 6,
        borderRadius: 25,
        overflow: "hidden",
        marginBottom: theme.spacing.medium,
        borderWidth: 1,
        borderColor: "#482ab5",
        minHeight: 15,
    },
    progressFill: {
        height: "100%",
        backgroundColor: "#482ab5",
    },

    // AnswerCard
    answerCard: {
        height: 130,
        borderRadius: theme.borderRadius.small,
        backgroundColor: "#EEE",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginHorizontal: theme.spacing.medium,
    },
    answerImage: {
        width: "100%",
        height: 130,
        borderRadius: theme.borderRadius.small,
    },
    answerText: {
        fontSize: theme.fontSizes.large,
        fontWeight: "bold",
        color: "#000",
    },
    questionContainer: {
        alignItems: "center",
        marginVertical: theme.spacing.large,
        position: "relative",
      },
      flag: {
        fontSize: 70,
        marginBottom: theme.spacing.small,
        marginTop: theme.spacing.large,
      },
      questionText: {
        fontSize: theme.fontSizes.xlarge,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000",
        marginTop: theme.spacing.medium,
      },
      peopleContainer: {
        alignSelf: "flex-end",
        marginRight: theme.spacing.large,
        marginTop: theme.spacing.xxlarge,
        flexDirection: "row",
        gap: 10,
      },
});

export default euQuizzStyles;
