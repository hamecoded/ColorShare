import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Counter from './components/Counter';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>this is the title</h1>
      <Counter />
    </div>
  </Provider>
);

export default App;