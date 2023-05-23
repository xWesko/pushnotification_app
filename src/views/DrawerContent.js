import React from 'react';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Text, StyleSheet, View} from 'react-native';

const DrawerContent = props => {
  return (
    <Text style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View>
            <Text>adasdas</Text>
          </View>
        </View>
      </DrawerContentScrollView>
    </Text>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
});

export default DrawerContent;
