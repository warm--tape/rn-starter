import * as React from 'react';
import PropTypes from 'prop-types'; // ES6

import { View, Text, Button } from 'react-native';

function AuthScreen({ navigation }) {
  return (
    <View>
      <Text>AuthScreen</Text>
      <Button title="Go to Main" onPress={() => navigation.navigate('MainScreen')} />
    </View>
  );
}

export default AuthScreen;

AuthScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
