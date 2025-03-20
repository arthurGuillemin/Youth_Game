import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as Clipboard from "expo-clipboard";
import globalStyles from "@/styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import theme from "@/styles/theme";

const RewardDetail: React.FC = () => {
  const router = useRouter();
  const { title, image, points, requiredPoints, description } = useLocalSearchParams();
  const [redeemed, setRedeemed] = useState(false);
  const rewardCode = "ABC-XYZ-123";

  const handleRedeem = () => {
    setRedeemed(true);
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(rewardCode);
    Alert.alert("Copied!", "Code copied to clipboard.");
  };

  return (
    <View style={styles.container}>
      <View style={{  position: "relative", width: "100%",}}>
        <TouchableOpacity onPress={() => router.back()} style={{position:'absolute', marginTop:theme.spacing.xxlarge, zIndex: 10,marginLeft: theme.spacing.medium}}>
          <Ionicons name="chevron-back" size={40} color="#111d45" />
        </TouchableOpacity>
        <Image source={image as any} style={styles.image} />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>

      {redeemed ? (
        <View style={styles.fixedBottom}>
          <Text style={styles.codeLabel}>Your Code is</Text>
          <TouchableOpacity style={styles.codeBox} onPress={copyToClipboard}>
            <Text style={styles.codeText}>{rewardCode}</Text>
          </TouchableOpacity>
          <Text style={styles.copyText}>Tap to copy the code</Text>
        </View>
      ) : (
        <TouchableOpacity style={styles.redeemButton} onPress={handleRedeem}>
          <Text style={styles.redeemText}>Redeem for {requiredPoints} points</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db", 
  },
  image: {
    width: "100%", 
    height: 200,
    resizeMode: "cover",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
    padding: 5,
    backgroundColor: "transparent", 
    borderRadius: 5,
  },
  backText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100, 
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  redeemButton: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  redeemText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3498db",
  },
  fixedBottom: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  codeLabel: {
    fontSize: 16,
    color: "white",
    marginBottom: 5,
  },
  codeBox: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#2c3e50",
    alignItems: "center",
  },
  codeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  copyText: {
    fontSize: 12,
    color: "#d0e8ff",
    marginTop: 5,
  },
});

export default RewardDetail;
