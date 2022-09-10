import * as React from 'react';
import PropTypes from 'prop-types'; // ES6

import { Container, VStack, Button, Text } from 'native-base';

function AuthScreen({ navigation }) {
  return (
    <Container>
      <VStack>
        <Text>AuthScreen</Text>
        <Button onPress={() => navigation.navigate('MainScreen')}>Go to MainScreen</Button>
      </VStack>
    </Container>
  );
}

export default AuthScreen;

AuthScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
