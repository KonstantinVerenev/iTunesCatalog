import { RootReducer } from './combineReducer';

export const selectIsLoading = (state: RootReducer): boolean => state.main.isLoading;
export const selectError = (state: RootReducer): string | null => state.main.error;
