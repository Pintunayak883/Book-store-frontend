import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import MyProvider from "./Context/MyContext";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <MyProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MyProvider>
    </Provider>
  </React.StrictMode>
);
