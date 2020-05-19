// plik będzie odpowiedzialny za wszystkie szczegóły obsługi kolumn przez reduksowy magazyn
import shortid from 'shortid';

// selectors
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// action name creator
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`;  //  Na przykład, jeśli wykorzystamy tę funkcję z argumentem 'TEST', w rezultacie otrzymamy ciąg znaków 'app/columns/TEST'.
// `app/${reducerName}/${name}` to samo co to - 'app/' + reducerName + '/' + name , uzywamy backticka ` i możemy używać zmiennych (lub innych wyrażeń JS), zamykając je w nawiasach klamrowych poprzedzonych znakiem dolara ${ 

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');    // ADD_COLUMN przyjmie wartość 'app/columns/ADD_COLUMN'.

// action creators
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {              // switch podobne do if else, if else
    case ADD_COLUMN:
      return [...state, action.payload];
    default:
      return state;
  }
}