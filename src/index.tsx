import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// fix ts bug
declare global {
  namespace JSX {
      interface IntrinsicElements {
          [PropName: string]: any;
      }
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
