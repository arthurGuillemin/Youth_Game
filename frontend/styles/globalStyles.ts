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
    fontSize: theme.fontSizes.large,
    fontWeight: "bold",
    letterSpacing: 1,
    fontFamily: "MontserratAlternates-Regular",
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
    padding: theme.spacing.medium,
    fontSize: theme.fontSizes.medium,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  gamesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: theme.spacing.medium,
    gap: theme.spacing.large,
    paddingHorizontal: theme.spacing.large,
  },
  gameCard: {
    width: 160, // Largeur fixe
    height: 160, // Hauteur fixe
    padding: theme.spacing.medium,
    borderRadius: 15, // Border radius de 15px
    justifyContent: "center", // Centrer le texte
    alignItems: "center",
    marginBottom: theme.spacing.small,
    position: "relative", // Permet d'aligner les icônes et le texte en position absolue
  },
  gameTitle: {
    fontSize: theme.fontSizes.medium,
    fontWeight: "bold",
    color: theme.colors.text,
    textAlign: "center", // Centrer le texte dans la carte
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

});

export default globalStyles;
