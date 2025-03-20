import { StyleSheet } from "react-native";
import theme from "./theme";

const euQuizzStyles = StyleSheet.create({

  /* ─────────────── GENERAL ─────────────── */
  nextButton: {
    marginTop: theme.spacing.xxlarge,
    backgroundColor: "#4aabff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    margin: theme.spacing.medium,
    zIndex: 10,
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  /* ─────────────── CATEGORY STYLES ─────────────── */
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
    backgroundColor: "rgba(0, 0, 0, 0.21)",
    justifyContent: "flex-end",
    alignItems: 'flex-start',
    padding: 20,
    borderRadius: 8,
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

  /* ─────────────── DIFFICULTY STYLES ─────────────── */
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

  /* ─────────────── TIMER BAR STYLES ─────────────── */
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

  /* ─────────────── ANSWER CARD STYLES ─────────────── */
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

  /* ─────────────── QUESTION STYLES ─────────────── */
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

  /* ─────────────── PLAYER STYLES ─────────────── */
  peopleContainer: {
    alignSelf: "flex-end",
    marginRight: theme.spacing.large,
    marginTop: theme.spacing.xxlarge,
    flexDirection: "row",
    gap: 10,
  },

  /* ─────────────── RANKING CARD STYLES ─────────────── */
  rankingCard: {
    width: "80%",
    height: 200,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#4aabff",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  alignLeft: {
    alignSelf: "flex-start",
    left: -20
  },
  alignRight: {
    alignSelf: "flex-end",
    right: -20
  },
  textContainer: {
    flex: 1,
  },
  avatarIcon: {
    margin: theme.spacing.medium,
  },

});

export default euQuizzStyles;
