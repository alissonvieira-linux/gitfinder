import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const GithubImage = styled.Image`
  height: 150px;
  width: 150px;

  margin-bottom: 20px;
`;

const Text = styled.Text`
  font-size: 15px;
  color: #ccc;
`;

const EmptyUsersList = ({ keyboardShow, text }) => {
  return (
    <Wrapper>
      {
        !keyboardShow &&
        <GithubImage 
          source={{ uri: 'https://github.githubassets.com/images/modules/logos_page/Octocat.png' }}
        />
      }
      <Text>{text ? text : 'Está meio vazio por aqui!'}</Text>
      <Text>Busque por um usuário.</Text>
    </Wrapper>
  );
}

export default EmptyUsersList;