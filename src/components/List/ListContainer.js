import {connect} from 'react-redux';
import List from './List';
import { getColumnsForList } from '../../redux/columnsRedux.js';
import { createActionAddColumn } from '../../redux/columnsRedux.js';

//  zwraca tablicę, zawierającą wyłącznie kolumny o listId pasującym do wyświetlanej listy
// export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// mapStateToProps, która dodaje propsy komponentu List, wykorzystując fragmenty stanu aplikacji z reduksowego magazynu (store).
const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

// mapDispatchToProps to funkcja, która nadaje komponentowi propsy, w których znajdą się funkcje wysyłające akcje do magazynu. Pamiętaj, że akcja jest zgłoszeniem chęci zmiany stanu aplikacji.
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);