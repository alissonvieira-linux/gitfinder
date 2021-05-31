import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  margin-top: -20px;
  padding: 50px 30px;
  background: #fdfdfd;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  z-index: 2;
`;

const Card = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Card;