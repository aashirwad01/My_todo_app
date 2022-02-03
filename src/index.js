import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'; //act as store provider given by react-redux
import App from './App';
import { store } from './redux/store'; //this is the store we created
//import { ConnectedApp } from "./App";


const ReduxApp = ()=> {
  return<>
  {/*using this provider we are going bind the store to our application and provide store as the context */}
  <Provider store={store}>
      <App />
  </Provider>
  </>
}

ReactDOM.render( <ReduxApp />, document.getElementById('root'));


