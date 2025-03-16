import { StyleSheet } from "react-native";
import theme from "./theme";

const settingStyles = StyleSheet.create({
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

  /** SECTIONS */
  sectionTitle: {
    marginTop: theme.spacing.large,
    fontSize: theme.fontSizes.medium,
    fontWeight: "bold",
    color: theme.colors.primary,
  },

  /** SETTINGS ITEMS */
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.spacing.medium,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,
  },
  settingText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
  },

  /** LOGOUT */
  logoutRow: {
    marginTop: theme.spacing.large,
    paddingVertical: theme.spacing.medium,
  },
  logoutText: {
    fontSize: theme.fontSizes.medium,
    fontWeight: "bold",
    color: "red",
  },
});

export default settingStyles;
