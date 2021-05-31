import React, { useState, useEffect } from 'react';
import { Keyboard, Alert, ActivityIndicator } from 'react-native';
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  ListWrapper,
  ListTitle,
  List
} from './styles';

import { FontAwesome } from '@expo/vector-icons';

import Header from '../../components/Header';
import Card from '../../components/Card';
import EmptyUsersList from '../../components/EmptyUsersList';
import ListItem from '../../components/ListItem';

import { github_api } from '../../services/github.api';

const Search = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [keyboardShow, setKeyboardShow] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setKeyboardShow(true));
    Keyboard.addListener('keyboardDidHide', () => setKeyboardShow(false));
  }, []);

  async function handleSearchUser() {
    Keyboard.dismiss();

    if (username === '') {
      Alert.alert(
        "Oops",
        "Você deve informar um usuário GitHub.",
        [
          {
            text: "Tentar novamente"
          }
        ]
      )
      return;
    }

    const response = await github_api.get(`/search/users?q=${username}`);

    if (response.data.total_count === 0) {
      Alert.alert(
        "Oops",
        "Nenhum usuário encontrado.",
        [
          {
            text: "Tentar novamente"
          }
        ]
      )
      return;
    }

    setUsers(response.data.items);
    setUsername('');
  }

  return (
    <>
      <Header />
      <Card>
        <SearchContainer>
          <SearchInput 
            placeholder="Buscar usuário"
            value={username}
            onChangeText={text => setUsername(text)}
            autoCorrect={false}
          />
          <SearchButton onPress={handleSearchUser}>
            <FontAwesome name="search" size={25} color="#fff" />
          </SearchButton>
        </SearchContainer>

        {
          users.length === 0 
          ?
          <EmptyUsersList keyboardShow={keyboardShow} />
          :
          <ListWrapper>
            <ListTitle>Usuários encontrados</ListTitle>
            <List 
              data={users}
              keyExtractor={user => String(user.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: user }) => <ListItem user={user} />}
            />
          </ListWrapper>
        }     
      </Card>
    </>
  );
}

export default Search;