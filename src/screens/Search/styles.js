import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchInput = styled.TextInput`
  border-radius: 5px;
  border-width: 1px;
  border-color: #d6d6d6;
  padding: 0 10px;

  height: 45px;
  width: ${(Dimensions.get('screen').width)* 0.6}px;
`;

export const SearchButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 20px;
  
  height: 45px;
  width: 70px;

  background-color: #7eb6ff;
  border-radius: 5px;
`;

export const ListWrapper = styled.View`
  flex: 1;
  margin-top: 50px;
`;

export const ListTitle = styled.Text`
  font-size: 16px;
  color: #aaa;
  margin-bottom: 20px;
`;

export const List = styled.FlatList``;