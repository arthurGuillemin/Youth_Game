import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Modal } from "react-native";
import { useRouter } from "expo-router";
import RNPickerSelect from "react-native-picker-select"; // Import du sélecteur
import { FontAwesome } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";

export default function FirstTimeScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<any | null>(null);
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);

  const avatars = [
    require("../assets/images/avatar1.png"),
    require("../assets/images/avatar1.png"),
    require("../assets/images/avatar1.png"),
  ];

  // Liste des pays disponibles
  const countries = [
    { label: "Allemagne", value: "Allemagne" },
    { label: "Autriche", value: "Autriche" },
    { label: "Belgique", value: "Belgique" },
    { label: "Bulgarie", value: "Bulgarie" },
    { label: "Chypre", value: "Chypre" },
    { label: "Croatie", value: "Croatie" },
    { label: "Danemark", value: "Danemark" },
    { label: "Espagne", value: "Espagne" },
    { label: "Estonie", value: "Estonie" },
    { label: "Finlande", value: "Finlande" },
    { label: "France", value: "France" },
    { label: "Grèce", value: "Grèce" },
    { label: "Hongrie", value: "Hongrie" },
    { label: "Irlande", value: "Irlande" },
    { label: "Italie", value: "Italie" },
    { label: "Lituanie", value: "Lituanie" },
    { label: "Lettonie", value: "Lettonie" },
    { label: "Luxembourg", value: "Luxembourg" },
    { label: "Malte", value: "Malte" },
    { label: "Pays-Bas", value: "Pays-Bas" },
    { label: "Pologne", value: "Pologne" },
    { label: "Portugal", value: "Portugal" },
    { label: "République tchèque", value: "République tchèque" },
    { label: "Roumanie", value: "Roumanie" },
    { label: "Royaume-Uni", value: "Royaume-Uni" },
    { label: "Slovaquie", value: "Slovaquie" },
    { label: "Slovénie", value: "Slovénie" },
    { label: "Suède", value: "Suède" },
  ];

  const handleAvatarSelection = (avatar: any) => {
    setSelectedAvatar(avatar);
    setAvatarModalVisible(false); // Ferme la modal après la sélection
  };

  const handleSubmit = () => {
    router.replace("/(tabs)"); // Redirection vers l'accueil après validation
  };

  return (
    <View style={globalStyles.fullScreenContainer}>
      <Text style={globalStyles.screenTitle}>Bienvenue ! 🎮</Text>
      <Text style={globalStyles.screenSubtitle}>Personnalise ton profil</Text>

      {/* Sélection de l'avatar + champ pseudo */}
      <View style={globalStyles.inputContainer}>
        <TouchableOpacity style={globalStyles.avatarSelector} onPress={() => setAvatarModalVisible(true)}>
          {selectedAvatar ? (
            <Image source={selectedAvatar} style={globalStyles.avatarInsideSelector} />
          ) : (
            <FontAwesome name="user-circle" size={40} color="#ccc" />
          )}
        </TouchableOpacity>

        <TextInput
          style={globalStyles.input}
          placeholder="Choisis ton pseudo"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Sélection du pays */}
      <View style={globalStyles.pickerContainer}>
  <RNPickerSelect
    onValueChange={(value) => setSelectedCountry(value)}
    items={countries}
    placeholder={{ label: "Sélectionne ton pays", value: undefined }}
    Icon={() => {
      return <FontAwesome name="chevron-down" size={14} color="#555" />;
    }}
  />
</View>


      {/* Bouton Valider */}
      <TouchableOpacity onPress={handleSubmit} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Valider</Text>
      </TouchableOpacity>

      {/* Modal pour sélectionner l'avatar */}
      <Modal visible={avatarModalVisible} animationType="slide" transparent>
        <View style={globalStyles.modalContainer}>
          <View style={globalStyles.modalContent}>
            <Text style={globalStyles.modalTitle}>Choisissez un avatar</Text>
            {avatars.map((avatar, index) => (
              <TouchableOpacity key={index} onPress={() => handleAvatarSelection(avatar)}>
                <Image source={avatar} style={globalStyles.avatarModal} />
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={globalStyles.closeModalButton} onPress={() => setAvatarModalVisible(false)}>
              <Text style={globalStyles.buttonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
