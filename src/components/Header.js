import React from 'react';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

import { FontAwesome } from '@expo/vector-icons';

const Wrapper = styled.View`
  background: #040404;
  height: 210px;
  padding: 10px 30px;
  margin-top: 10px;

  justify-content: center;
  align-items: flex-end;

  z-index: 1;
`;

const Header = () => {
  return (
    <Wrapper>
      <FontAwesome name="github" size={150} color="#d6d6d6" />
    </Wrapper>
  )
}

export default Header;