import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const EmptyList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Ничего не найдено</Text>
      <Text>Введите новое имя в поле поиска</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});