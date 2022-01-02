import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, View } from 'react-native';

import colors from '../constants/colors';

type SearchInputType = {
  onSubmit: (text: string) => void;
};

const SearchInput: React.FC<SearchInputType> = ({ onSubmit }) => {
  const [searchString, setSearchString] = useState('');

  const onSubmitInput = (): void => {
    onSubmit(searchString);
  };

  return (
    <View style={styles.inputContainer}>
      <Image
        style={styles.img}
        source={
          Platform.OS === 'ios' ? { uri: 'search' } : require('../../assets/icons/search.png')
        }
      />
      <TextInput
        style={styles.inputField}
        placeholder={'Поиск'}
        onChangeText={setSearchString}
        returnKeyType={'search'}
        onSubmitEditing={onSubmitInput}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  img: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    opacity: 0.5,
  },
  inputField: {
    flex: 1,
    fontSize: 16,
  },
});
