import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { Text } from "../typography/text.component";
import WebView from "react-native-webview";

const CompactItem = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const compactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? compactWebView : CompactImage;
  return (
    <CompactItem>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </CompactItem>
  );
};
