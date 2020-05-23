// Powiązanie stanu aplikacji z propsami
// Wszystko idzie zgodnie z planem – kolejny krok to przekazanie danych ze stanu aplikacji jako propsów komponentu App. Pewnie domyślasz się, że zrobimy to w pliku index.js, ale tu Cię zaskoczymy – powiązanie stanu aplikacji z propsami wykonamy w kontenerze!

//Kontener jest nowością, którą wprowadzamy razem z Reduksem. Pozwoli nam to na oddzielenie warstwy współpracującej ze stanem od samego komponentu. Stwórz plik src/components/App/AppContainer.js i umieść w nim poniższy kod:
// Uzyskaliśmy to dzięki plikowi AppContainer.js. Wszystko, co musisz o nim wiedzieć, to:

//importuje komponent, dla którego jest kontenerem – w tym wypadku App,
//w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem,
//wyrażenie, które eksportujemy na końcu pliku, jest odpowiedzialne za połączenie komponentu App z magazynem, czyli sprawia, że wszystko działa – nie potrzebujesz rozumieć tego wyrażenia, wystarczy Ci informacja, że w ostatniej parze nawiasów musimy podać komponent, który jest wykorzystywany w tym kontenerze.


import {connect} from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps)(Home);