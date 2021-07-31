import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import createStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  let preloadedState = undefined;
  debugger
  if (window.currentUser) {
    preloadedState = {
      session: {
        id: window.currentUser.id
      }
    }
  }
  let store = createStore(preloadedState);

  ReactDOM.render(<Root store={store} />, root);
});