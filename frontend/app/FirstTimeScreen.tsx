import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Modal, Alert, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import RNPickerSelect from "react-native-picker-select";
import { FontAwesome } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import { createUser } from "../services/userService";

export default function FirstTimeScreen() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [avatarModalVisible, setAvatarModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const avatars = [
        require("../assets/images/avatar1.png"),
        require("../assets/images/avatar1.png"),
        require("../assets/images/avatar1.png"),
    ];

    const countries = [
        { label: "Allemagne", value: "Allemagne" },
        { label: "France", value: "France" },
        { label: "Belgique", value: "Belgique" },
        { label: "Espagne", value: "Espagne" },
        { label: "Italie", value: "Italie" },
        { label: "Royaume-Uni", value: "Royaume-Uni" },
        { label: "Portugal", value: "Portugal" },
        { label: "Suède", value: "Suède" },
    ];

    const handleAvatarSelection = (avatar: any) => {
        setSelectedAvatar(avatar);
        setAvatarModalVisible(false);
    };

    const handleSubmit = async () => {
        if (!username || !selectedCountry) {
            Alert.alert("Erreur", "Merci de compléter tous les champs.");
            return;
        }

        setLoading(true);

        const userData = {
            username,
            country: selectedCountry,
        };

        console.log("Données envoyées :", userData);

        try {
            const response = await createUser(userData);

            if (response) {
                Alert.alert("Succès", "Votre compte a été créé !", [
                    { text: "OK", onPress: () => router.replace("/(tabs)") }
                ]);
            } else {
                Alert.alert("Erreur", "Une erreur est survenue lors de l'inscription.");
            }
        } catch (error) {
            console.error("Erreur lors de la création de l'utilisateur :", error);
            Alert.alert("Erreur", "Une erreur est survenue. Veuillez réessayer.");
        }

        setLoading(false);
    };

    return (
        <View style={globalStyles.fullScreenContainer}>
            <Text style={globalStyles.screenTitle}>Bienvenue ! 🎮</Text>
            <Text style={globalStyles.screenSubtitle}>Personnalise ton profil</Text>

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

            <View style={globalStyles.pickerContainer}>
                <RNPickerSelect
                    onValueChange={(value) => setSelectedCountry(value)}
                    items={countries}
                    placeholder={{ label: "Sélectionne ton pays", value: undefined }}
                    value={selectedCountry || undefined}
                    useNativeAndroidPickerStyle={false}
                    Icon={() => {
                        return <FontAwesome name="chevron-down" size={14} color="#555" />;
                    }}
                />
            </View>

            <TouchableOpacity onPress={handleSubmit} style={globalStyles.button} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={globalStyles.buttonText}>Valider</Text>}
            </TouchableOpacity>

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
