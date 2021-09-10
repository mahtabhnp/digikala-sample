import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./core/redux/store";
import ProductList from "./pages/ProductList";
import CardList from "./pages/CardList";
import ProductDetail from "./pages/ProductDetail";
import RouterWrapper from "./core/components/RouterWrapper";
import "./App.scss";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouterWrapper>
          <Switch>
            <Route path="/" exact>
              <ProductList />
            </Route>
            <Route path="/product/:productId" exact>
              <ProductDetail />
            </Route>
            <Route path="/card" exact>
              <CardList />
            </Route>
          </Switch>
        </RouterWrapper>
      </Router>
    </Provider>
  );
}
