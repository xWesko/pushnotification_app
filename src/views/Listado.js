import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TabsNavigation from '../components/TabsNavigation';

const Listado = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Listado</Text>
      </View>
      <TabsNavigation navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Listado;
