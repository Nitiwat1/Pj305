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
} from '../TSScreens/Styles';

const Welcome = ({navigation, route}) => {
  // const {name , email} = route.params;
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/Tonly_logo.png')} />
        <WelcomeContainer>
          <PageTitle >Welcome to  </PageTitle>
          <SubTitle >{'Trans Currency'}</SubTitle>
          <SubTitle >{'transcurrency@gmail.com'}</SubTitle>
          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/Tonly_logo.png')} />
            {/* <Line />
            <StyledButton onPress={() => {navigation.navigate('Login')}}>
              <ButtonText>Logout</ButtonText>
            </StyledButton> */}
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;