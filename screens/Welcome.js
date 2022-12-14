import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from './../components/styles';

const Welcome = ({navigation}) => {
  // const {name , email} = route.params;
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/Tonly_logo.png')} />
        <WelcomeContainer>
        <PageTitle >Welcome to </PageTitle>
          <SubTitle>TRANS CURRENCY App</SubTitle>
          {/* <SubTitle >{'ABCD@gmail.com'}</SubTitle> */}
          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/Tonly_logo.png')} />
            <Line />
            <StyledButton onPress={() => {navigation.navigate('Login')}}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
