import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

import colors from '../constants/colors';

type ErrorModal = {
  errorMessage?: string;
  onCloseError: () => void;
};

export const ErrorModal: React.FC<ErrorModal> = ({ errorMessage, onCloseError }) => {
  return (
    <Modal isVisible={!!errorMessage} animationIn={'zoomInUp'} testID="error-modal">
      <View style={styles.modalContainer}>
        <View style={styles.modalWindow}>
          <Text style={styles.errorMessage}>Ошибка:</Text>
          <Text style={styles.errorMessage} testID="error-message">
            {errorMessage}
          </Text>
          <Button title={'Назад'} onPress={onCloseError} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWindow: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.red,
    backgroundColor: colors.white,
  },
  errorMessage: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.red,
  },
});
