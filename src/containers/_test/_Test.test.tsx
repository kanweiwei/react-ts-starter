import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './_Test';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
