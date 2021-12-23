import { rootReducer } from './combineReducer';

export const selectIsLoading = (state: rootReducer): boolean => state.main.isLoading;
export const selectError = (state: rootReducer): string | null => state.main.error;
