import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const EmptyList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>Ничего не найдено</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  emptyText: {
    fontSize: 18,
  },
});
