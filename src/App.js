import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import PessoasList from './pessoasList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PessoasList/>
      </Provider>
    );
  }
}

export default App;
