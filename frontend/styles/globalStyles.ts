import { StyleSheet } from "react-native";
import theme from "./theme";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  /** HEADER */
  header: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.large,
    paddingHorizontal: theme.spacing.medium,
    borderBottomLeftRadius: theme.borderRadius.medium,
    borderBottomRightRadius: theme.borderRadius.medium,
    position: "relative",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: theme.spacing.xxlarge,
    fontFamily: "Inter-Regular",
  },
  headerSubtitle: {
    color: "#ffffff",
    fontSize: theme.fontSizes.xlarge,
    letterSpacing: 1,
    fontFamily: "MontserratAlternates-Bold",
  },
  headerWithSearch: {
    height: 200,
  },

  /** PROFILE CARD */
  profileCard: {
    backgroundColor: "#ffffff",
    padding: theme.spacing.medium,
    borderRadius: 20,
    alignSelf: "center",
    width: "100%",
    marginTop: theme.spacing.large,
  },

  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: theme.spacing.small,
  },

  profileUsername: {
    fontSize: theme.fontSizes.medium,
    fontFamily: "MontserratAlternates-Bold",
  },

  profileCountry: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.muted,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing.medium,
  },

  statsBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
    padding: theme.spacing.small,
    borderRadius: theme.borderRadius.small,
    flex: 1,
    marginHorizontal: 5,
    gap: 15,
    justifyContent: "flex-start",
  },

  /** GAMES LIST */
  sectionTitle: {
    marginTop: theme.spacing.large,
    paddingHorizontal: theme.spacing.medium,
    paddingTop: theme.spacing.medium,
    paddingBottom: theme.spacing.medium,
    fontSize: theme.fontSizes.large,
    color: theme.colors.primary,
  },
  gamesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: theme.spacing.small,
  },
  gameCard: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
    position: "relative",
  },
  gameCardSquare: {
    width: 160,
    height: 160,
    padding: theme.spacing.medium,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing.medium,
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  gameCardRectangle: {
    height: 80,
    marginBottom: 10,
    marginHorizontal: theme.spacing.medium
  },
  gameTitle: {
    fontSize: theme.fontSizes.medium,
    textAlign: "left",
    color: theme.colors.primary
  },
  gameSubtitle: {
    fontSize: 12,
    color: theme.colors.primary,
    marginTop: 5,
  },
  gameIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  gamePlayerCount: {
    fontSize: 12,
    position: "absolute",
    top: 10,
    right: 25,
  },

  /** SEARCH BAR */
  searchWrapper: {
    position: "absolute",
    top: 160,
    paddingHorizontal: theme.spacing.large,
    width: "100%",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.medium,
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.small,
    borderWidth: 2,
    borderColor: theme.colors.highlight,
  },

  searchInput: {
    flex: 1,
    fontSize: theme.fontSizes.medium,
    fontFamily: "Inter-Regular",
    color: theme.colors.text,
    paddingVertical: theme.spacing.small,
  },

});

export default globalStyles;
