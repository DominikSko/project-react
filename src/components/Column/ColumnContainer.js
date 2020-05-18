import {connect} from 'react-redux';
import Column from './Column';

//export const getCardsForColumn = ({cards}, listId) => cards.filter(card => card.listId == listId);
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId); // do omówienia

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);