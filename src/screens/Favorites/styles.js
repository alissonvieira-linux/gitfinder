import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const ScreenName = styled.Text`
  font-size: 16px;
  color: #aaa;
  margin-bottom: 20px;
`;

export const List = styled.FlatList``;

export const ListWrapper = styled.View`
  background: #ffffff;
  height: 70px;
  
  border-width: 0.8px;
  border-color: #dddddd88;
  border-radius: 5px;

  padding: 10px 20px;
  margin-bottom: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;`;

export const AvatarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;

  border-radius: 5px;
`;

export const RemoveButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
`;

export const Username = styled.Text`
  font-size: 15px;
  color: #aaa;
  margin-left: 20px;
`;
