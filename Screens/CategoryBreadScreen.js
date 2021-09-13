import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const CategoryBreadsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Categorias de Panes</Text>
        <Button
        title = 'IR AL DETALLE...'
        onPress = {() => navigation.navigate('Detalles de panes')} 
        >
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryBreadsScreen


