import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { StateProvider } from "./stateprovider/stateProvider";

import reducer, { intialState } from "./stateprovider/Reducer/Reducer";
ReactDOM.render(
  <React.StrictMode>
    <StateProvider intialState={intialState} reducer={reducer}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();