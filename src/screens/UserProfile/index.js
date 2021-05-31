import React, { useState, useEffect } from 'react';

import {
  FavoriteWrapper,
  FavoriteAsk,
  FavoriteButton,
  RepositoriesList,
  ListItem,
  RepositoryTitle,
  RepositoryData,
  RespositoryDescription
} from './styles';

import Header from '../../components/Header';
import Card from '../../components/Card';
import { FontAwesome } from '@expo/vector-icons';

import { useRoute } from '@react-navigation/native';
import { github_api } from '../../services/github.api';
import { useFavorite } from '../../hooks/useFavorite';

const UserProfile = () => {
  const { user } = useRoute().params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const { addFavorite, removeFavorite, favorites } = useFavorite();
 
  useEffect(() => {
    async function favoriteUser() {
      if (isFavorite) {
        await addFavorite(user);
      } else {
        await removeFavorite(user);
      }
    }
    favoriteUser();
  }, [isFavorite]);

  useEffect(() => {
    async function loadRepositories() {
      const response = await github_api.get(`/users/${user.login}/repos`);
      let data = [];

      response.data.map(repository => {
        let { id, name, description, html_url } = repository;

        if (description && !description.length < 29) {
          description = `${description.slice(0, 29)}...`;
        }

        data = [...data, { id, name, description, html_url }];
      });

      setRepositories(data);
    }
    loadRepositories();
  }, [user]);

  useEffect(() => {
    async function verifyFavoriteStatus() {
      favorites.forEach(favorite => {
        if (favorite.id === user.id) {
          setIsFavorite(true);
        }
      });
    }
    verifyFavoriteStatus();
  }, []);

  return (
    <>
      <Header />
      <Card>
        <FavoriteWrapper>
          <FavoriteAsk>Favoritar {user.login}?</FavoriteAsk>
          <FavoriteButton onPress={() => setIsFavorite(!isFavorite)}>
            {
              isFavorite 
              ? <FontAwesome name="heart" color="#e02041" size={20} />
              : <FontAwesome name="heart-o" color="#aaa" size={20} />
            }
          </FavoriteButton>
        </FavoriteWrapper>

        <RepositoriesList 
          data={repositories}
          keyExtractor={repository => String(repository.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: repository }) => (
            <ListItem>
              <FontAwesome name="folder" size={50} color="#7eb6ff" />

              <RepositoryData>
                <RepositoryTitle>{repository.name}</RepositoryTitle>
                <RespositoryDescription>{repository.description}</RespositoryDescription>
              </RepositoryData>
            </ListItem>
          )}
        />
      </Card>
    </>
  );
}

export default UserProfile;