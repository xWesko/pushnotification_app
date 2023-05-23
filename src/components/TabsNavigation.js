import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TabsNavigation = ({navigation}) => {
  const rutasMenu = [
    {label: 'Inicio', path: 'Home'},
    {label: 'Listado', path: 'Listado'},
  ];

  const Button = ({label = '', path = ''}) => {
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate(path)}>
        <Text style={styles.btnText}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.tabContainer}>
      {rutasMenu.length > 0 &&
        rutasMenu.map((i, index) => (
          <Button key={index} label={i.label} path={i.path} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#CDCDCD',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  btn: {
    marginRight: 20,
  },
  btnText: {
    fontSize: 17,
  },
});

export default TabsNavigation;
