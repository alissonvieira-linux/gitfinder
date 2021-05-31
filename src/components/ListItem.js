import React from 'react';
import styled from 'styled-components/native';

import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Container = styled.TouchableOpacity`
  background: #ffffff;
  height: 70px;
  
  border-width: 0.8px;
  border-color: #dddddd88;
  border-radius: 5px;

  padding: 10px 20px;
  margin-bottom: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const AvatarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  height: 50px;
  width: 50px;

  border-radius: 5px;
`;

const Username = styled.Text`
  font-size: 15px;
  color: #aaa;
  margin-left: 20px;
`;

const ListItem = ({ user }) => {
  const navigation = useNavigation();

  function handleNavigateToUserProfile() {
    navigation.navigate('UserProfile', { user });
  }

  return (
    <Container onPress={handleNavigateToUserProfile}>
      <AvatarWrapper>
        <Avatar 
          source={{ uri: user.avatar_url }}
        />
        <Username>{user.login}</Username>
      </AvatarWrapper>
      <FontAwesome name="angle-right" size={18} color="#999" />
    </Container>
  );
}

export default ListItem;