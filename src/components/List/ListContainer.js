import {connect} from 'react-redux';
import List from './List';
import { getColumnsForList } from '../../redux/columnsRedux.js';
import { createActionAddColumn } from '../../redux/columnsRedux.js';

//  zwraca tablicę, zawierającą wyłącznie kolumny o listId pasującym do wyświetlanej listy
// export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// mapStateToProps, która dodaje propsy komponentu List, wykorzystując fragmenty stanu aplikacji z reduksowego magazynu (store).
// Jest to funkcja, która przyjmuje dwa argumenty (state i props), a zwraca obiekt zawierający jedną właściwość (columns
//const mapStateToProps = (state, props) => ({
//  columns: getColumnsForList(state, props.id),
//});

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

// mapDispatchToProps to funkcja, która nadaje komponentowi propsy, w których znajdą się funkcje wysyłające akcje do magazynu. Pamiętaj, że akcja jest zgłoszeniem chęci zmiany stanu aplikacji.
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);