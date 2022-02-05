import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, View } from 'react-native';

import colors from '../constants/colors';

type SearchInputType = {
  onSubmit: (text: string) => void;
  testID?: string;
};

const SearchInput: React.FC<SearchInputType> = ({ onSubmit, testID }) => {
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
        testID={testID}
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
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  img: {
    alignSelf: 'center',
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
