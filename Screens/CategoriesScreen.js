import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container} >
      <Text>Categorias</Text>
      <Button 
        title = 'Ir a Productos...'
        onPress={() => navigation.navigate('Productos')}
        >

      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


