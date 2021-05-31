import React from 'react';

import {
  Container,
  ScreenName,
  List,
  ListWrapper,
  AvatarWrapper,
  Avatar,
  RemoveButton,
  Username
} from './styles';

import Header from '../../components/Header';
import Card from '../../components/Card';
import EmptyUsersList from '../../components/EmptyUsersList';
import { FontAwesome } from '@expo/vector-icons';

import { useFavorite } from '../../hooks/useFavorite';

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorite();

  return (
    <>
      <Header />
      <Card>
        <Container>
          <ScreenName>Meus favoritos</ScreenName>
          {
            favorites.length === 0
            ? <EmptyUsersList text="Você ainda não favoritou ninguém." />
            : 
            <List 
              data={favorites}
              keyExtractor={user => String(user.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: user }) => (
                <ListWrapper>
                  <AvatarWrapper>
                    <Avatar 
                      source={{ uri: user.avatar_url }}
                    />
                    <Username>{user.login}</Username>
                  </AvatarWrapper>
                  <RemoveButton onPress={() => removeFavorite(user)}>
                    <FontAwesome name="trash" size={18} color="#e02041" />
                  </RemoveButton>
                </ListWrapper>
              )}
            />
          }
        </Container>
      </Card>
    </>
  );
}

export default Favorites;