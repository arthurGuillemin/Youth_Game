import { StyleSheet } from "react-native";
import theme from "./theme";

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.medium,
  },

  /** HEADER */
  header: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.large,
    paddingHorizontal: theme.spacing.medium,
    borderBottomLeftRadius: theme.borderRadius.medium,
    borderBottomRightRadius: theme.borderRadius.medium,
    position: "relative",
    marginTop: 100,
    
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: theme.fontSizes.medium,
    textTransform: "uppercase",
  },
  headerSubtitle: {
    color: "#ffffff",
    fontSize: theme.fontSizes.large,
    fontWeight: "bold",
  },
  settingsButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },

  /** PROFILE CARD */
  profileCard: {
    marginTop: -theme.spacing.large,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.medium,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: theme.spacing.small,
  },
  profileUsername: {
    fontSize: theme.fontSizes.medium,
    fontWeight: "bold",
  },
  profileCountry: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.muted,
  },

  /** STATS */
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsBox: {
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
    padding: theme.spacing.small,
    borderRadius: theme.borderRadius.small,
    flex: 1,
    marginHorizontal: 5,
  },

  /** PERSONAL INFO */
  infoContainer: {
    marginTop: theme.spacing.medium,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,
  },
  infoText: {
    marginLeft: theme.spacing.small,
    fontSize: theme.fontSizes.medium,
  },

  /** EDIT PROFILE BUTTON */
  editProfileButton: {
    backgroundColor: theme.colors.accent,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    alignItems: "center",
    marginTop: theme.spacing.large,
  },
  editProfileText: {
    color: "#ffffff",
    fontSize: theme.fontSizes.medium,
    fontWeight: "bold",
  },
});

export default profileStyles;
