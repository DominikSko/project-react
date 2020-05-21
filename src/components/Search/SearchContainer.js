import {connect} from 'react-redux';
import Search from './Search';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),  // props zawierający aktualną frazę wyszukania, pobraną ze stanu aplikacji,
  countVisible: countVisibleCards(state),// zawierający liczbę kart widocznych po przefiltrowaniu,
  countAll: countAllCards(state),        //  zawierający liczbę wszystkich kart,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),  // dispatcher wysyłający akcję, która ma na celu zmianę searchString w stanie aplikacji.
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
