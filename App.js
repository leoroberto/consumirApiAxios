/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import axios from 'axios';

const App: () => React$Node = () => {
  const [cep, setCep] = React.useState('');
  const [rua, setRua] = React.useState('');

  const pegarEndereco = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      setRua(response.data.logradouro);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Digite o CEP: </Text>
      <TextInput onChangeText={(text) => setCep(text)} value={cep} />
      <Button
        title="Clique aqui para preencher"
        onPress={() => pegarEndereco()}
      />
      <Text>{rua}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
