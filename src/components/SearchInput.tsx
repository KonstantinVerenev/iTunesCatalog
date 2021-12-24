import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

type SearchInputType = {
  onSubmit: (text: string) => void;
};

const SearchInput: React.FC<SearchInputType> = ({ onSubmit }) => {
  const [searchString, setSearchString] = useState('');

  const onChangeInput = (value: string): void => {
    setSearchString(value);
  };

  const onSubmitInput = (): void => {
    onSubmit(searchString);
  };

  return (
    <View style={styles.inputContainer}>
      <Image style={styles.img} source={{ uri: 'search' }} />
      <TextInput
        style={styles.inputField}
        placeholder={'Поиск'}
        onChangeText={onChangeInput}
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
    borderColor: 'grey',
  },
  img: {
    position: 'absolute',
    width: 20,
    height: 20,
    marginHorizontal: 5,
    opacity: 0.5,
  },
  inputField: {
    flex: 1,
    height: '100%',
    paddingLeft: 35,
    fontSize: 16,
  },
});
