import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar } from "react-native";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 45px;
  ${StatusBar.currentHeight && `top: ${0}px`};
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyWord] = useState(keyword);

  useEffect(() => {
    setSearchKeyWord(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <SafeArea>
        <Searchbar
          placeholder="Search for a location"
          icon="map"
          value={searchKeyword}
          onSubmitEditing={() => {
            search(searchKeyword);
          }}
          onChangeText={(text) => {
            setSearchKeyWord(text);
          }}
        />
      </SafeArea>
    </SearchContainer>
  );
};
