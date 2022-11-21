import { Platform } from "react-native";

export const liveHost =
  "https://us-central1-mealstogo-83c0f.cloudfunctions.net";
export const localHost =
  "https://us-central1-mealstogo-83c0f.cloudfunctions.net";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isAndroid = Platform.OS === "android";
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
export const isMock = false;
