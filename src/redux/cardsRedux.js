import shortid from 'shortid';

// selectors
// Twoim zadaniem jest dodanie drugiego warunku (połączonego operatorem oraz &&), który będzie sprawdzał czy tytuł karty pasuje do wyszukiwanej frazy, czyli: new RegExp(searchString, 'i').test(card.title) 
// Pamiętaj o uwzględnieniu searchString w destrukturyzacji argumentu funkcji strzałkowej!
// w cardsRedux.js musisz usunąć fragment kodu, odpowiadający za filtrowanie kart wedle wyszukanej frazy,
//export const getCardsForColumn = ({cards,searchString}, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));   // do omówienia
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export const getCardsForSearch = ({cards}, searchString) => cards.filter(card =>  new RegExp(searchString, 'i').test(card.title));

// action name creator
const reducerName = 'cards';                 // do omówienia
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}