import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Master from "./components/master/Master";
import { Provider } from "react-redux";
import setupStore from "./redux/Store";
import { BrowserRouter as Router } from "react-router-dom";

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={null}>
      <Router>
        <Master />
      </Router>
    </Suspense>
  </Provider>,
  document.querySelector("#root")
);
