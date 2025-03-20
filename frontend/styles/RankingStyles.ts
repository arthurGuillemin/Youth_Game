import { StyleSheet } from "react-native";
import theme from "./theme";

const rankingStyles = StyleSheet.create({

    profileIcon: {
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing.medium,
    },
    profileScore: {
        fontSize: 16,
        color: theme.colors.text,
    },

    /** 🔹 Leaderboard */
    leaderboardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing.medium,
    },

    /** 🔹 Classement */
    rankSectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 10,
        marginTop: 10,
    },
    rankItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1c2c5c",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    rankPosition: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
    },
    rankName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffffff",
    },
    rankCountry: {
        fontSize: 14,
        color: "#ffffff",
    },
    rankPoints: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffffff",
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: theme.spacing.xxlarge,
        padding: theme.spacing.medium,
    },
    pickerContainer: {
        backgroundColor: "#4aabff",
        borderRadius: 8,
        paddingHorizontal: 15,
        width: "90%",
        height: 50,
        alignSelf: "center",
        flexDirection: "row",
    },
    pickerText: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "bold",
        marginTop: 13,
    },
    pickerIcon: {
        color: "#ffffff",
        left: 200,
        margin: 13,
    },
});

export default rankingStyles;