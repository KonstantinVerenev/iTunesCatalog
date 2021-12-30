import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

type ErrorModal = {
  error: string | null;
  onCloseError: () => void;
};

export const ErrorModal: React.FC<ErrorModal> = ({ error, onCloseError }) => {
  return (
    <Modal isVisible={error ? true : false} animationIn={'zoomInUp'}>
      <View style={styles.modalContainer}>
        <View style={styles.modalWindow}>
          <Text style={styles.errorMessage}>
            Ошибка: {'\n'}
            {error}
          </Text>
          <Button title={'Назад'} onPress={onCloseError} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'tomato',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWindow: {
    width: 300,
    maxWidth: '90%',
    height: 200,
    maxHeight: '90%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'tomato',
    backgroundColor: 'white',
  },
});
