import {connect} from 'react-redux';
import Column from './Column';
import { getCardsForColumn} from '../../redux/cardsRedux.js';
import { createActionAddCard } from '../../redux/cardsRedux.js';

//export const getCardsForColumn = ({cards}, listId) => cards.filter(card => card.listId == listId);
//export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId); // do omówienia

const mapStateToProps = (state,props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);