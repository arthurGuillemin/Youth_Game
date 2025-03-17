import { View, Text, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

interface ProfileInfoRowProps {
  icon?: string;
  text: string;
  hideIcon?: boolean;
  switchValue?: boolean;
  onSwitchToggle?: () => void;
}

export default function ProfileInfoRow({
  icon,
  text,
  hideIcon = false,
  switchValue,
  onSwitchToggle,
}: ProfileInfoRowProps) {
  return (
    <View style={globalStyles.infoRow}>
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        {!hideIcon && icon && (
          <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={20} color={theme.colors.primary} style={{ marginRight: 10 }} />
        )}
        <Text style={globalStyles.infoText}>{text}</Text>
      </View>

      {switchValue !== undefined && (
        <Switch
          value={switchValue}
          onValueChange={onSwitchToggle}
          trackColor={{ true: theme.colors.accent, false: theme.colors.secondary }}
          thumbColor="#fff"
        />
      )}
    </View>
  );
}
