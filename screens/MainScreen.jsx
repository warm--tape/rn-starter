import * as React from 'react';
import PropTypes from 'prop-types';
import { API_KEY } from '@env';

import { Container, VStack, Button, Text } from 'native-base';

function MainScreen({ navigation }) {
  return (
    <Container>
      <VStack>
        <Text>MainScreen</Text>
        <Text>
          KEY:
          {API_KEY}
        </Text>
        <Button onPress={() => navigation.navigate('AuthScreen')}>Go to Auth</Button>
      </VStack>
    </Container>
  );
}

export default MainScreen;

MainScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
