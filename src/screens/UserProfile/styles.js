import styled from 'styled-components/native';

export const FavoriteWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 50px;
`;

export const FavoriteAsk = styled.Text`
  font-size: 16px;
  color: #aaa;
`;

export const FavoriteButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

export const RepositoriesList = styled.FlatList``;

export const ListItem = styled.TouchableOpacity`
  background: #ffffff;
  height: 70px;
  
  border-width: 0.8px;
  border-color: #dddddd88;
  border-radius: 5px;

  padding: 10px 20px;
  margin-bottom: 20px;

  flex-direction: row;
  align-items: center;
`;

export const RepositoryData = styled.View`
  margin-left: 20px;
  justify-content: center;
`;

export const RepositoryTitle = styled.Text`
  font-size: 15px;
  color: #040404;
  font-weight: bold;
`;

export const RespositoryDescription= styled.Text`
  font-size: 13px;
  color: #ccc;
`;