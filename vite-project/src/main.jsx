import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { store } from './App/Redux/store.js';
import { Provider } from 'react-redux';
import ErrorBoundary from './Components/ERROR/App.jsx'; // Ensure this path is correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
