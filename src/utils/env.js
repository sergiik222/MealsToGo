import { Platform } from "react-native";

export const liveHost =
  "https://us-central1-mealstogo-83c0f.cloudfunctions.net";
export const localHost =
  "http://ecbe-2a02-8388-a87-100-cdc9-6ad6-7f10-9be3.ngrok.io/main/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isAndroid = Platform.OS === "android";
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
export const isMock = false;
