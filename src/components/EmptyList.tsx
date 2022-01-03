import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const EmptyList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Ничего не найдено</Text>
      <Text>Проверьте написание и попробуйте снова</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
});
