import { RootReducer } from './combineReducer';

export const selectIsLoading = (state: RootReducer): boolean => state.main.isLoading;
export const selectErrorMessage = (state: RootReducer): string | undefined =>
  state.main.errorMessage;
export const selectCountry = (state: RootReducer): string => state.main.currentCountry;
