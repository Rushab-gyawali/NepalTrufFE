import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App'; 
import store from './features/store';  
import './index.css';  

const container = document.getElementById("root");
if (!container) {
  throw new Error(
    "Root container element not found. Please ensure an element with id 'root' exists in your HTML."
  );
}
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
