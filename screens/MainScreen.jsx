import * as React from 'react';
import PropTypes from 'prop-types';
import { API_KEY } from '@env';
// https://www.angularfix.com/2022/07/react-native-dotenv-unable-to-resolve.html

import { View, Text, Button } from 'react-native';

function MainScreen({ navigation }) {
  return (
    <View>
      <Text>MainScreen</Text>
      <Text>
        KEY:
        {API_KEY}
      </Text>
      <Button title="Go to Auth" onPress={() => navigation.navigate('AuthScreen')} />
    </View>
  );
}

export default MainScreen;

MainScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
