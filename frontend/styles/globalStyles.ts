import { StyleSheet } from "react-native";
import theme from "./theme";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  Title: {
    fontSize: 35,
    color: theme.colors.text,
    fontFamily: theme.fonts.demiBold,
  },
  Subtitle: {
    fontSize: theme.fontSizes.xlarge,
    marginBottom: theme.spacing.small,
    marginTop: theme.spacing.small,
    marginLeft: theme.spacing.medium,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.large
  },

  /** Games List */
  sectionTitle: {
    marginTop: theme.spacing.xxlarge,
    paddingTop: theme.spacing.medium,
    paddingBottom: theme.spacing.large,
    fontSize: theme.fontSizes.xlarge,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  gameCardSquare: {
    flex: 1,
    height: 100,
    width: 200,
    margin: 10,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#4aabff",
  },
  gameCardRectangle: {
    height: 200,
    marginHorizontal: theme.spacing.medium,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 10,
    marginTop: theme.spacing.large,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: theme.spacing.small,
  },

  gameImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  /** Simple Card */
  simpleCard: {
    backgroundColor: "#F5F6FF",
    padding: 15,
    borderRadius: 15,
    marginBottom: theme.spacing.small,
    marginHorizontal: 20,

  },
  simpleCardGame: {
    backgroundColor: theme.colors.muted,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#010773",
  },
  cardTitleGame: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#010773",
  },

  cardSubtitle: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
  },

  cardSubtitleGame: {
    fontSize: 12,
    color: "#010773",
  },

  /** Profil Info */
  profileButton: {
    position: "absolute",
    top: 90,
    right: 20,
    backgroundColor: theme.colors.background,
    padding: 10,
    zIndex: 10,
  },
  profileIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 500,
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.text,
    borderWidth: 1,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: theme.spacing.medium,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.muted,
    padding: theme.spacing.medium,
  },
  infoText: {
    fontSize: theme.fontSizes.medium,
    marginLeft: theme.spacing.small,
    color: theme.colors.text,
  },

  /** Connexion */
  fullScreenContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#010773",
    marginTop: 50,
  },
  screenSubtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: "#666",
  },

  /** Conteneur de l'input avec avatar */
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 15,
  },
  avatarSelector: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarInsideSelector: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  input: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
  },

  /** Bouton principal */
  button: {
    backgroundColor: "#010773",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  /** Modal de sélection d'avatar */
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#010773",
  },
  avatarModal: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 30,
  },
  closeModalButton: {
    marginTop: 20,
    backgroundColor: "#010773",
    padding: 10,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  /** Sélecteur de pays */
  pickerContainer: {
    backgroundColor: "#4aabff",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  pickerText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },

  pickerIcon: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -8 }],
    color: "#ffffff",
  },
  headerWithGoBack: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  goBackButton: {
    marginTop: theme.spacing.medium,
  },

});

export default globalStyles;
