import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer,
})


//innitially
//console.log(store.getState());
//{ libraries:[] } will be N EMPTY ARRAY
// WHAT EVER RETURN LIBRARY REDUCER IS THE STATE


//after implimented will get data back