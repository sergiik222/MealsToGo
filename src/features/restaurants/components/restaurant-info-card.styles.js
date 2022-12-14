import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  font-size: ${(props) => props.theme.fontSizes.caption}
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantCard = styled(Card)`
  display: flex;
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 95%;
  align-self: center;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]}
  padding-bottom: ${(props) => props.theme.space[2]}
`;
export const Rating = styled.View`
  flex-direction: row;
`;
export const SectionEnd = styled.View`
  flex-direction: row;
`;
