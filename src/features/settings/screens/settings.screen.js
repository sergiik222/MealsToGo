import React, { useContext, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer-component";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);
  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };
  useFocusEffect(
    React.useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );
  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo && (
              <Avatar.Icon
                size={180}
                icon="human"
                backgroundColor={colors.brand.primary}
              />
            )}
            {photo && (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor="#2182BD"
              />
            )}
            <Spacer position="top" size="large">
              <Text variant="label">{user.email}</Text>
            </Spacer>
          </TouchableOpacity>
        </AvatarContainer>

        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.error} icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <Spacer position="top" size="small">
            <SettingsItem
              title="Payment"
              left={(props) => (
                <List.Icon {...props} color={colors.ui.secondary} icon="cart" />
              )}
              onPress={() => null}
            />
          </Spacer>

          <Spacer position="top" size="small">
            <SettingsItem
              title="Past Orders"
              left={(props) => (
                <List.Icon
                  {...props}
                  color={colors.ui.secondary}
                  icon="history"
                />
              )}
              onPress={() => null}
            />
          </Spacer>

          <Spacer position="top" size="small">
            <SettingsItem
              title="Logout"
              left={(props) => (
                <List.Icon {...props} color={colors.ui.secondary} icon="door" />
              )}
              onPress={onLogout}
            />
          </Spacer>
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
